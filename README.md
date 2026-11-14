# Personal Portfolio Website — Ishmael Harry-Deckor

A portfolio for a developer who builds websites for businesses, built with Next.js, Tailwind CSS v4, Framer Motion and Geist. Visual direction is documented in [`design-system/MASTER.md`](design-system/MASTER.md).

🌐 **Live Demo:** [https://portfoliosite-xi-one.vercel.app](https://portfoliosite-xi-one.vercel.app)

---

## 🚀 Content-Driven Architecture (How to Update Content)

This website has been built with a **strict content-driven architecture**. Future content updates require editing only data files — never touching layout or component code.

### Adding a New Project
1. **Prepare screenshots**: Save two screenshots of the project:
   - Desktop view (1440px wide): `public/projects/[slug]/desktop.png`
   - Mobile view (375px wide): `public/projects/[slug]/mobile.png`
2. **Add data entry**: Edit the [`src/data/projects.ts`](src/data/projects.ts) file and append a new `Project` object:
   ```typescript
   {
     slug: "your-project-slug",
     name: "Your Project Name",
     url: "https://your-project-live-url.com",
     category: "SaaS Dashboard", // Category filters will update automatically
     summary: "Short one-sentence summary.",
     problem: "What challenge was addressed...",
     approach: "How it was built...",
     outcome: "The final results...",
     techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
     isFeatured: true // Set to true to showcase on the home page
   }
   ```
3. **No other file changes are needed!** The homepage featured grid, full catalog grid, dynamic filters, and individual case study pages `/projects/[slug]` will render automatically.

### Managing Certifications
- Edit [`src/data/certifications.ts`](src/data/certifications.ts) to add or remove badges. The grids on the Home and About pages adjust dynamically.

### Managing Skills
- Edit [`src/data/skills.ts`](src/data/skills.ts) to update the visual stack tag strips.

---

## 🛠️ Tech Stack & Design System

- **Framework**: Next.js App Router (React 19, TypeScript)
- **Styling**: Tailwind CSS v4 (Imported via standard custom tokens)
- **Animations**: GSAP (ScrollTrigger & `useGSAP` hook) & Framer Motion (Page and state transitions)
- **3D Particles**: React Three Fiber (R3F) for interactive mesh background
- **Design Tokens**: Configured in [`design-system/MASTER.md`](design-system/MASTER.md)
  - Base Background: Deep Charcoal (`#050505`)
  - Accent Color: Warm Amber/Gold (`#D4A527`)
  - Typography: Outfit (Display Headlines) + Inter (Body Copy)

---

## 📦 Getting Started

### Installation
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

---

## 🔎 SEO and going live on a domain

Search engines are **blocked by default** (`noindex` on every page, `robots.txt` disallows everything, empty sitemap). Two environment variables in the host (Vercel → Settings → Environment Variables) control this; they are read at build time, so **redeploy after changing them**:

| Variable | What it does |
| :-- | :-- |
| `NEXT_PUBLIC_SITE_URL` | The public address, e.g. `https://yourdomain.com` (no trailing slash). Used for canonical links, the sitemap, share cards and structured data. |
| `NEXT_PUBLIC_ALLOW_INDEXING` | Set to `true` only when the real domain is live. Turns on `index, follow`, a real `robots.txt` and the sitemap. |

What is built in: a title, description and canonical link on every page, a sitemap and robots file (`src/app/sitemap.ts`, `src/app/robots.ts`), a share image for WhatsApp/LinkedIn/X (`src/app/opengraph-image.tsx`), and structured data on the home page (Person, ProfessionalService and the FAQ, built from the visible FAQ in `src/app/page.tsx`). `/testimonial` is never indexed.

After going live: submit `https://yourdomain.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.


---

## ✉️ Contact form email

The contact form (`/api/contact`) and the testimonial form (`/api/testimonial`) send mail through SMTP, using the variables in [`.env.example`](.env.example). Set them in Vercel (Settings → Environment Variables), then **redeploy**.

| Variable | Gmail value |
| :-- | :-- |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | your Gmail address |
| `SMTP_PASS` | a Google **App Password** (Google Account → Security → 2-Step Verification → App passwords). Not your normal password. |
| `SMTP_TO` | where messages should arrive (defaults to `SMTP_USER`) |

Messages arrive from your own address with the visitor in **Reply-To**, so pressing Reply answers them. Until these are set, the forms show "Sending is not set up yet. Please email me directly instead."

**When you move to a domain email** (for example Cloudflare Email Routing for receiving), keep sending through an SMTP service, since Email Routing cannot send. Only the five variables above change; no code change is needed.
