import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, Button, Mark } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import BrowserCard from "@/components/BrowserCard";
import ServicesShowcase from "@/components/ServicesShowcase";
import ContactSection from "@/components/ContactSection";
import { showcaseProjects, totalCount, liveClientCount } from "@/data/projects";
import { experience } from "@/data/experience";
import { lookupLink, site, siteUrl, tagline } from "@/data/site";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "A site that matches your brand",
    body: "Built new or rebuilt, so it looks and sounds like you and works properly on a phone.",
    slug: "samuel-adanuvo",
    projectName: "Samuel Adanuvo",
    host: "sammyadanuvo.com",
  },
  {
    title: "A page that gets you booked",
    body: "A clear next step on every page: book a call, book you to speak, or send an enquiry.",
    slug: "paa-kwesi-folson",
    projectName: "Paa Kwesi Folson",
    host: "pkf-pink.vercel.app",
  },
  {
    title: "A site you update yourself",
    body: "An admin page where you edit your pages, add events and write posts. You do not need a developer, and your site never goes stale.",
    slug: "daniel",
    projectName: "Daniel Avudzivi",
    host: "ishmaelharrydeckor.github.io/Daniel",
  },
  {
    title: "Found when people search your name",
    body: "Set up so Google shows your site when a prospect looks you up.",
    slug: "samuel-adanuvo",
    projectName: "Samuel Adanuvo",
    host: "sammyadanuvo.com",
  },
];

const faqs = [
  {
    title: "How does it work?",
    body: "We start with a call so I understand you and your work. You send me your photos and your logo, and I build the site. You look it over before it goes live.",
  },
  {
    title: "How long does it take?",
    body: "I work fast. Once we have spoken and I know what the site needs, I give you a timeline.",
  },
  {
    title: "What do I need to provide?",
    body: "Your photos and your logo, and a call to talk about your work. I handle the rest.",
  },
  {
    title: "Can I update it myself?",
    body: "Yes. I build you an admin page where you can edit your pages, add events and write posts. You do not need a developer.",
  },
  {
    title: "Will people find my site when they search your name?",
    body: "That is what I set it up for. I build every site so Google and tools like ChatGPT can understand who you are and what you do: clear page titles, a clean structure and fast loading. Nobody can honestly promise a ranking position, but your site is set up to be found.",
  },
  {
    title: "Do you do the design as well as the build?",
    body: "Yes. I do both, so you get a finished website that matches your brand.",
  },
  {
    title: "What is the free look-up?",
    body: "Message me \"look me up\". I search your name the way a prospect would, and I tell you what they find. It is free, with no obligation.",
  },
  {
    title: "How much does it cost?",
    body: "Tell me what you need and I will send you a quote.",
  },
];

export default function Home() {
  const featured = showcaseProjects.slice(0, 3);
  const h2 = "text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl";

  const stats = [
    ["Projects built", String(totalCount)],
    ["Live client sites", String(liveClientCount)],
    ["Sena Academy members", "700+"],
    ["Availability", "Open"],
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: site.name,
        jobTitle: "Web developer for consultants, coaches and speakers",
        url: siteUrl,
        image: `${siteUrl}/headshot.jpg`,
        sameAs: [site.linkedin, site.github, site.twitter],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#service`,
        name: `${site.name}: websites for consultants, coaches and speakers`,
        description: tagline,
        url: siteUrl,
        founder: { "@id": `${siteUrl}/#person` },
        serviceType: ["Websites for consultants, coaches and speakers", "Website redesigns", "Personal-brand websites with an admin page"],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.title,
          acceptedAnswer: { "@type": "Answer", text: f.body },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />
      {/* HERO */}
      <section className="overflow-hidden bg-ink text-paper">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 lg:px-9 lg:py-28">
            <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-paper/70">
              <span className="h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse" aria-hidden="true" />
              Websites for consultants, coaches and speakers
            </p>
            <h1 className="mt-6 text-[clamp(2rem,4.5vw,4.4rem)] font-extrabold leading-[1.04] tracking-[-0.035em]">
              What do people find when they <Mark>search your name</Mark>?
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-paper/70">
              I build the website they land on after your LinkedIn post. It
              matches your brand, works on every phone and makes you easy to
              book. Done for you, from the first call to launch.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {lookupLink ? (
                <Button href={lookupLink} external>Get a free look-up</Button>
              ) : (
                <Button href="/#contact">Get a free look-up</Button>
              )}
              <Button href="/projects" variant="ghost">See my work</Button>
            </div>
            <p className="mt-6 max-w-md text-base text-paper/60">
              Free, no obligation. I will tell you what a prospect sees when they search your name.
            </p>
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

      {/* PROBLEM */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-28">
          <Reveal className="max-w-3xl">
            <Eyebrow>The problem</Eyebrow>
            <h2 className={`mt-5 ${h2}`}>
              LinkedIn gets people interested. What they find <Mark>next</Mark> decides whether they book.
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-body">
              So what would a stranger find if they searched your name tonight?
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              "No website at all.",
              "An old one that does not match how good you are.",
              "One that breaks on their phone.",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="h-full rounded-md border-2 border-ink/15 p-8">
                  <p className="font-display text-2xl font-extrabold leading-snug tracking-tight">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <p className="max-w-2xl text-xl leading-relaxed text-body">
              You would never know it happened, and it quietly costs you. Most
              people do want a website. The hesitation is that building one
              sounds complicated, costly and one more thing on a full week.
              That is why mine is done for you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-32">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className={h2}>What <Mark>you get</Mark></h2>
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
              It starts with a <Mark>call</Mark>
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "We talk", "We get on a call so I understand you, your work and who you want to reach."],
              ["02", "You send your photos and logo", "That is all I need from you."],
              ["03", "I build it", "I design and build the site, you look it over, and it goes live."],
              ["04", "You run it yourself", "Edit your pages, add events and write posts from your admin page."],
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
              <h2 className={`mt-5 ${h2}`}>Some of my <Mark>work</Mark></h2>
              <p className="mt-4 max-w-md text-lg text-body">Hover over a project to scroll through the site.</p>
            </div>
            <Button href="/projects" variant="dark">View all projects</Button>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <Reveal key={p.slug}>
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
              <h2 className={`mt-5 ${h2}`}>My <Mark>background</Mark></h2>
            </div>
            <Link href="/about" className="inline-flex min-h-11 items-center text-base font-bold underline decoration-accent decoration-2 underline-offset-8 hover:text-accent">
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
