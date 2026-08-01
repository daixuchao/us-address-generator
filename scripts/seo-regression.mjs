import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { onRequest } from "../functions/_middleware.js";

const origin = "https://global-address.com";
const excludedHtml = new Set(["404.html", "baidu_verify_codeva-DlQjPzG0IB.html"]);
const criticalPages = {
  "index.html": {
    title: "多国地址生成器 - 地址随机生成工具 | Global Address Generator",
    canonical: `${origin}/`,
    h1: "多国地址生成器",
  },
  "us-address-generator.html": {
    title: "美国地址生成器 - 随机美国地址 | Global Address Generator",
    canonical: `${origin}/us-address-generator`,
    h1: "美国地址生成器",
  },
  "japan-address-generator.html": {
    title: "日本地址随机生成器 - Global Address Generator",
    canonical: `${origin}/japan-address-generator`,
    h1: "日本地址随机生成器",
  },
  "uk-address-generator.html": {
    title: "英国地址生成器 - Global Address Generator",
    canonical: `${origin}/uk-address-generator`,
    h1: "随机生成英国地址",
  },
  "korea-address-generator.html": {
    title: "韩国地址生成器 - Global Address Generator",
    canonical: `${origin}/korea-address-generator`,
    h1: "随机生成韩国地址",
  },
  "eu-address-generator.html": {
    title: "欧盟国家地址生成器 - Global Address Generator",
    canonical: `${origin}/eu-address-generator`,
    h1: "随机生成欧盟国家地址",
  },
  "southeast-asia-address-generator.html": {
    title: "东南亚地址生成器 - Global Address Generator",
    canonical: `${origin}/southeast-asia-address-generator`,
    h1: "随机生成东南亚国家地址",
  },
  "guides.html": {
    title: "地址知识中心 - 美国地址生成器",
    canonical: `${origin}/guides`,
    h1: "地址知识中心",
  },
};

function trackedHtmlFiles() {
  return execFileSync("git", ["ls-files", "*.html"], { encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean)
    .filter((file) => !excludedHtml.has(file));
}

function canonicalPathForFile(file) {
  if (file === "index.html") return "/";
  if (file === "en/index.html") return "/en/";
  return `/${file.replace(/\.html$/, "")}`;
}

function matchText(html, pattern, label) {
  const match = html.match(pattern);
  assert.ok(match, `${label} must exist`);
  return match[1].replace(/<[^>]+>/g, "").trim();
}

async function middlewareResult(path, hostname = "global-address.com") {
  return onRequest({
    request: new Request(`https://${hostname}${path}`),
    next: async () => new Response("next", { status: 200 }),
  });
}

const redirectCases = [
  ["/index.html", `${origin}/`],
  ["/index", `${origin}/`],
  ["/en/index.html", `${origin}/en/`],
  ["/en/index", `${origin}/en/`],
  ["/us-address-generator.html", `${origin}/us-address-generator`],
];

for (const [path, expectedLocation] of redirectCases) {
  const response = await middlewareResult(path);
  assert.equal(response.status, 301, `${path} must return a permanent redirect`);
  assert.equal(
    response.headers.get("location"),
    expectedLocation,
    `${path} must redirect directly to its canonical URL`,
  );
}

const wwwResponse = await middlewareResult("/", "www.global-address.com");
assert.equal(wwwResponse.status, 301, "www must return a permanent redirect");
assert.equal(wwwResponse.headers.get("location"), `${origin}/`, "www must redirect to the apex domain");

const unknownResponse = await middlewareResult("/definitely-not-a-real-page");
assert.equal(unknownResponse.status, 200, "middleware must pass unknown paths to Pages for 404 handling");

const home = await readFile(new URL("../index.html", import.meta.url), "utf8");
assert.match(home, /<meta name="robots" content="index,follow">/, "homepage must remain indexable");
assert.match(
  home,
  /<link rel="canonical" href="https:\/\/global-address\.com\/">/,
  "homepage canonical must remain the apex URL",
);

const sitemap = await readFile(new URL("../sitemap.xml", import.meta.url), "utf8");
assert.match(
  sitemap,
  /<loc>https:\/\/global-address\.com\/<\/loc>/,
  "sitemap must include the canonical homepage",
);

const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.equal(new Set(sitemapLocations).size, sitemapLocations.length, "sitemap URLs must be unique");

for (const location of sitemapLocations) {
  const url = new URL(location);
  assert.equal(url.origin, origin, `sitemap URL must use the canonical origin: ${location}`);
  assert.ok(!url.pathname.endsWith(".html"), `sitemap URL must be extensionless: ${location}`);
  assert.ok(!url.pathname.endsWith("/index"), `sitemap URL must not expose index paths: ${location}`);
}

const htmlFiles = trackedHtmlFiles();
const expectedLocations = new Set(htmlFiles.map((file) => `${origin}${canonicalPathForFile(file)}`));
assert.deepEqual(
  new Set(sitemapLocations),
  expectedLocations,
  "sitemap must contain every indexable HTML page exactly once",
);

for (const file of htmlFiles) {
  const html = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  const canonical = matchText(
    html,
    /<link\s+rel="canonical"\s+href="([^"]+)"/i,
    `${file} canonical`,
  );
  assert.equal(
    canonical,
    `${origin}${canonicalPathForFile(file)}`,
    `${file} canonical must match its extensionless URL`,
  );
  assert.doesNotMatch(html, /<meta\s+name="robots"\s+content="[^"]*noindex/i, `${file} must remain indexable`);

  for (const hrefMatch of html.matchAll(/href="([^"]+)"/g)) {
    const href = hrefMatch[1];
    if (href.startsWith("./") || href.startsWith("/")) {
      assert.ok(!/\.html(?:[?#]|$)/.test(href), `${file} contains a legacy internal .html link: ${href}`);
      assert.ok(!/(?:^|\/)index(?:[?#]|$)/.test(href), `${file} contains a legacy internal index link: ${href}`);
    }
  }
}

for (const [file, expected] of Object.entries(criticalPages)) {
  const html = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  assert.equal(matchText(html, /<title>([^<]+)<\/title>/i, `${file} title`), expected.title);
  assert.equal(
    matchText(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i, `${file} canonical`),
    expected.canonical,
  );
  assert.equal(matchText(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i, `${file} h1`), expected.h1);
}

const homeH1Position = home.indexOf('<h1 id="pageTitle">多国地址生成器</h1>');
const countrySectionPosition = home.indexOf('<section id="countries"');
const qaLabPosition = home.indexOf('<section class="reference-section qa-promo"');
assert.ok(homeH1Position >= 0, "homepage must keep the address generator H1");
assert.ok(countrySectionPosition > homeH1Position, "country generators must follow the homepage H1");
assert.ok(qaLabPosition > countrySectionPosition, "QA Lab must not appear before the country generators");

console.log(
  `SEO regression checks passed (${htmlFiles.length} indexable pages, ${sitemapLocations.length} sitemap URLs).`,
);
