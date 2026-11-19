# madeready.co full content backup (current main)

Source: `index.html` at a2a8c26 (About section removed, hero heading updated). Site copy is quoted verbatim, including its own punctuation. The earlier pre-edit snapshot is kept at `docs/site-copy-2026-11-19.md`. This is a readable backup, not a build source: `index.html` remains the source of truth.

The site is a single page (`index.html`, all CSS and JS inline), deployed by Vercel from `main`.

## Page meta

- Language: `en`. Default theme: `data-theme="dark"` (light/dark toggle in nav).
- Title: Made Ready Co — Digital products worth paying for
- Meta description: Made Ready Co is a small digital product studio making tools for people who care about craft. UK budget tracking, premium React components, and more.
- og:title: Made Ready Co
- og:description: Digital products worth paying for.
- og:type: website
- og:url: https://madeready.co
- No og:image is set.
- Favicons: `/images/favicon.ico`, `/images/android-chrome-192x192.png`, `/images/android-chrome-512x512.png`; apple-touch-icon points to `/images/android-chrome-512x512.png`.
- Manifest: `/site.webmanifest` (name "Made Ready Co — Digital Products", short name "Made Ready Co", theme and background colour #FFF4E0, display standalone).
- Font: Plus Jakarta Sans 400/500/700/800, loaded from Google Fonts (external).

## Nav

- Logo link to `/`, aria-label "Made Ready logo". Text "Made Ready" plus inline SVG M symbol (orange #FF6000).
- Links: Products (`#products`), Services (`#services`).
- Theme toggle button, aria-label "Toggle colour theme", title "Toggle light / dark" (sun and moon icons).
- CTA button: "Get in touch" -> `mailto:madeready.co@gmail.com`

## Hero

- Eyebrow: Digital product studio · Leicester, UK
- H1: Look as good online / as your work does. (second line is the accent-coloured span)
- Sub: Made Ready Co builds tools that solve real problems — for UK households managing their money, and for developers who care about craft. Small team, high standards, no filler.
- Button: "See what we make" -> `#products`
- Scroll hint (aria-hidden): Scroll to explore

## Products (`#products`)

- Eyebrow: What we make
- H2: Three products. / Different problems, same standards.

### 1. Made Ready Budget Tracker

- Tag: Personal finance. Status: Live
- Body: A Google Sheets budget tracker built specifically for UK bank accounts. Import CSV statements from Monzo, Chase, Starling, Barclays, and Revolut. Auto-categorise spending, track net worth, and see a live safe-to-spend figure — all inside your own Google account. No subscription. One-time purchase.
- Link: "View website" -> https://budget-tracker-iota-mocha.vercel.app (new tab)

### 2. Made Ready 12-Week Planner

- Tag: Personal productivity. Status: Live
- Body: A Google Sheets system that automates the 12 Week Year methodology — treating twelve weeks with the urgency of a full year. Set up to three goals, plan weekly tactics, and let the sheet auto-calculate your execution score and habit tracking. Pro adds an AI coach that reviews your scorecard and flags goals going off track before the cycle ends. No subscription. One-time purchase, reusable every cycle.
- Link: "View website" -> https://12-week-planner-ochre.vercel.app (new tab)

### 3. Made Ready UI

- Tag: Developer tools. Status: Building now
- Body: A premium React component library for developers who care about the fine details. Copy-paste components built on Tailwind v4 and Motion, with editorial aesthetics drawn from print design and a physics engine tuned to feel physical, not digital. Free components first. A paid application kit coming soon.
- Link: "Join early access" -> `mailto:madeready.co@gmail.com?subject=Made Ready UI early access`

## Services (`#services`)

- Eyebrow: What we do
- H2: Beyond the products
- Intro: Alongside our own products, we take on a small number of well-scoped projects with founders and teams who need thoughtful frontend work with a strong design sensibility.
- React design systems: Component libraries, token systems, and UI kits for product teams who want to move faster without losing quality.
- Fractional frontend: Frontend development capacity for early-stage teams. Hands-on build, a few days a week, with a design eye on every decision.
- Digital product builds: End-to-end product development for well-specified ideas. Next.js, TypeScript, Tailwind, Prisma, Vercel — built to last.

## Footer

- Registration-mark SVG (aria-label "Made Ready Co mark — registration") and text "Made Ready"
- Email: madeready.co@gmail.com (mailto)
- GitHub: github.com/madereadyco -> https://github.com/madereadyco (new tab)
- Copyright: © 2026 Made Ready Co · Leicester, UK

## Removed

- About section and its nav link (removed in PR #4). Its text is in `docs/site-copy-2026-11-19.md`.

## Images and assets

All in `images/` and committed: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `M-symbol-icon.svg.xml`, `registration-mark.svg.xml`. The page has no `<img>` tags (so no alt text); logos and icons are inline SVG. The 16px, 32px and apple-touch-icon files are present but not referenced by `index.html`.

## Not in the repo

- Plus Jakarta Sans is fetched from Google Fonts at load time; no font files are stored here.
- The three product sites (budget-tracker-iota-mocha.vercel.app, 12-week-planner-ochre.vercel.app) live in other projects and are not backed up here.
- Domain, DNS and Vercel settings are outside the repo.
