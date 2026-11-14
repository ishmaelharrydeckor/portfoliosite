import Link from "next/link";
import { site, whatsappLink } from "@/data/site";

export default function Footer() {
  const links = [
    ["Work", "/projects"],
    ["Services", "/#services"],
    ["About", "/about"],
    ["Contact", "/#contact"],
  ] as const;
  return (
    <footer className="bg-ink text-paper/70">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-9">
        <div className="flex flex-col gap-8 border-t border-white/15 py-10 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="inline-flex min-h-11 items-center font-display text-2xl font-extrabold tracking-tight text-paper">
            Ishmael<span className="text-accent">.</span>
          </Link>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-base" aria-label="Footer">
            {links.map(([n, h]) => (
              <Link key={n} href={h} className="inline-flex min-h-11 items-center hover:text-accent">{n}</Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-base">
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-accent">LinkedIn</a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-accent">GitHub</a>
            <a href={site.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-accent">X</a>
            {whatsappLink && <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 min-w-11 items-center justify-center hover:text-accent">WhatsApp</a>}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pb-8 text-sm text-paper/50">
          <p>© {new Date().getFullYear()} Ishmael Harry-Deckor. All rights reserved.</p>
          <p className="flex gap-6">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-accent">Privacy Policy</Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-accent">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
