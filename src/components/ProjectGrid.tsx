import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui";
import Reveal from "@/components/Reveal";
import type { Project } from "@/data/projects";

/**
 * Rectangular project cards: full screenshot on top, details beneath.
 * The first project is a wide feature card.
 */
export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
      {projects.map((p, i) => {
        const feature = i === 0;
        return (
          <Reveal key={p.slug} className={feature ? "md:col-span-2" : ""}>
            <article className={`group grid gap-6 ${feature ? "lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-10" : ""}`}>
              <Link
                href={`/projects/${p.slug}`}
                aria-label={`Read the ${p.name} case study`}
                className="relative block aspect-[16/10] overflow-hidden rounded-md bg-ink-soft"
              >
                <Image
                  src={`/projects/${p.slug}/desktop.png`}
                  alt={`${p.name} website preview`}
                  fill
                  sizes={feature ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
                  priority={i < 2}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </Link>

              <div>
                <div className="flex flex-wrap gap-2">
                  <Tag tone={p.projectType === "live-client" ? "accent" : "outline"}>
                    {p.projectType === "live-client" ? "Live client" : "Concept"}
                  </Tag>
                  <Tag>{p.category}</Tag>
                </div>
                <h3 className={`mt-4 font-extrabold tracking-[-0.025em] ${feature ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>
                  {p.name}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-paper/65">{p.summary}</p>
                <div className="mt-5 flex gap-6 text-base font-bold">
                  <Link href={`/projects/${p.slug}`} className="inline-flex items-center gap-1 hover:text-accent">
                    Case study <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-accent">
                    Live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
