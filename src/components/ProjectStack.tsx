import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Pill } from "@/components/ui";
import type { Project } from "@/data/projects";

/**
 * Full-width white cards that pile on top of each other as you scroll
 * (pure CSS `position: sticky`, no scroll listeners).
 */
export default function ProjectStack({ projects }: { projects: Project[] }) {
  return (
    <div className="flex flex-col gap-6 md:block">
      {projects.map((p, i) => (
        <article
          key={p.slug}
          className="rounded-[20px] bg-paper p-6 text-ink md:sticky md:mb-10 md:p-12"
          style={{ top: `${96 + i * 20}px` }}
        >
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-12">
            <div>
              <h3 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                {p.name}
              </h3>
              <p className="mt-3 text-lg text-body">{p.category}</p>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-body">
                {p.summary}
              </p>
            </div>

            <Link
              href={`/projects/${p.slug}`}
              aria-label={`Read the ${p.name} case study`}
              className="group relative mx-auto block h-60 w-60 sm:h-72 sm:w-72"
            >
              <span className="absolute -inset-4 rounded-full border border-dashed border-ink/30" aria-hidden="true" />
              <span className="relative block h-full w-full overflow-hidden rounded-full bg-mist">
                <Image
                  src={`/projects/${p.slug}/desktop.png`}
                  alt={`${p.name} website preview`}
                  fill
                  sizes="288px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </span>
            </Link>

            <div className="flex flex-col gap-6 md:items-end">
              <div className="flex flex-wrap gap-2 md:justify-end">
                <Pill tone={p.projectType === "live-client" ? "lime" : "mist"}>
                  {p.projectType === "live-client" ? "Live client work" : "Concept build"}
                </Pill>
                {p.techStack.slice(0, 2).map((t, j) => (
                  <Pill key={t} tone={j === 0 ? "sky" : "grape"}>
                    {t}
                  </Pill>
                ))}
              </div>
              <div className="flex gap-5 text-base font-medium">
                <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
                  Case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
                  Live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
