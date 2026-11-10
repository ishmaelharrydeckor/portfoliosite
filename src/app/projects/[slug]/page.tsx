import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Tag, Eyebrow } from "@/components/ui";
import ContactSection from "@/components/ContactSection";
import { showcaseProjects as projects } from "@/data/projects";

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
    { label: "The brief", text: project.problem },
    { label: "What I did", text: project.approach },
    ...(project.challenge ? [{ label: "The hardest part", text: project.challenge }] : []),
    { label: "How it went", text: project.outcome },
  ];

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-8 lg:px-9">
          <Link href="/projects" className="inline-flex items-center gap-2 text-lg hover:opacity-60">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" /> All projects
          </Link>

          <div className="mt-10 flex flex-wrap gap-2">
            <Tag tone={project.projectType === "concept" ? "outline" : "accent"}>
              {{ "live-client": "Live client work", "in-progress": "In progress", concept: "Concept build" }[project.projectType]}
            </Tag>
            <Tag>{project.category}</Tag>
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-body">{project.summary}</p>

          {!project.url && (
            <p className="mt-10 inline-block rounded-md border border-ink/20 px-4 py-3 text-base text-body">
              Not hosted yet. Screenshots are from the local build.
            </p>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-md bg-accent px-6 py-4 text-base font-bold tracking-tight text-ink transition-colors hover:bg-ink hover:text-accent"
            >
              Visit live site
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
          )}

          <div className="relative mt-16 aspect-[16/10] w-full overflow-hidden rounded-md bg-ink-soft">
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
            <Eyebrow>Tech stack</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((t, i) => (
                <Tag key={t} tone={i === 0 ? "accent" : "outline"}>
                  {t}
                </Tag>
              ))}
            </div>
          </aside>

          <div className="flex flex-col gap-14">
            {sections.map((s, i) => (
              <div key={s.label} className="border-t-2 border-ink pt-6">
                <p className="text-lg font-semibold text-body">0{i + 1}</p>
                <h2 className="mt-1 text-3xl font-extrabold tracking-tight">{s.label}</h2>
                <p className="mt-4 max-w-2xl text-xl leading-relaxed text-body">{s.text}</p>
              </div>
            ))}

            <div className="border-t border-ink/15 pt-10">
              <h2 className="text-3xl font-extrabold tracking-tight">On mobile</h2>
              <div className="relative mt-6 aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-md bg-ink-soft">
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

      <section className="bg-accent">
        <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-9">
          <p className="text-lg font-semibold">Next project</p>
          <Link href={`/projects/${next.slug}`} className="group mt-2 flex items-center justify-between gap-6">
            <span className="text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl">{next.name}</span>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-ink text-accent transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-6 w-6" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
