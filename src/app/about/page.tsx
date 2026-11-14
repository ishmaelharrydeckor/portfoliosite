import Image from "next/image";
import type { Metadata } from "next";
import { Eyebrow, Button, Mark } from "@/components/ui";
import ContactSection from "@/components/ContactSection";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description: "Why Ishmael Harry-Deckor builds websites for consultants, coaches and speakers, how he works, and his background as founder of Sena Academy.",
  alternates: { canonical: "/about" },
};


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
            <p className="mt-3 text-xl text-body">Websites for consultants, coaches and speakers · Founder, Sena Academy</p>

            <div className="mt-10 space-y-6 text-xl leading-relaxed text-body">
              <p>
                LinkedIn gets people interested. What they find when they look you up decides
                whether they book. Many consultants, coaches and speakers lose bookings quietly:
                no website, an old one that does not match how good they are, or one that breaks
                on a phone. You never find out it happened.
              </p>
              <p>
                Most of them do want a website. The hesitation is that building one sounds
                complicated, costly and one more thing on a full week. That is why mine is done
                for you. You send your photos and your logo, and I handle the rest, from the first
                call to launch. Once it is live, you can update it yourself.
              </p>
              <p>
                Every project starts with a call. I learn your work and who you want to reach, and
                we build the site around that. I am a petroleum engineering student at KNUST, and
                that training taught me to break a problem down and plan it step by step. My rule
                is to find the easiest route that will not cost you later, which is why I keep the
                sites simple.
              </p>
              <p>
                I also run Sena Academy, where I teach beginners to build their own sites. The
                community has more than 700 people, and members from our first cohort are building
                sites for other people and for themselves. I built the{" "}
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
                I respect your time, I deliver within the timeline we agree, and I work fast. Every
                client so far has come to me after seeing my work.
              </p>
              <p className="border-l-4 border-accent pl-5 font-bold text-ink">
                Not sure where yours stands? Ask for a free look-up and I will tell you what a
                prospect sees when they search your name.
              </p>
            </div>

            <div className="mt-10">
              <Button href="/contact" variant="dark">Get a free look-up</Button>
            </div>
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
