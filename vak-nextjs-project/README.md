# VAK Food & Beverage Company — Corporate Website

Premium editorial redesign built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploying to Vercel

Push this project to a Git repo and import it in Vercel, or run `vercel` from this directory with
the Vercel CLI. No special configuration is needed — Vercel auto-detects Next.js.

**Important if you're uploading this exact folder to a new repo:** everything in this zip should
be at the **root** of the repo (i.e. `package.json` at the top level). If you instead commit a
`vak-nextjs/` folder containing all this, go to your Vercel project's **Settings → General → Root
Directory** and set it to `vak-nextjs` — otherwise Vercel won't find `package.json` and you'll get
a 404 after "deploying."

## Build locally

```bash
npm run build
npm start
```

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — page sections (Hero, About, Divisions, Operations, Roadmap, Contact, Footer, etc.)
- `components/ui/` — reusable primitives (Container, Button, Eyebrow)
- `components/BrandFeature.tsx` — the repeating, alternating brand-showcase block used in Divisions
- `components/Reveal.tsx` — client-side scroll-reveal animation driver

## Design system

Colors, type scale, and shadows are defined as Tailwind theme tokens in `tailwind.config.ts`
(pine green, brass/gold, oxblood, rust, warm paper/ink). Display type is Bodoni Moda (serif,
loaded via `next/font/google`); body type is Inter. Update tokens there to restyle the whole site
consistently.

## Content

All copy is sourced from the VAK Food & Beverage corporate portfolio. Placeholder KPI values
(revenue growth, monthly orders, customer satisfaction) are intentionally left as "—" pending
real data — update them in `components/Operations.tsx` once available.

## Notes

- The contact form in `components/Contact.tsx` is front-end only (shows a confirmation message
  on submit). Wire it to a real endpoint or form service before going live.
- Swap the veg-mark logo glyph for a real logo file whenever brand assets are ready.
