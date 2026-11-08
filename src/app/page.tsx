import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { Eyebrow, Button } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectStrip from "@/components/ProjectStrip";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";
import { stack } from "@/data/site";

const services = [
  {
    title: "Business websites",
    body: "Multi-page sites for businesses and personal brands. Clear messaging, fast loading, and a layout that turns visitors into enquiries.",
  },
  {
    title: "Landing pages & waitlists",
    body: "Focused single-page launches built to do one job: collect sign-ups, bookings or leads, and look credible while doing it.",
  },
  {
    title: "Web apps & portals",
    body: "Dashboards, learning platforms, booking flows and student or guest portals, when your business needs more than a brochure site.",
  },
  {
    title: "Redesigns & rebuilds",
    body: "Already have a site that feels dated or slow? I rebuild it with a sharper look, better structure and modern performance.",
  },
];

const process = [
  {
    n: "01",
    title: "Discover",
    body: "We talk through your business, your customers and what the site needs to achieve, then agree scope and timeline.",
  },
  {
    n: "02",
    title: "Design & build",
    body: "I design and build together in Next.js, sharing a live preview as it takes shape so you see progress, not mock-ups.",
  },
  {
    n: "03",
    title: "Launch & support",
    body: "The site is tested on phone and desktop, deployed, and handed over. I stay available for changes afterwards.",
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

// Placeholders until real client feedback is available.
const testimonials = [
  { quote: "Your first client testimonial will go here.", name: "Client name", role: "Company" },
  { quote: "A short quote about the project and the result.", name: "Client name", role: "Company" },
  { quote: "Another happy client, swapped in when you have one.", name: "Client name", role: "Company" },
];

export default function Home() {
  const featured = projects.filter((p) => p.isFeatured);
  const others = projects.filter((p) => !p.isFeatured);
  const liveCount = projects.filter((p) => p.projectType === "live-client").length;
  const h2 = "mt-5 text-4xl font-extrabold leading-[1.05] tracking-[-0.035em] sm:text-6xl";

  return (
    <>
      <Hero projects={featured.length >= 9 ? featured : projects} liveCount={liveCount} />

      {/* STACK MARQUEE */}
      <section aria-label="Technologies I build with" className="border-b border-ink/15 py-8">
        <div className="marquee overflow-hidden">
          <div className="marquee-track" style={{ animationDuration: "30s" }}>
            {[0, 1].map((copy) =>
              stack.map((s) => (
                <span
                  key={`${copy}-${s}`}
                  aria-hidden={copy === 1 || undefined}
                  className="mr-14 text-xl font-bold uppercase tracking-[0.12em] text-ink/45 sm:mr-20"
                >
                  {s}
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] items-center gap-16 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-9 lg:py-32">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-md bg-ink-soft">
              <Image
                src="/headshot.jpg"
                alt="Portrait of Ishmael Harry-Deckor"
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>About</Eyebrow>
            <h2 className={h2}>
              Hello, I&apos;m <span className="serif-accent">Ishmael</span>
            </h2>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-body">
              I&apos;m a developer who builds modern websites for businesses and
              personal brands. Every project is built to look credible, load
              fast and make it easy for customers to get in touch.
            </p>
            <div className="mt-10 flex gap-4 border-l-4 border-accent pl-5">
              <p className="max-w-lg text-2xl font-bold leading-snug tracking-tight">
                Build technology that solves real problems, and empower others to do the same.
              </p>
            </div>
            <div className="mt-10">
              <Button href="/about" variant="dark">More about me</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 bg-mist">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 lg:grid-cols-2 lg:px-9 lg:py-32">
          <Reveal>
            <Eyebrow>Services</Eyebrow>
            <h2 className={h2}>
              Websites for <span className="serif-accent">your business</span>
            </h2>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-body">
              One person, start to finish: from the first conversation to a live
              site you can send customers to.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion items={services} numbered />
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="scroll-mt-20 bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 pt-24 lg:px-9 lg:pt-32">
          <Reveal className="max-w-3xl">
            <Eyebrow className="text-accent">Selected work</Eyebrow>
            <h2 className={h2}>
              Real sites, <span className="serif-accent text-accent">built to perform</span>
            </h2>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-paper/65">
              Live client work and self-directed concept builds.
            </p>
          </Reveal>
          <div className="mt-16">
            <ProjectGrid projects={featured} />
          </div>
        </div>

        <div className="pb-24 pt-24">
          <h3 className="mx-auto mb-10 max-w-[1440px] px-6 text-2xl font-extrabold tracking-tight lg:px-9">
            More projects
          </h3>
          <ProjectStrip projects={others} />
          <div className="mx-auto mt-14 max-w-[1440px] px-6 lg:px-9">
            <Button href="/projects">View all projects</Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-32">
          <Reveal className="max-w-3xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className={h2}>
              A clear process, <span className="serif-accent">first chat to launch</span>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {process.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="border-t-2 border-ink pt-6">
                  <p className="text-6xl font-extrabold tracking-[-0.04em] text-accent [-webkit-text-stroke:1.5px_var(--color-ink)]">
                    {s.n}
                  </p>
                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-body">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (placeholders) */}
      <section className="bg-mist">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-32">
          <Reveal className="max-w-3xl">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className={h2}>
              What <span className="serif-accent">clients</span> say
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="flex h-full flex-col justify-between rounded-md border border-dashed border-ink/30 p-8">
                  <div>
                    <Quote className="h-8 w-8 fill-ink/20 text-ink/20" aria-hidden="true" />
                    <blockquote className="mt-4 text-2xl font-bold leading-snug tracking-tight">
                      {t.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-10 flex items-center gap-3">
                    <span className="h-11 w-11 rounded-sm bg-ink/10" aria-hidden="true" />
                    <span>
                      <span className="block text-base font-bold">{t.name}</span>
                      <span className="block text-sm text-body">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 lg:grid-cols-2 lg:px-9 lg:py-32">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className={h2}>
              Common <span className="serif-accent">questions</span>
            </h2>
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
