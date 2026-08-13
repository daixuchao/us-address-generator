import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const maxHtmlFilesPerCommit = 12;
const [baseRef = "HEAD^", headRef = "HEAD"] = process.argv.slice(2);
const phase2ManifestPath = "PHASE2_STABLE_CORE_RELEASE.json";
const approvedLastmodBackfills = new Map([
  [
    "https://global-address.com/",
    {
      lastmod: "2026-08-01",
      contentRef: "59d1817bf0022636e5ea49a6faa3447ef3d2bc31",
      reason: "Plan B homepage content was deployed before its sitemap date was corrected.",
    },
  ],
]);
const criticalFiles = new Set([
  "index.html",
  "us-address-generator.html",
  "japan-address-generator.html",
  "uk-address-generator.html",
  "korea-address-generator.html",
  "eu-address-generator.html",
  "southeast-asia-address-generator.html",
  "guides.html",
]);

function git(args, options = {}) {
  return execFileSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    ...options,
  }).trim();
}

function hasParentCommit() {
  try {
    git(["rev-parse", "--verify", baseRef]);
    git(["rev-parse", "--verify", headRef]);
    return true;
  } catch {
    return false;
  }
}

function parseSitemap(xml) {
  const entries = new Map();
  for (const block of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const location = block[1].match(/<loc>([^<]+)<\/loc>/)?.[1];
    const lastmod = block[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1];
    if (location) entries.set(location, lastmod);
  }
  return entries;
}

function fileForLocation(location) {
  const path = new URL(location).pathname;
  if (path === "/") return "index.html";
  if (path === "/en/") return "en/index.html";
  return `${path.slice(1)}.html`;
}

function isApprovedLastmodBackfill(location, lastmod) {
  const approval = approvedLastmodBackfills.get(location);
  if (!approval || approval.lastmod !== lastmod) return false;

  const pageFile = fileForLocation(location);
  try {
    return (
      git(["show", `${approval.contentRef}:${pageFile}`]) ===
      git(["show", `${headRef}:${pageFile}`])
    );
  } catch {
    return false;
  }
}

function gitObjectExists(ref, file) {
  try {
    git(["cat-file", "-e", `${ref}:${file}`]);
    return true;
  } catch {
    return false;
  }
}

function validatePhase2Release(changedHtml) {
  if (!gitObjectExists(headRef, phase2ManifestPath)) return false;

  const manifest = JSON.parse(readFileSync(phase2ManifestPath, "utf8"));
  assert.equal(
    git(["rev-parse", baseRef]),
    manifest.expectedBase,
    "Phase 2 release must start from the audited production baseline.",
  );
  assert.equal(
    git(["rev-parse", manifest.stableContentRef]),
    manifest.stableContentRef,
    "Phase 2 stable content reference must resolve exactly.",
  );

  const isolated = new Set(manifest.isolatedNoindexPages);
  const technicalExceptions = new Set(manifest.technicalHtmlExceptions);
  for (const file of changedHtml) {
    if (isolated.has(file)) {
      assert.match(
        git(["show", `${headRef}:${file}`]),
        /<meta\s+name="robots"\s+content="noindex,follow">/i,
        `${file} must be noindex,follow in the Phase 2 release.`,
      );
      continue;
    }

    if (technicalExceptions.has(file)) continue;

    assert.ok(
      gitObjectExists(manifest.stableContentRef, file),
      `${file} is neither a stable page nor an approved isolated page.`,
    );
    if (file !== "index.html") {
      assert.equal(
        git(["show", `${headRef}:${file}`]),
        git(["show", `${manifest.stableContentRef}:${file}`]),
        `${file} must exactly match the audited stable content.`,
      );
    }
  }

  const homepage = git(["show", `${headRef}:index.html`]);
  assert.match(homepage, /<title>多国地址生成器 - 地址随机生成工具 \| Global Address Generator<\/title>/);
  assert.match(homepage, /<h1 id="pageTitle">多国地址生成器<\/h1>/);
  assert.doesNotMatch(homepage, /"@type"\s*:\s*"FAQPage"/);

  const notFound = git(["show", `${headRef}:404.html`]);
  assert.match(notFound, /<meta name="robots" content="noindex,follow">/);
  assert.doesNotMatch(notFound, /address-qa-lab|methodology/);

  return true;
}

if (!hasParentCommit()) {
  console.log("Release safety checks skipped because no parent commit is available.");
  process.exit(0);
}

const changedFiles = git(["diff", "--name-only", baseRef, headRef])
  .split("\n")
  .filter(Boolean);
const changedHtml = changedFiles.filter((file) => file.endsWith(".html"));
const approvedPhase2Release = validatePhase2Release(changedHtml);

assert.ok(
  approvedPhase2Release || changedHtml.length <= maxHtmlFilesPerCommit,
  `Release changes ${changedHtml.length} HTML pages. Split the update into batches of ${maxHtmlFilesPerCommit} or fewer so search impact can be measured and rolled back safely.`,
);

const changedCritical = changedHtml.filter((file) => criticalFiles.has(file));
assert.ok(
  approvedPhase2Release || !(changedCritical.length > 0 && changedHtml.length > 3),
  `Critical search pages (${changedCritical.join(", ")}) cannot ship in the same commit as a broad ${changedHtml.length}-page update.`,
);

if (changedFiles.includes("sitemap.xml")) {
  const previousSitemap = parseSitemap(git(["show", `${baseRef}:sitemap.xml`]));
  const currentSitemap = parseSitemap(git(["show", `${headRef}:sitemap.xml`]));
  const changedLastmodLocations = [];

  for (const [location, lastmod] of currentSitemap) {
    if (previousSitemap.get(location) !== lastmod) changedLastmodLocations.push(location);
  }

  const approvedBackfills = changedLastmodLocations.filter((location) =>
    isApprovedLastmodBackfill(location, currentSitemap.get(location)),
  );
  const unrelatedLastmod = changedLastmodLocations.filter(
    (location) =>
      !changedHtml.includes(fileForLocation(location)) &&
      !approvedBackfills.includes(location),
  );
  assert.deepEqual(
    unrelatedLastmod,
    [],
    `Sitemap lastmod changed without matching page content changes: ${unrelatedLastmod.join(", ")}`,
  );

  for (const location of approvedBackfills) {
    const approval = approvedLastmodBackfills.get(location);
    console.log(`Approved sitemap lastmod backfill: ${location} (${approval.reason})`);
  }
}

console.log(
  approvedPhase2Release
    ? `Release safety checks passed (${changedHtml.length} HTML files validated against the Phase 2 stable-core manifest).`
    : `Release safety checks passed (${changedHtml.length} HTML files changed; limit ${maxHtmlFilesPerCommit}).`,
);
