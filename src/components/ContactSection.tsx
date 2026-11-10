import { Eyebrow, Button, Mark } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site, whatsappLink } from "@/data/site";

export default function ContactSection({
  as: Heading = "h2",
}: {
  as?: "h1" | "h2";
}) {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-2 lg:px-9 lg:py-32">
        <Reveal className="flex flex-col gap-10">
          <div>
            <Eyebrow className="text-accent">Contact</Eyebrow>
            <Heading className="mt-5 font-display text-5xl font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-7xl">
              Got a project?
              <br />
              Let&apos;s <Mark>talk</Mark>.
            </Heading>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-paper/70">
              Tell me what you need and I&apos;ll send you a quote.
            </p>
          </div>

          <div>
            <p className="text-sm text-paper/60">Reach out via email</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block break-all font-display text-2xl font-bold tracking-tight hover:text-accent sm:text-3xl"
            >
              {site.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              {whatsappLink && <Button href={whatsappLink} external>WhatsApp</Button>}
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
                  className="rounded-md border border-paper/30 px-5 py-4 text-base font-bold transition-colors hover:border-accent hover:bg-accent hover:text-ink"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
