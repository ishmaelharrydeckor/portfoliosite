# Design System — Portfolio

Direction: light, editorial, confident. Large tight-tracked Geist headlines, rounded cards, alternating white / grey / near-black bands, and a faint dot grid. Palette and layout language are taken from the Prolens reference; section content structure from the Advisano reference.

## Colour (tokens in `src/app/globals.css`)
| Token | Hex | Use |
| :-- | :-- | :-- |
| `paper` | `#ffffff` | Default page and card background |
| `mist` | `#e8eaed` | Alternate section background, neutral pills |
| `ink` | `#101010` | Dark sections, primary text |
| `ink-soft` | `#191919` | Primary buttons |
| `body` | `#3b3b3b` | Body copy |
| `sky` `#96b7c8`, `lime` `#daea56`, `grape` `#885fa8` | | Tag pills and numbered dots only |

## Type
Geist (via the `geist` package), weight 500 for headings with tracking `-0.04em`; 400 for body. Hero name scales with `clamp(3.25rem, 8vw, 6.5rem)`.

## Components
- `Pill` / `ArrowButton` (`src/components/ui.tsx`): tags and the black pill button with a white circle arrow.
- `Accordion`: services (numbered coloured dots) and FAQ.
- `ProjectStack`: full-width cards that stack on scroll via CSS `position: sticky`.
- `ProjectStrip`: auto-scrolling strip of the remaining projects.
- `ContactSection` + `ContactForm`: dark contact block posting to `/api/contact`.
- `Reveal`: fade-up on scroll; disabled for `prefers-reduced-motion`.

## Rules
- Accent colours are for pills and dots, never for large surfaces.
- Alternate section backgrounds (white → grey → black) to create rhythm.
- Motion is subtle (16px fade-ups, slow floats) and always respects reduced motion.
- Contact details live in `src/data/site.ts`; projects in `src/data/projects.ts`.
