import type { Metadata } from "next";
import Image from "next/image";
import LocalTime from "./LocalTime";

// Throwaway preview of the proposed design tricks. Not linked anywhere and hidden from search engines.
export const metadata: Metadata = { title: "Preview", robots: { index: false, follow: false } };
const cards = [
  { slug: "checin", name: "ChecIN", url: "checin-6982.vercel.app", live: false, tags: ["TanStack Start", "Firebase"], note: "Attendance with a QR code that changes every 15 seconds." },
  { slug: "estateguard", name: "EstateGuard", url: "estateguard-azure.vercel.app", live: false, tags: ["React", "Vite"], note: "Rent paid by approving a prompt on your phone." },
  { slug: "daniel", name: "Daniel Avudzivi", url: "ishmaelharrydeckor.github.io/Daniel", live: true, tags: ["HTML", "JavaScript"], note: "Personal-brand site with an admin panel." },
  { slug: "sammy", name: "Samuel Mensah Advisory", url: "sammy-drab.vercel.app", live: true, tags: ["Next.js", "Tailwind CSS"], note: "Consulting platform with consultation booking." },
];

function BrowserCard({ c }: { c: (typeof cards)[number] }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-xl bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
        <div className="flex items-center gap-3 border-b border-black/10 bg-[#f4f2ec] px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="h-2.5 w-2.5 rounded-full bg-black/20" />
            <i className="h-2.5 w-2.5 rounded-full bg-black/20" />
            <i className="h-2.5 w-2.5 rounded-full bg-black/20" />
          </span>
          <span className="flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-black/55">{c.url}</span>
          {c.live ? (
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
              <i className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Live
            </span>
          ) : (
            <span className="text-xs font-bold text-black/45">Concept</span>
          )}
        </div>
        {/* Hover: the page scrolls inside the frame */}
        <div className="relative h-[340px] overflow-hidden bg-white">
          <Image
            src={`/preview/${c.slug}-full.jpg`}
            alt={`${c.name} full page`}
            width={1000}
            height={2916}
            className="block w-full transition-transform duration-[7000ms] ease-linear group-hover:[transform:translateY(calc(-100%+340px))]"
          />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight">{c.name}</h3>
          <p className="mt-1 text-base text-[#4b4a45]">{c.note}</p>
        </div>
        <p className="shrink-0 text-sm text-[#4b4a45]">{c.tags.join(" · ")}</p>
      </div>
    </article>
  );
}

export default function Preview() {
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#f5f2ea] text-[#0e0e0d]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0e0e0d] text-white">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-9">
          <span className="text-2xl font-extrabold tracking-tight">Ishmael<span className="text-[#f2d230]">.</span></span>
          <nav className="hidden gap-9 text-base font-semibold md:flex">
            <a>Work</a><a>Services</a><a>About</a><a>Contact</a>
          </nav>
          <a className="rounded-md bg-[#f2d230] px-5 py-2.5 text-sm font-bold text-[#0e0e0d]">Start a project</a>
        </div>
      </header>

      {/* Hero: split, photo right, live-site frame overlapping the photo */}
      <section className="bg-[#0e0e0d] text-white">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-20 lg:px-9 lg:py-28">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#f2d230]" />
              Kumasi, Ghana · <LocalTime />
            </p>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-7xl">
              Hi, I&apos;m Ishmael. I build websites that{" "}
              <span className="relative whitespace-nowrap">
                <span className="absolute -inset-x-2 inset-y-1 -z-0 -skew-x-6 bg-[#f2d230]" aria-hidden="true" />
                <span className="relative text-[#0e0e0d]">win customers</span>
              </span>
              .
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/70">
              I design and build fast, credible websites for businesses, from the first conversation to a live site.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="rounded-md bg-[#f2d230] px-6 py-4 text-base font-bold text-[#0e0e0d]">Message me on WhatsApp</a>
              <a className="rounded-md border border-white/40 px-6 py-4 text-base font-bold">View projects</a>
            </div>
            <p className="mt-12 flex gap-6 text-base font-semibold text-white/80">
              <span>GitHub</span><span className="text-white/30">|</span><span>LinkedIn</span><span className="text-white/30">|</span><span>Email</span>
            </p>
          </div>

          <div className="relative min-h-[560px] lg:min-h-[760px]">
            <Image src="/headshot.jpg" alt="Ishmael Harry-Deckor" fill priority sizes="50vw" className="object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0d]/50 via-transparent to-transparent" />
            {/* Work over photo */}
            <div className="absolute bottom-10 left-4 w-[340px] -rotate-3 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10 lg:-left-20 lg:w-[420px]">
              <div className="flex items-center gap-2 border-b border-black/10 bg-[#f4f2ec] px-3 py-2">
                <span className="flex gap-1" aria-hidden="true"><i className="h-2 w-2 rounded-full bg-black/20" /><i className="h-2 w-2 rounded-full bg-black/20" /><i className="h-2 w-2 rounded-full bg-black/20" /></span>
                <span className="flex-1 truncate rounded bg-white px-2 py-0.5 text-[11px] text-black/55">checin-6982.vercel.app</span>
              </div>
              <Image src="/projects/checin/desktop.png" alt="ChecIN website" width={1440} height={900} className="block w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-[#e8e4da]">
        <div className="mx-auto grid max-w-[1440px] gap-y-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-9">
          {[
            ["Projects built", "17"],
            ["Live client sites", "5"],
            ["Based in", "Kumasi, GH"],
            ["Availability", "Open"],
          ].map(([k, v], i) => (
            <div key={k} className={`lg:pl-8 ${i ? "lg:border-l lg:border-black/15" : ""}`}>
              <p className="text-base text-[#4b4a45]">{k}</p>
              <p className="mt-2 text-5xl font-extrabold tracking-[-0.03em]">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Showcase */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-5xl font-extrabold tracking-[-0.035em] sm:text-6xl">My showcase</h2>
          <p className="max-w-sm text-base text-[#4b4a45]">Hover a project to scroll through the real site.</p>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-16 md:grid-cols-2">
          {cards.map((c, i) => (
            <div key={c.slug} className={i % 2 ? "md:mt-20" : ""}>
              <BrowserCard c={c} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#0e0e0d] px-6 py-28 text-center text-white">
        <h2 className="mx-auto max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-7xl">Got a project? Let&apos;s talk.</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a className="rounded-md bg-[#f2d230] px-6 py-4 text-base font-bold text-[#0e0e0d]">Message me on WhatsApp</a>
          <a className="rounded-md border border-white/40 px-6 py-4 text-base font-bold">ishmaelharrydeckor@gmail.com</a>
        </div>
      </section>
    </div>
  );
}
