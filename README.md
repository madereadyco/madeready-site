# Made Ready Co

The studio website for [Made Ready Co](https://madeready.co) — a small digital product studio making tools for people who care about craft.

Built with vanilla HTML, CSS, and JavaScript. No framework, no build step, no dependencies.

---

## What's on the site

- **Studio overview** — what Made Ready Co is and who it's for
- **Products** — Made Ready Budget Tracker (live) and Made Ready UI (coming soon)
- **Services** — frontend work available for the right projects
- **About** — background on the studio
- **Contact** — in the footer

---

## Stack

| | |
|---|---|
| Markup | Semantic HTML5 |
| Styles | Vanilla CSS with custom properties |
| Scripting | Vanilla JS — IntersectionObserver scroll reveal |
| Font | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts |
| Hosting | [Vercel](https://vercel.com) |
| Domain | [madeready.co](https://madeready.co) via Namecheap → Vercel DNS |

---

## Development

No build step required. Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .
```

---

## Deployment

Pushed to `main` → auto-deployed to Vercel. The domain `madeready.co` points to Vercel nameservers directly, so SSL and propagation are handled automatically.

---

## Project structure

```
madeready-co/
└── index.html    # The whole site — single file
```

---

## Related repos

| Repo | Description |
|---|---|
| [`madeready-ui`](https://github.com/madereadyco/madeready-ui) | Made Ready UI — premium React component library |

---

© 2026 Made Ready Co · Leicester, UK
