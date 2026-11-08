import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Pill } from "@/components/ui";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return project ? { title: project.name, description: project.summary } : {};
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  const sections = [
    { label: "The problem", text: project.problem },
    { label: "The approach", text: project.approach },
    { label: "The outcome", text: project.outcome },
  ];

  return (
    <>
      <section className="dot-grid bg-mist">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-8 lg:px-9">
          <Link href="/projects" className="inline-flex items-center gap-2 text-lg hover:opacity-60">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" /> All projects
          </Link>

          <div className="mt-10 flex flex-wrap gap-2">
            <Pill tone={project.projectType === "live-client" ? "lime" : "paper"}>
              {project.projectType === "live-client" ? "Live client work" : "Concept build"}
            </Pill>
            <Pill tone="paper">{project.category}</Pill>
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-body">{project.summary}</p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-6 rounded-full bg-ink-soft py-2 pl-6 pr-2 text-base font-medium tracking-tight text-white transition-transform hover:scale-[1.02]"
          >
            Visit live site
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink">
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </span>
          </a>

          <div className="relative mt-16 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-paper">
            <Image
              src={`/projects/${project.slug}/desktop.png`}
              alt={`${project.name} desktop preview`}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-24 lg:grid-cols-[1fr_2fr] lg:px-9 lg:py-32">
          <aside className="h-fit lg:sticky lg:top-28">
            <h2 className="text-sm uppercase tracking-widest text-body">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((t, i) => (
                <Pill key={t} tone={(["sky", "lime", "grape", "mist"] as const)[i % 4]}>
                  {t}
                </Pill>
              ))}
            </div>
          </aside>

          <div className="flex flex-col gap-14">
            {sections.map((s, i) => (
              <div key={s.label} className="border-t border-ink/15 pt-6">
                <p className="text-lg text-body">0{i + 1}</p>
                <h2 className="mt-1 text-3xl font-medium tracking-tight">{s.label}</h2>
                <p className="mt-4 max-w-2xl text-xl leading-relaxed text-body">{s.text}</p>
              </div>
            ))}

            <div className="border-t border-ink/15 pt-10">
              <h2 className="text-3xl font-medium tracking-tight">On mobile</h2>
              <div className="relative mt-6 aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-2xl bg-mist">
                <Image
                  src={`/projects/${project.slug}/mobile.png`}
                  alt={`${project.name} mobile preview`}
                  fill
                  sizes="280px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-9">
          <p className="text-lg text-body">Next project</p>
          <Link href={`/projects/${next.slug}`} className="group mt-2 flex items-center justify-between gap-6">
            <span className="text-4xl font-medium tracking-[-0.03em] sm:text-6xl">{next.name}</span>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink-soft text-white transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-6 w-6" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
