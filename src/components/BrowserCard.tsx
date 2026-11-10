import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

const host = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * A project shown inside a browser frame with its real URL. On hover the
 * full-page screenshot scrolls inside the frame (still on touch and for
 * users who prefer reduced motion).
 */
export default function BrowserCard({ project: p }: { project: Project }) {
  const status = p.projectType;
  return (
    <Link href={`/projects/${p.slug}`} className="group block" aria-label={`${p.name}: read the case study`}>
      <div className="overflow-hidden rounded-xl bg-white shadow-[0_24px_50px_-30px_rgba(0,0,0,0.45)] ring-1 ring-ink/10 transition-shadow duration-300 group-hover:shadow-[0_30px_60px_-28px_rgba(0,0,0,0.55)]">
        <div className="flex items-center gap-3 border-b border-ink/10 bg-mist px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
            <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
            <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
          </span>
          <span className="min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-body">{p.url ? host(p.url) : "Not hosted yet"}</span>
          {status === "live-client" ? (
            <span className="flex shrink-0 items-center gap-1.5 text-xs font-bold text-emerald-700">
              <i className="h-2 w-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" aria-hidden="true" /> Live
            </span>
          ) : status === "in-progress" ? (
            <span className="flex shrink-0 items-center gap-1.5 text-xs font-bold text-amber-700">
              <i className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" /> In progress
            </span>
          ) : (
            <span className="shrink-0 text-xs font-bold text-body/70">Concept</span>
          )}
        </div>
        <div className="relative h-[var(--h)] overflow-hidden bg-white [--h:280px] sm:[--h:340px]">
          <Image
            src={`/projects/${p.slug}/full.jpg`}
            alt={`${p.name} website`}
            width={1000}
            height={2916}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="block w-full transition-transform duration-[7000ms] ease-linear group-hover:[transform:translateY(calc(-100%+var(--h)))] motion-reduce:transition-none motion-reduce:group-hover:transform-none"
          />
        </div>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold tracking-[-0.02em] transition-colors group-hover:underline group-hover:decoration-accent group-hover:decoration-4 group-hover:underline-offset-4">
            {p.name}
          </h3>
          <p className="mt-1.5 max-w-md text-base leading-relaxed text-body">{p.summary}</p>
        </div>
      </div>
    </Link>
  );
}
