import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { Eyebrow, Button, Mark } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import BrowserCard from "@/components/BrowserCard";
import LocalTime from "@/components/LocalTime";
import ServicesShowcase from "@/components/ServicesShowcase";
import ContactSection from "@/components/ContactSection";
import { showcaseProjects, totalCount, liveClientCount } from "@/data/projects";
import { experience } from "@/data/experience";
import { whatsappLink } from "@/data/site";

const services = [
  {
    title: "Business websites",
    body: "A website that looks like your brand and sounds like your business. Built to load fast, rank on Google, show up in AI answers and turn visitors into enquiries.",
    slug: "samuel-adanuvo",
    projectName: "Samuel Adanuvo",
    host: "sammyadanuvo.com",
  },
  {
    title: "Landing pages & waitlists",
    body: "One page, one goal: sign-ups, bookings or leads. Sharp messaging and a design that earns trust in the first few seconds.",
    slug: "estateguard",
    projectName: "EstateGuard",
    host: "estateguard-azure.vercel.app",
  },
  {
    title: "Web apps & portals",
    body: "Dashboards, booking flows and portals for businesses that need their website to do real work, not just sit there.",
    slug: "checin",
    projectName: "ChecIN",
    host: "checin-6982.vercel.app",
  },
  {
    title: "Redesigns & rebuilds",
    body: "A site that no longer matches your brand, or is not bringing in enquiries? I rebuild it to look right, load fast and be found.",
    slug: "paa-kwesi-folson",
    projectName: "Paa Kwesi Folson",
    host: "pkf-pink.vercel.app",
  },
];

const faqs = [
  {
    title: "How does it work?",
    body: "We start with a call so I understand your business. You send me your images and any details you have. I take it from there, and you see the site come together before it goes live.",
  },
  {
    title: "How long does it take?",
    body: "I work fast, and I give you a clear timeline on our call, once I know the pages and content involved.",
  },
  {
    title: "What do I need to provide?",
    body: "Your images, your logo if you have one, and a conversation about your business. Everything else is on me.",
  },
  {
    title: "Will my site show up on Google and in AI answers?",
    body: "I build every site to compete: clear structure, proper page titles, structured data and fast loading, so search engines and AI tools can understand your business. No one can honestly promise a ranking position, but I set your site up properly from day one.",
  },
  {
    title: "Do you do the design as well as the build?",
    body: "Yes. I design and build together, so what you get is a finished website that matches your brand and works.",
  },
  {
    title: "What do you build with?",
    body: "Next.js, React, TypeScript and Tailwind CSS, with motion where it helps. Sites are hosted on Vercel.",
  },
  {
    title: "Can you make changes after launch?",
    body: "Yes. Message me any time for text changes, new pages or new features.",
  },
  {
    title: "How much does it cost?",
    body: "It depends on what you need. Tell me, and I'll send you a quote.",
  },
];

