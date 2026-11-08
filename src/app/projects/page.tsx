"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Tag, Eyebrow } from "@/components/ui";
import ContactSection from "@/components/ContactSection";
import { showcaseProjects as projects, totalCount } from "@/data/projects";

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
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-12 lg:px-9 lg:pt-20">
          <Eyebrow>Projects</Eyebrow>
          <h1 className="mt-5 text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-7xl">
            Selected <span className="serif-accent">work</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-body">
            {`A selection of ${projects.length} from the ${totalCount} websites and web apps I've built, across live client work and concept builds.`}
          </p>

          <div className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={active === f}
                onClick={() => setActive(f)}
                className={`rounded-md px-4 py-2 text-sm font-bold tracking-tight transition-colors ${
                  active === f ? "bg-ink text-paper" : "bg-mist text-ink hover:bg-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <article key={p.slug} className="group flex flex-col overflow-hidden rounded-md bg-mist">
                <Link href={`/projects/${p.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-ink-soft" aria-label={`Read the ${p.name} case study`}>
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
                    <Tag tone={p.projectType === "live-client" ? "accent" : "outline"}>
                      {p.projectType === "live-client" ? "Live client" : "Concept"}
                    </Tag>
                    <Tag>{p.category}</Tag>
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold tracking-tight">{p.name}</h2>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-body">{p.summary}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-ink/15 pt-4 text-base font-bold">
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
