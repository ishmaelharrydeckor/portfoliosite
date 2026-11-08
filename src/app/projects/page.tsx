"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Pill } from "@/components/ui";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";

const categories = Array.from(new Set(projects.map((p) => p.category)));
const filters = ["All", "Live Client Work", "Concept Builds", ...categories];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const visible = projects.filter((p) => {
    if (active === "All") return true;
    if (active === "Live Client Work") return p.projectType === "live-client";
    if (active === "Concept Builds") return p.projectType === "concept";
    return p.category === active;
  });

  return (
    <>
      <section className="dot-grid bg-mist">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-12 lg:px-9 lg:pt-20">
          <Pill tone="paper">Projects</Pill>
          <h1 className="mt-6 text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-7xl">
            Selected work
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-body">
            {projects.length} websites and web apps, from live client work to
            self-directed concept builds.
          </p>

          <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={active === f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-base font-medium tracking-tight transition-colors ${
                  active === f ? "bg-ink-soft text-white" : "bg-paper text-ink hover:bg-ink/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-paper">
                <Link href={`/projects/${p.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-mist" aria-label={`Read the ${p.name} case study`}>
                  <Image
                    src={`/projects/${p.slug}/desktop.png`}
                    alt={`${p.name} website preview`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 3}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    <Pill tone={p.projectType === "live-client" ? "lime" : "mist"} className="!text-sm !px-3 !py-1">
                      {p.projectType === "live-client" ? "Live client" : "Concept"}
                    </Pill>
                    <Pill tone="mist" className="!text-sm !px-3 !py-1">{p.category}</Pill>
                  </div>
                  <h2 className="mt-4 text-2xl font-medium tracking-tight">{p.name}</h2>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-body">{p.summary}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-base font-medium">
                    <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-1 hover:underline underline-offset-4">
                      Case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-body hover:text-ink">
                      Live site
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
