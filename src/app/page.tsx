import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { Eyebrow, Button, Mark } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import BrowserCard from "@/components/BrowserCard";
import HeroFrame from "@/components/HeroFrame";
import LocalTime from "@/components/LocalTime";
import ServicesShowcase from "@/components/ServicesShowcase";
import ContactSection from "@/components/ContactSection";
import { showcaseProjects, totalCount, liveClientCount } from "@/data/projects";
import { experience } from "@/data/experience";
import { whatsappLink } from "@/data/site";

const services = [
  {
    title: "Business websites",
    body: "Multi-page sites for businesses and personal brands. Clear messaging, fast loading, and a layout that turns visitors into enquiries.",
    slug: "sammy",
    projectName: "Samuel Mensah Advisory",
    host: "sammy-drab.vercel.app",
  },
  {
    title: "Landing pages & waitlists",
    body: "Focused pages built to do one job: collect sign-ups, bookings or leads, and look credible while doing it.",
    slug: "estateguard",
    projectName: "EstateGuard",
    host: "estateguard-azure.vercel.app",
  },
  {
    title: "Web apps & portals",
    body: "Dashboards, booking flows and portals, for when your business needs more than a brochure site.",
    slug: "checin",
    projectName: "ChecIN",
    host: "checin-6982.vercel.app",
  },
  {
    title: "Redesigns & rebuilds",
    body: "Already have a site that feels dated or slow? I rebuild it with a sharper look, better structure and modern performance.",
    slug: "paa-kwesi-folson",
    projectName: "Paa Kwesi Folson",
    host: "pkf-pink.vercel.app",
  },
];

const faqs = [
  {
    title: "How long does a website take?",
    body: "It depends on the number of pages and how ready your content is. I'll give you a clear timeline before we start.",
  },
  {
    title: "Do you only do design, or only development?",
    body: "Neither on its own. I design and build together, so what you get is a finished, working website.",
  },
  {
    title: "What do you build with?",
    body: "Next.js, React, TypeScript and Tailwind CSS, with motion and 3D where it helps. Sites are hosted on Vercel.",
  },
  {
    title: "Can you update the site after it launches?",
    body: "Yes. Send a message any time for text changes, new pages or new features.",
  },
  {
    title: "How much does it cost?",
    body: "Pricing depends on scope. Tell me what you need through the contact form and I'll send a quote.",
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
              Fast, credible websites for businesses, designed and built by one
              person, from the first conversation to a live site.
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
            <HeroFrame slug="sammy" url="sammy-drab.vercel.app" />
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
            <h2 className={h2}>What I can build for your <Mark>business</Mark></h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-16">
            <ServicesShowcase items={services} />
          </Reveal>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="work" className="scroll-mt-20 bg-mist">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className={`mt-5 ${h2}`}>My showcase</h2>
              <p className="mt-4 max-w-md text-lg text-body">Hover a project to scroll through the real site.</p>
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
