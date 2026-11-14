"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface ServiceItem {
  title: string;
  body: string;
  /** Project slug shown as the example for this service. */
  slug: string;
  projectName: string;
  host: string;
}

/** List of services; the selected one previews a real project built for it. */
export default function ServicesShowcase({ items }: { items: ServiceItem[] }) {
  const [active, setActive] = useState(0);
  const cur = items[active];

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-14">
      <div>
        <div className="overflow-hidden rounded-xl bg-white shadow-[0_24px_50px_-30px_rgba(0,0,0,0.45)] ring-1 ring-ink/10">
          <div className="flex items-center gap-3 border-b border-ink/10 bg-mist px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
              <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
              <i className="h-2.5 w-2.5 rounded-full bg-ink/20" />
            </span>
            <span className="min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-body">{cur.host}</span>
          </div>
          <div className="relative aspect-[16/10] bg-white">
            {items.map((it, i) => (
              <Image
                key={it.slug}
                src={`/projects/${it.slug}/desktop.png`}
                alt={i === active ? `${it.projectName} website` : ""}
                aria-hidden={i !== active}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className={`object-cover object-top transition-opacity duration-500 motion-reduce:transition-none ${i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </div>
        </div>
        <Link href={`/projects/${cur.slug}`} className="mt-2 inline-flex min-h-11 items-center gap-1 text-base font-bold hover:underline">
          Example: {cur.projectName} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="hidden w-px bg-ink/15 lg:block" aria-hidden="true" />

      <div className="flex flex-col justify-center">
        {items.map((it, i) => {
          const on = i === active;
          return (
            <div key={it.title} className="border-b border-ink/15 py-6 first:pt-0 last:border-b-0">
              <h3>
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`text-left text-3xl font-bold tracking-[-0.02em] transition-colors sm:text-4xl ${on ? "text-ink" : "text-ink/35 hover:text-ink/70"}`}
                >
                  {it.title}
                </button>
              </h3>
              <div className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden text-lg leading-relaxed text-body">
                  <span className="block pt-3">{it.body}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
