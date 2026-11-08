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
