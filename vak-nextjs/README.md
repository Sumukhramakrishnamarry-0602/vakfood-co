# VAK Food & Beverage Company — Corporate Website

Premium editorial redesign built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production (static export)

```bash
npm run build
```

Output is written to `/out` (static export is enabled in `next.config.mjs`), ready to deploy to
any static host (Vercel, Netlify, S3/CloudFront, etc). Remove `output: 'export'` from
`next.config.mjs` if you'd rather deploy as a standard Next.js server app (needed only if you
later add server-side features).

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
