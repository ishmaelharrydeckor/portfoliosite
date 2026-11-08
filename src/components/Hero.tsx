import Image from "next/image";
import { Button } from "@/components/ui";
import type { Project } from "@/data/projects";

/** Wide hero: a tilted wall of project screenshots under a dark overlay. */
export default function Hero({
  projects,
  total,
  liveCount,
}: {
  projects: Project[];
  total: number;
  liveCount: number;
}) {
  // Three columns of screenshots; each column is doubled so the drift loops.
  // Repeat the showcase so the wall is always full, whatever the project count.
  const pool = Array.from({ length: 9 }, (_, i) => projects[i % projects.length]);
  const columns = [pool.slice(0, 3), pool.slice(3, 6), pool.slice(6, 9)];

  return (
    <section className="relative isolate flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-ink text-paper">
      {/* Screenshot wall */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -right-[10%] -top-[30%] flex h-[160%] w-[85%] -rotate-12 gap-5 opacity-60">
          {columns.map((col, c) => (
            <div key={c} className="w-1/3 overflow-hidden">
              <div className={`flex flex-col gap-5 ${c % 2 === 0 ? "drift-up" : "drift-down"}`}>
                {[...col, ...col].map((p, i) => (
                  <div key={`${p.slug}-${i}`} className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-md bg-ink-soft">
                    <Image
                      src={`/projects/${p.slug}/desktop.png`}
                      alt=""
                      fill
                      sizes="30vw"
                      priority={i < 2}
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Overlay: solid on the left for legibility, fading to the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 lg:px-9">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          Ishmael Harry-Deckor · Web developer
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-7xl lg:text-8xl">
          Websites that
          <br />
          <span className="serif-accent text-accent">win customers</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/75 sm:text-xl">
          I build fast, credible websites for businesses, from the first
          conversation to a live site you can send customers to.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/#contact">Start a project</Button>
          <Button href="/projects" variant="ghost">See my work</Button>
        </div>
        <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-4 border-t border-paper/15 pt-6">
          <div>
            <dt className="text-sm text-paper/60">Projects built</dt>
            <dd className="text-3xl font-extrabold tracking-tight">{total}</dd>
          </div>
          <div>
            <dt className="text-sm text-paper/60">Live client sites</dt>
            <dd className="text-3xl font-extrabold tracking-tight">{liveCount}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
