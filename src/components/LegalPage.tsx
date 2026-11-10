import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui";

export interface LegalSection {
  heading: string;
  body: ReactNode;
}

/** Shared layout for the privacy policy and terms pages. */
export default function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 text-base text-body">Last updated: {updated}</p>
        <p className="mt-8 text-xl leading-relaxed text-body">{intro}</p>

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((s, i) => (
            <section key={s.heading} className="border-t-2 border-ink pt-6">
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                {i + 1}. {s.heading}
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-body [&_a]:font-medium [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
