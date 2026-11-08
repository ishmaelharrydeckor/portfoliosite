# Design System — Portfolio

Direction: dark, editorial hero over warm off-white and black sections, one yellow accent. Bold sans headlines (Manrope) with a single serif-italic accent word (Instrument Serif). Square-cornered buttons and tags. Section structure follows a consultancy-style landing page; deliberately **not** the circle/pill/dot-grid look of the Prolens template.

## Colour (tokens in `src/app/globals.css`)
| Token | Hex | Use |
| :-- | :-- | :-- |
| `paper` | `#f5f2ea` | Default page background |
| `mist` | `#e8e4da` | Alternate sections, cards on paper |
| `ink` | `#0e0e0d` | Hero, projects and contact sections; primary text |
| `ink-soft` | `#1a1a18` | Image placeholders, raised dark surfaces |
| `body` | `#4b4a45` | Body copy on light backgrounds |
| `accent` | `#f2d230` | Primary buttons, live-client tag, one headline word per section |

## Type
Manrope Variable (`@fontsource-variable/manrope`), weight 800 for headings with `-0.035em` tracking. `.serif-accent` applies Instrument Serif italic to one word per headline.

## Components (`src/components`)
- `Hero`: tilted, slowly drifting wall of project screenshots under a left-to-right dark overlay.
- `ui.tsx`: `Button` (flat, inline arrow), `Tag` (square, uppercase), `Eyebrow` (rule + small caps label).
- `ProjectGrid`: rectangular screenshot cards; the first is a wide feature card. `ProjectStrip` scrolls the rest.
- `Accordion` (services, FAQ), `ContactSection` + `ContactForm`, `Reveal` (fade-up, honours reduced motion).

## Rules
- No circular image crops, orbit rings, dot grids or floating pills.
- Accent yellow is for actions and one highlighted word, never large surfaces (except the "next project" band).
- Contact details live in `src/data/site.ts`; projects in `src/data/projects.ts`.
