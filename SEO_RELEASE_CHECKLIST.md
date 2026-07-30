# SEO Release Safety Checklist

Use this checklist before changes to indexable pages, navigation, redirects, or sitemap data.

## Release rules

1. Keep each commit to 12 or fewer HTML pages.
2. Do not combine homepage or generator-page changes with broad article updates.
3. Keep canonical URLs extensionless and on `https://global-address.com`.
4. Update a sitemap `lastmod` only when that exact page changed.
5. Keep the homepage order: address generator H1, country generators, supporting QA content.
6. Do not change the homepage title, H1, canonical, URL structure, and navigation in the same release.
7. Wait at least 7 days after a major search-facing change before another broad change.

## Required verification

Run both checks before deployment:

```sh
node scripts/seo-regression.mjs
node scripts/release-safety.mjs
```

After deployment, verify:

- `/`, generator pages, `/guides`, `/sitemap.xml`, and `/robots.txt` return HTTP 200.
- `www`, `.html`, and `/index` variants redirect once to the canonical URL.
- Search Console URL Inspection reports the intended canonical for the homepage.
- Compare 24-hour and 7-day impressions before making another search-facing change.

## Recovery rule

If daily impressions fall by more than 50% for two consecutive complete days:

1. Freeze content, title, URL, canonical, and navigation changes.
2. Compare the last production commit with the previous stable commit.
3. Fix only confirmed technical defects.
4. Do not publish batches of new pages while recovery is being measured.
