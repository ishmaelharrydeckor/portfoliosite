import Image from "next/image";
import type { Metadata } from "next";
import { Tag, Eyebrow, Button, Mark } from "@/components/ui";
import ContactSection from "@/components/ContactSection";
import { certifications } from "@/data/certifications";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description: "Developer building modern websites for businesses, and founder of Sena Academy.",
};

const skillGroups = ["Frontend", "AI & Systems", "Design & Creative", "Operations & Growth"] as const;
const certGroups = [
  { key: "AI & ML", label: "AI & Machine Learning", tone: "accent" },
  { key: "Software & Tools", label: "Software & Tools", tone: "solid" },
  { key: "Soft Skills", label: "Leadership", tone: "outline" },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] items-start gap-16 px-6 pb-24 pt-12 lg:grid-cols-[1fr_1.3fr] lg:px-9 lg:pt-20">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-md bg-ink-soft lg:sticky lg:top-28">
            <Image src="/headshot.jpg" alt="Ishmael Harry-Deckor" fill priority sizes="(max-width: 1024px) 90vw, 440px" className="object-cover object-top" />
          </div>

          <div>
            <Eyebrow>About me</Eyebrow>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-7xl">
              Ishmael <Mark>Harry-Deckor</Mark>
            </h1>
            <p className="mt-3 text-xl text-body">I build websites for businesses · Founder, Sena Academy</p>

            <div className="mt-10 space-y-6 text-xl leading-relaxed text-body">
              <p>
                I started building websites because I saw businesses doing amazing work that
                people could not see. Others had a website that did not match their brand. You
                could feel it as you scrolled: it did not feel like them. I wanted to fix both.
              </p>
              <p>
                I focus on businesses because so many good ones go unnoticed. In today&apos;s
                attention economy, you can&apos;t do well if your work is not out there. A website that
                looks like your brand and can be found is how people get to see it.
              </p>
              <p>
                Every project starts with a call. I learn your business and the problem you are
                trying to solve, and we build the site around that. My Petroleum Engineering degree
                taught me to break a problem down and plan it step by step, and I bring that to
                every project.
              </p>
              <p>
                I started Sena Academy because I saw a lot of people falling behind in AI. They did
                not know how to use it to get real work done, and they struggled. Today the
                community has more than 700 people. Members are building amazing things, and many
                of them build websites for other businesses and for their own. People from our first
                cohort are doing great work too. I built the{" "}
                <a
                  href="https://sena-academy-lms-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline underline-offset-4"
                >
                  Sena Academy LMS
                </a>{" "}
                myself.
              </p>
              <p>
                I am resilient and dedicated, and I hold to my values. When I take your project, it
                is done for you, with no stress on your side. I respect your time, I deliver within
                the timeline we agree, and I work fast. Every client so far has come to me after seeing my work.
              </p>
              <p className="border-l-4 border-accent pl-5 font-bold text-ink">
                Businesses are doing amazing work. People should be able to see it.
              </p>
            </div>

            <div className="mt-10">
              <Button href="/contact" variant="dark">Start a project</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-28">
          <Eyebrow>Expertise</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">What I work with</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => (
              <div key={g} className="rounded-md bg-paper p-6">
                <h3 className="text-xl font-extrabold tracking-tight">{g}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {skills.filter((s) => s.category === g).map((s) => (
                    <li key={s.name} className="rounded-sm bg-mist px-3 py-1.5 text-sm">{s.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-28">
          <Eyebrow>Credentials</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">Certifications</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {certGroups.map((g) => (
              <div key={g.key} className="rounded-md bg-mist p-6">
                <Tag tone={g.tone}>{g.label}</Tag>
                <ul className="mt-6 space-y-4">
                  {certifications.filter((c) => c.category === g.key).map((c) => (
                    <li key={c.name}>
                      <p className="text-base font-bold leading-snug">{c.name}</p>
                      <p className="text-sm text-body">{c.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-9 lg:py-28">
          <Eyebrow className="text-accent">Background</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
            Building, leading and <Mark>delivering</Mark>
          </h2>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-paper/65">
            I&apos;m a Petroleum Engineering student at KNUST. Outside class I
            run a company and lead teams, which is how I learned to deliver
            for the people I build for.
          </p>
          <div className="mt-12 border-t border-paper/20">
            {experience.map((r) => (
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

      <ContactSection />
    </>
  );
}
