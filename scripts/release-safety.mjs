import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

const maxHtmlFilesPerCommit = 12;
const [baseRef = "HEAD^", headRef = "HEAD"] = process.argv.slice(2);
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

if (!hasParentCommit()) {
  console.log("Release safety checks skipped because no parent commit is available.");
  process.exit(0);
}

const changedFiles = git(["diff", "--name-only", baseRef, headRef])
  .split("\n")
  .filter(Boolean);
const changedHtml = changedFiles.filter((file) => file.endsWith(".html"));

assert.ok(
  changedHtml.length <= maxHtmlFilesPerCommit,
  `Release changes ${changedHtml.length} HTML pages. Split the update into batches of ${maxHtmlFilesPerCommit} or fewer so search impact can be measured and rolled back safely.`,
);

const changedCritical = changedHtml.filter((file) => criticalFiles.has(file));
assert.ok(
  !(changedCritical.length > 0 && changedHtml.length > 3),
  `Critical search pages (${changedCritical.join(", ")}) cannot ship in the same commit as a broad ${changedHtml.length}-page update.`,
);

if (changedFiles.includes("sitemap.xml")) {
  const previousSitemap = parseSitemap(git(["show", `${baseRef}:sitemap.xml`]));
  const currentSitemap = parseSitemap(git(["show", `${headRef}:sitemap.xml`]));
  const changedLastmodLocations = [];

  for (const [location, lastmod] of currentSitemap) {
    if (previousSitemap.get(location) !== lastmod) changedLastmodLocations.push(location);
  }

  const unrelatedLastmod = changedLastmodLocations.filter(
    (location) => !changedHtml.includes(fileForLocation(location)),
  );
  assert.deepEqual(
    unrelatedLastmod,
    [],
    `Sitemap lastmod changed without matching page content changes: ${unrelatedLastmod.join(", ")}`,
  );
}

console.log(
  `Release safety checks passed (${changedHtml.length} HTML files changed; limit ${maxHtmlFilesPerCommit}).`,
);
