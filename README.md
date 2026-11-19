# Made Ready

Live site: **https://www.madeready.co**

Website for Made Ready: demo-first website redesigns and monthly care plans (Essential £45, Standard £75, Premium £120) for small UK trades. Plain HTML and CSS, no build step. The only JavaScript is a few small inline scripts (the example modal and email address assembly).

## Files
- `index.html` – home page: how it works, care plan tiers, About, FAQ (including how to cancel), contact
- `terms.html` – care plan terms (DRAFT, noindex, needs checking before use)
- `privacy.html` – privacy notice (DRAFT STUB, must be completed)
- `styles.css` – all styles
- `site.webmanifest`, `images/` – favicons and icons
- `example/` – fictional "Pell & Wren" plumber concept (noindex)
  - `before.html` and `after.html` – the before/after pages, shown in a modal on the home page
  - `pell-wren-logo.svg`, `pell-wren-logo-horizontal.svg`, `pell-wren-icon.svg`, `pell-wren-favicon.svg` – the logo set, using the thicker tap logo
  - `logo-options.html` and `logo-mockup-4.html` – logo mockups
- `docs/` – working notes: `service-agreement-DRAFT.md`, plus the site copy and a backup of the previous site content (both dated 2026-11-19)

## Before going live
- Replace the `[PHOTO]` placeholder in the About section of `index.html`.
- Search all pages for `class="ph"` and resolve every bracketed `[...]` placeholder.
- Complete `privacy.html`.
- Have `terms.html` checked, including payment terms, theme ownership and licence, liability and the legal/trading name.

## Deploy
Merging to `main` auto-deploys to Vercel. Use PR preview links to review.
