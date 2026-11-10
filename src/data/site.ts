// Single source of truth for contact details and site-wide copy.
export const site = {
  name: "Ishmael Harry-Deckor",
  email: "ishmaelharrydeckor@gmail.com",
  linkedin: "https://www.linkedin.com/in/ishmaelharrydeckor/",
  github: "https://github.com/ishmaelharrydeckor",
  twitter: "https://x.com/DeckorHarry",
  // Set NEXT_PUBLIC_WHATSAPP (digits with country code, e.g. 233XXXXXXXXX) in the host's
  // environment settings. It is deliberately not committed to this public repo.
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP ?? "").replace(/\D/g, ""),
};

// The public address of the site. Change it in one place once the domain is connected:
// set NEXT_PUBLIC_SITE_URL in the host's environment settings (no trailing slash).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfoliosite-xi-one.vercel.app").replace(/\/$/, "");

// Search engines are blocked until this is "true". Turn it on only when the real domain is live.
export const indexable = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const tagline = "I build websites for businesses that match your brand, show up when people search for your business, and bring in customers.";

export const whatsappLink = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi Ishmael, I'd like a website for my business.")}`
  : null;

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Three.js",
  "Node.js",
  "Vercel",
  "Figma",
];
