import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Tag, Eyebrow, Button } from "@/components/ui";
import ContactSection from "@/components/ContactSection";
import { certifications } from "@/data/certifications";
import { skills } from "@/data/skills";

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
              Ishmael <span className="serif-accent">Harry-Deckor</span>
            </h1>
            <p className="mt-3 text-xl text-body">Website builder · Founder, Sena Academy</p>

            <div className="mt-10 space-y-6 text-xl leading-relaxed text-body">
              <p>
                I&apos;m Ishmael Harry-Deckor, a software developer and the founder of Sena Academy, where we&apos;re helping the next generation of builders learn AI and software development by creating real projects, not just watching tutorials. I engineered our live{" "}
                <Link href="/projects/sena-academy-lms" className="font-medium text-ink underline underline-offset-4">
                  Sena Academy LMS
                </Link>{" "}
                from the ground up as the core of our student hub.
              </p>
              <p>
                I build modern, high-performance websites and web apps that combine thoughtful design with AI-powered development workflows. To me, AI isn&apos;t a shortcut. It&apos;s a productivity multiplier that lets me build faster while keeping quality high.
              </p>
              <p>
                My experience spans frontend development, prompt engineering, machine learning fundamentals and practical AI implementation. Through my internship at Erudite Africa Network, I applied AI to real business problems, which taught me how technology creates value beyond writing code.
              </p>
              <p>
                Alongside building products, I&apos;m passionate about helping others become builders by shipping projects, building portfolios and preparing for opportunities in today&apos;s AI-driven world.
              </p>
              <p className="border-l-4 border-accent pl-5 font-bold text-ink">
                &ldquo;I don&apos;t just build websites. I build products, create opportunities, and help others become builders.&rdquo;
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

      <ContactSection />
    </>
  );
}
