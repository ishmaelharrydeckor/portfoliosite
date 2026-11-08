import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { Pill, ArrowButton } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import ProjectStack from "@/components/ProjectStack";
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
  const conceptCount = projects.length - liveCount;

  const stats = [
    { value: projects.length, label: "Projects built", tone: "bg-paper" },
    { value: liveCount, label: "Live client sites", tone: "bg-lime" },
    { value: conceptCount, label: "Concept builds", tone: "bg-sky text-white" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="dot-grid overflow-hidden">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.15fr_1fr] lg:px-9 lg:pb-28 lg:pt-16">
          <div>
            <h1 className="text-[clamp(3.25rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
              Ishmael
              <br />
              Harry-Deckor
            </h1>
            <p className="mt-8 max-w-lg text-xl leading-snug tracking-tight text-body sm:text-2xl">
              I build websites for businesses: clear, fast, and designed to turn
              visitors into customers.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <ArrowButton href="/#contact">Let&apos;s connect</ArrowButton>
              <Link href="/projects" className="text-lg font-medium underline underline-offset-8 hover:opacity-60">
                See my work
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px] sm:max-w-[500px]">
            <span className="absolute -inset-6 rounded-full border border-dashed border-ink/25" aria-hidden="true" />
            <span className="absolute -inset-12 rounded-full border border-dashed border-ink/15" aria-hidden="true" />
            <div className="relative aspect-square overflow-hidden rounded-full bg-ink-soft">
              <Image
                src="/headshot.jpg"
                alt="Portrait of Ishmael Harry-Deckor"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 500px"
                className="object-cover object-top"
              />
            </div>
            <Pill tone="sky" className="float-slow absolute -top-6 right-2 !text-lg">Websites</Pill>
            <Pill tone="mist" className="float-slower absolute left-[-2.5rem] top-[22%] !text-lg">Landing pages</Pill>
            <Pill tone="grape" className="float-slow absolute -right-6 bottom-[14%] !text-lg">Web apps</Pill>
            <Pill tone="lime" className="float-slower absolute -bottom-4 left-[12%] !text-lg">Redesigns</Pill>
          </div>
        </div>
      </section>

      {/* STACK MARQUEE */}
      <section aria-label="Technologies I build with" className="border-y border-ink/10 bg-paper py-8">
        <p className="mb-5 text-center text-sm uppercase tracking-widest text-body">Built with</p>
        <div className="marquee overflow-hidden">
          <div className="marquee-track" style={{ animationDuration: "30s" }}>
            {[0, 1].map((copy) =>
              stack.map((s) => (
                <span
                  key={`${copy}-${s}`}
                  aria-hidden={copy === 1 || undefined}
                  className="mr-14 text-2xl font-medium tracking-tight text-ink/60 sm:mr-20 sm:text-3xl"
                >
                  {s}
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ABOUT + STATS */}
      <section className="dot-grid bg-mist">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-2 lg:px-9 lg:py-32">
          <Reveal>
            <Pill tone="paper">About me</Pill>
            <h2 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              Hello, I&apos;m Ishmael
            </h2>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-body">
              I&apos;m a developer who builds modern websites for businesses and
              personal brands. Every project is built to look credible, load
              fast and make it easy for customers to get in touch.
            </p>
            <Link href="/about" className="mt-8 inline-block text-lg font-medium underline underline-offset-8 hover:opacity-60">
              More about me
            </Link>
            <div className="mt-16">
              <Quote className="h-10 w-10 fill-ink/20 text-ink/20" aria-hidden="true" />
              <p className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-tight">
                Build technology that solves real problems, and empower others to do the same.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="grid content-start gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((s) => (
              <div key={s.label} className={`rounded-2xl p-8 lg:flex lg:items-end lg:justify-between lg:p-10 ${s.tone}`}>
                <p className="text-7xl font-medium tracking-[-0.04em] lg:text-8xl">{s.value}</p>
                <p className="mt-2 text-xl tracking-tight lg:mt-0">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 lg:grid-cols-2 lg:px-9 lg:py-32">
          <Reveal>
            <Pill tone="mist">Services</Pill>
            <h2 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              Websites for your business
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
      <section id="work" className="dot-grid-dark scroll-mt-20 bg-ink text-white">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-24 lg:px-9 lg:pt-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Pill tone="ink">Projects</Pill>
            <h2 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              What I&apos;m proud of
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-white/65">
              Websites and web apps I&apos;ve built, from live client work to
              self-directed concept builds.
            </p>
          </Reveal>
          <div className="mt-16">
            <ProjectStack projects={featured} />
          </div>
        </div>

        <div className="pb-24">
          <h3 className="mb-10 text-center text-3xl font-medium tracking-tight">Other projects</h3>
          <ProjectStrip projects={others} />
          <div className="mt-14 flex justify-center">
            <ArrowButton href="/projects" variant="light">
              View all projects
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="dot-grid bg-mist">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-32">
          <Reveal className="max-w-2xl">
            <Pill tone="paper">How it works</Pill>
            <h2 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              A clear process, from first chat to launch
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {process.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="h-full rounded-2xl bg-paper p-8">
                  <p className="text-lg text-body">Step {s.n}</p>
                  <h3 className="mt-16 text-3xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-body">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS (placeholders) */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-32">
          <Reveal className="text-center">
            <Pill tone="mist">Testimonials</Pill>
            <h2 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              What clients say
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-ink/25 p-8">
                  <div>
                    <Quote className="h-8 w-8 fill-ink/15 text-ink/15" aria-hidden="true" />
                    <blockquote className="mt-4 text-2xl font-medium leading-snug tracking-tight">
                      {t.quote}
                    </blockquote>
                  </div>
                  <figcaption className="mt-10 flex items-center gap-3">
                    <span className="h-11 w-11 rounded-full bg-mist" aria-hidden="true" />
                    <span>
                      <span className="block text-base font-medium">{t.name}</span>
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
      <section className="dot-grid bg-mist">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-24 lg:grid-cols-2 lg:px-9 lg:py-32">
          <Reveal>
            <Pill tone="paper">FAQ</Pill>
            <h2 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl">
              Common questions
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
