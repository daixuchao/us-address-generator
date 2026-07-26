# Global Address Generator

[Global Address Generator](https://global-address.com/) is a free browser-based
tool for generating synthetic address test data. It supports country-specific
address formats, local sample names and phone numbers, copying, and CSV export.

The generated records are intended for form testing, product prototypes,
software demos, localization checks, and QA workflows. They are not guaranteed
to be real or deliverable addresses.

## Supported generators

- United States addresses with state filtering and ZIP Code formats
- Japanese addresses with prefectures, municipalities, chome, building names,
  and room numbers
- United Kingdom addresses with post towns and postcodes
- South Korean road-name addresses
- Major European Union country formats
- Major Southeast Asian country formats

## QA and documentation

- [Address generator](https://global-address.com/)
- [Address QA Lab](https://global-address.com/address-qa-lab)
- [Address knowledge center](https://global-address.com/guides)
- [English guides](https://global-address.com/en/guides)
- [Data and testing methodology](https://global-address.com/data-methodology)

The QA Lab can generate reproducible test cases with inputs, execution steps,
expected results, and failure risks. The knowledge center documents address
fields, postal formats, international form design, and safe use of synthetic
test data.

## Local development

This is a static site with Cloudflare Pages middleware. The main interface can
be opened from `index.html`. Before publishing changes, run:

```bash
node scripts/seo-regression.mjs
```

The regression check protects canonical homepage redirects, indexability, and
the canonical homepage entry in the sitemap.

## Responsible use

Do not use generated records for real deliveries, identity verification,
financial applications, misleading registrations, or attempts to bypass
platform rules. Use official provider sandbox data for payment, tax, fraud, and
shipping validation.
