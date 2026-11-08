import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

/** Auto-scrolling strip of the remaining projects. Pauses on hover. */
export default function ProjectStrip({ projects }: { projects: Project[] }) {
  const renderCards = (hidden: boolean) =>
    projects.map((p) => (
      <Link
        key={`${hidden ? "b" : "a"}-${p.slug}`}
        href={`/projects/${p.slug}`}
        tabIndex={hidden ? -1 : undefined}
        aria-hidden={hidden || undefined}
        className="group relative mr-6 block aspect-[3/2] w-[300px] shrink-0 overflow-hidden rounded-xl bg-ink-soft sm:w-[420px]"
      >
        <Image
          src={`/projects/${p.slug}/desktop.png`}
          alt={hidden ? "" : `${p.name} website preview`}
          fill
          sizes="420px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-lg font-medium text-white">
          {p.name}
        </span>
      </Link>
    ));

  return (
    <div className="marquee overflow-hidden">
      <div className="marquee-track" style={{ animationDuration: `${projects.length * 8}s` }}>
        {renderCards(false)}
        {renderCards(true)}
      </div>
    </div>
  );
}
