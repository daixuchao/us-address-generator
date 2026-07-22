import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { onRequest } from "../functions/_middleware.js";

const origin = "https://global-address.com";

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

console.log(`SEO regression checks passed (${redirectCases.length + 4} assertions groups).`);
