# Made Ready

Live site: **[www.madeready.co](https://www.madeready.co)**

Website for Made Ready: demo-first website redesigns and monthly care plans (Essential £45, Standard £75, Premium £120) for small UK trades. Plain HTML and CSS, no build step. JavaScript is kept small: a few inline scripts (the example modal, email address assembly and the contact form) and `nav.js` (the mobile menu).

## Files
- `index.html` – home page: how it works, care plan tiers, About, FAQ (including how to cancel), contact
- `websites-for-plumbers-leicester/`, `care-plan/`, `website-cost-for-trades/`, `faq/` – search-friendly pages (each is `index.html` in its folder, with FAQ/breadcrumb schema)
- `sitemap.xml`, `robots.txt` – add new public pages to the sitemap
- `terms.html` – care plan terms (DRAFT, noindex, needs checking before use)
- `privacy.html` – privacy notice (DRAFT STUB, must be completed)
- `nav.js` – mobile header menu (button, Escape, focus, closes on link tap); links show as a plain row if JS is off
- `styles.css` – all styles
- `site.webmanifest`, `images/` – favicons and icons
- `example/` – fictional "Pell & Wren" plumber concept (noindex)
  - `before.html` and `after.html` – the before/after pages, shown in a modal on the home page
  - `pell-wren-logo.svg`, `pell-wren-logo-horizontal.svg`, `pell-wren-icon.svg`, `pell-wren-favicon.svg` – the logo set, using the thicker tap logo
  - `logo-options.html` and `logo-mockup-4.html` – logo mockups
- `docs/` – working notes: `service-agreement-DRAFT.md`, plus the site copy and a backup of the previous site content (both dated 2026-11-19)

## Contact form
The form in `index.html` posts to [Web3Forms](https://web3forms.com) (no backend). It stays hidden until the placeholder `__WEB3FORMS_ACCESS_KEY__` is replaced with a real access key (get one free by entering the madeready email at web3forms.com; the key is public by design). Until then the page shows only the "Email me" button.

## Before going live
- Replace the `[PHOTO]` placeholder in the About section of `index.html`.
- Search all pages for `class="ph"` and resolve every bracketed `[...]` placeholder.
- Complete `privacy.html`.
- Have `terms.html` checked, including payment terms, theme ownership and licence, liability and the legal/trading name.

## Deploy
Merging to `main` auto-deploys to Vercel. Use PR preview links to review.

## Hidden from search (temporary)
Until launch, every page is hidden from search engines: a `<meta name="robots" content="noindex, nofollow">` tag (marked `TEMP-NOINDEX`) on each public page, plus an `X-Robots-Tag: noindex, nofollow` header in `vercel.json`. Do not add a `Disallow` line to `robots.txt`: crawlers must be able to fetch pages to see the noindex.

**To go live in search:** delete the `vercel.json` header block (or the file), remove the `TEMP-NOINDEX` meta line from `index.html`, `privacy.html` and the four search pages (`grep -rn TEMP-NOINDEX .`), then in Google Search Console request indexing for the home page and submit `sitemap.xml`. `terms.html` and `example/` are meant to stay noindex.
