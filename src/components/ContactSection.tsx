import Image from "next/image";
import { Pill } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function ContactSection({
  as: Heading = "h2",
}: {
  as?: "h1" | "h2";
}) {
  return (
    <section id="contact" className="dot-grid-dark bg-ink text-white">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-2 lg:px-9 lg:py-32">
        <Reveal className="flex flex-col justify-between gap-16">
          <div>
            <Pill tone="ink">Contact me</Pill>
            <Heading className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-7xl">
              Ways to connect
            </Heading>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-white/70">
              Have a business that needs a website? Tell me about it and I&apos;ll
              reply with next steps.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full outline-dashed outline-1 outline-offset-4 outline-white/40">
                <Image src="/headshot.jpg" alt="Ishmael Harry-Deckor" fill sizes="64px" className="object-cover object-top" />
              </div>
              <p className="text-2xl font-medium tracking-tight">{site.name}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Pill tone="paper">Websites</Pill>
              <Pill tone="sky">Next.js</Pill>
              <Pill tone="lime">Fast &amp; responsive</Pill>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-10">
          <div>
            <a
              href={`mailto:${site.email}`}
              className="break-all text-2xl font-medium tracking-tight hover:text-lime sm:text-4xl"
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
                  className="rounded-full border border-white/25 px-5 py-2 text-base transition-colors hover:bg-white hover:text-ink"
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