export default function Home() {
  const featured = showcaseProjects.slice(0, 4);
  const h2 = "text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl";

  const stats = [
    ["Projects built", String(totalCount)],
    ["Live client sites", String(liveClientCount)],
    ["Based in", "Kumasi, GH"],
    ["Availability", "Open"],
  ];

  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden bg-ink text-paper">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 lg:px-9 lg:py-28">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-paper/70">
              <span className="h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
              Kumasi, Ghana · <LocalTime />
            </p>
            <h1 className="mt-6 text-[clamp(2.5rem,4.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">
              Hi, I&apos;m Ishmael.
              <br />
              I build websites
              <br />
              that <Mark>win customers</Mark>.
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-paper/70">
              Your website should match your brand, get found on Google and in AI
              answers, and bring in enquiries. I design and build it, fast, from
              the first call to launch.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {whatsappLink ? (
                <Button href={whatsappLink} external>Message me on WhatsApp</Button>
              ) : (
                <Button href="/#contact">Start a project</Button>
              )}
              <Button href="/projects" variant="ghost">View projects</Button>
            </div>
          </div>

          <div className="relative min-h-[520px] lg:min-h-[740px]">
            <Image
              src="/headshot.jpg"
              alt="Portrait of Ishmael Harry-Deckor"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-[1440px] gap-y-8 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-9">
          {stats.map(([k, v], i) => (
            <Reveal key={k} delay={i * 0.06} className={`lg:pl-8 ${i ? "lg:border-l lg:border-ink/15" : ""}`}>
              <p className="text-base text-body">{k}</p>
              <p className="mt-2 font-display text-5xl font-extrabold tracking-[-0.03em]">{v}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-32">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className={h2}>Everything your <Mark>business</Mark> needs online</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-16">
            <ServicesShowcase items={services} />
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-28">
          <Reveal className="max-w-3xl">
            <Eyebrow className="text-accent">How it works</Eyebrow>
            <h2 className={`mt-5 ${h2}`}>
              One call. Your images. <Mark>Your site.</Mark>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              ["01", "We talk", "A call to understand your business, your customers and what your site needs to do."],
              ["02", "You send your images", "Your photos, logo and details. Nothing more is needed from you."],
              ["03", "I build and launch", "I design and build it, you see it take shape, and it goes live ready to be found."],
            ].map(([n, t, b], i) => (
              <Reveal key={n} delay={i * 0.08}>
                <div className="border-t-2 border-accent pt-6">
                  <p className="font-display text-5xl font-extrabold tracking-[-0.03em] text-accent">{n}</p>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-tight">{t}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-paper/70">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="work" className="scroll-mt-20 bg-mist">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className={`mt-5 ${h2}`}>Proof, not <Mark>promises</Mark></h2>
              <p className="mt-4 max-w-md text-lg text-body">Real sites for real businesses. Hover a project to scroll through it.</p>
            </div>
            <Button href="/projects" variant="dark">View all projects</Button>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {featured.map((p, i) => (
              <Reveal key={p.slug} className={i % 2 ? "md:mt-20" : ""}>
                <BrowserCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BACKGROUND */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-28">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow className="text-accent">Background</Eyebrow>
              <h2 className={`mt-5 ${h2}`}>Building, leading, <Mark>delivering</Mark></h2>
            </div>
            <Link href="/about" className="text-base font-bold underline decoration-accent decoration-2 underline-offset-8 hover:text-accent">
              Full background
            </Link>
          </Reveal>
          <div className="mt-12 border-t border-paper/20">
            {experience.slice(0, 4).map((r) => (
              <div key={r.org} className="grid gap-2 border-b border-paper/20 py-6 md:grid-cols-[1.1fr_1.2fr_0.8fr] md:gap-8">
                <div>
                  <p className="text-xl font-bold tracking-tight">{r.org}</p>
                  <p className="mt-1 text-base text-paper/70">{r.role}</p>
                </div>
                <p className="text-base leading-relaxed text-paper/65">{r.note}</p>
                <p className="text-base text-paper/70 md:text-right">{r.dates}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL (placeholder until there is a real quote) */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-32">
          <Reveal className="text-center">
            <h2 className={h2}>What clients <Mark>say</Mark></h2>
          </Reveal>
          <div className="mt-14 grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal>
              <div className="mx-auto flex aspect-square w-full max-w-sm -rotate-3 items-center justify-center rounded-md border-2 border-dashed border-ink/25 bg-mist">
                <span className="font-display text-7xl font-extrabold text-ink/20" aria-hidden="true">?</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Quote className="h-9 w-9 fill-ink/20 text-ink/20" aria-hidden="true" />
              <blockquote className="mt-4 font-display text-3xl font-bold leading-snug tracking-[-0.02em] sm:text-4xl">
                Your first client testimonial goes here. A couple of sentences on the project and the result.
              </blockquote>
              <p className="mt-6 text-base font-bold">Client name, Company</p>
              <p className="mt-1 text-sm text-body">Placeholder: replace with a real quote and photo.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 lg:grid-cols-2 lg:px-9 lg:py-32">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className={`mt-5 ${h2}`}>Common <Mark>questions</Mark></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
