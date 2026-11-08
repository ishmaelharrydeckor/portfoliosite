import Image from "next/image";
import { Eyebrow } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function ContactSection({
  as: Heading = "h2",
}: {
  as?: "h1" | "h2";
}) {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-2 lg:px-9 lg:py-32">
        <Reveal className="flex flex-col justify-between gap-16">
          <div>
            <Eyebrow className="text-accent">Contact</Eyebrow>
            <Heading className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-7xl">
              Let&apos;s build <span className="serif-accent text-accent">yours</span>
            </Heading>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-paper/70">
              Have a business that needs a website? Tell me about it and I&apos;ll
              reply with next steps.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-md">
                <Image src="/headshot.jpg" alt="Ishmael Harry-Deckor" fill sizes="64px" className="object-cover object-top" />
              </div>
              <p className="text-2xl font-extrabold tracking-tight">{site.name}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-10">
          <div>
            <a
              href={`mailto:${site.email}`}
              className="break-all text-2xl font-extrabold tracking-tight hover:text-accent sm:text-4xl"
            >
              {site.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                ["LinkedIn", site.linkedin],
                ["GitHub", site.github],
                ["X", site.twitter],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-paper/30 px-5 py-2.5 text-base font-semibold transition-colors hover:bg-accent hover:text-ink hover:border-accent"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
