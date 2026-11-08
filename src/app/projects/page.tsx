"use client";

import { useState } from "react";
import { Eyebrow, Mark } from "@/components/ui";
import BrowserCard from "@/components/BrowserCard";
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
            Selected <Mark>work</Mark>
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

          <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
            {visible.map((p) => (
              <BrowserCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
