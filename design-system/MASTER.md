# Design System — Portfolio

Structure follows a developer-portfolio layout (split hero, stats band, services, showcase, experience table, contact). The identity is deliberately our own, built from these signature details:

1. **Hover-scroll project cards.** `BrowserCard` shows each project in a browser frame with its real URL; on hover the full-page screenshot (`public/projects/<slug>/full.jpg`) scrolls inside the frame.
2. **Live / Concept markers.** Real client sites get a pulsing green "Live" dot; concept builds are labelled plainly.
3. **Local identity.** Kumasi, Ghana with a live GMT clock (`LocalTime`).
4. **Services tied to real work.** `ServicesShowcase` previews an actual project for each service.
5. **Highlighter emphasis.** One phrase per headline gets a yellow marker (`Mark`).

## Colour (tokens in `src/app/globals.css`)
`paper #f5f2ea` · `mist #e8e4da` · `ink #0e0e0d` · `ink-soft #1a1a18` · `body #4b4a45` · `accent #f2d230` (buttons, marker, live-site highlights only).

## Type
Bricolage Grotesque (headings, via `h1,h2,h3`) and Manrope (body), both from `@fontsource-variable`.

## Content & config
- Projects: `src/data/projects.ts`. `showcase: true` projects are displayed (order = display order); all projects count in the totals.
- Roles: `src/data/experience.ts`. Contact details: `src/data/site.ts`.
- WhatsApp button appears only when `NEXT_PUBLIC_WHATSAPP` (digits with country code) is set in the host's environment. The number is intentionally not committed to this public repo.
- Adding a project: add screenshots `desktop.png`, `mobile.png` and `full.jpg` (1000px wide, tall page capture) under `public/projects/<slug>/`.

## Rules
- Respect `prefers-reduced-motion` (cards, parallax and fades all fall back to static).
- No invented stats, clients or testimonials; placeholders are labelled as such.
