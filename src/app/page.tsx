"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Zap, ShieldCheck, Clock, LayoutGrid } from "lucide-react";
import InteractiveHeroCanvas from "@/components/InteractiveHeroCanvas";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import { skills } from "@/data/skills";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Hero entrance animations
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-title",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.3"
        );

      // Section scroll triggers
      gsap.utils.toArray<HTMLElement>(".scroll-section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  // Filter visual/motion-craft showcase projects
  const featuredProjects = projects.filter((p) => p.isFeatured);

  // Filter functional client-style and portal projects
  const otherProjects = projects.filter((p) => !p.isFeatured);

  // Group certifications by issuer
  const udemyCertifications = certifications.filter((c) => c.issuer === "Udemy").slice(0, 3);
  const datacampCertifications = certifications.filter((c) => c.issuer === "DataCamp").slice(0, 3);

  // Value props mapping with icons
  const valueProps = [
    {
      title: "Design Precision",
      desc: "Every interface is crafted with tight typography, generous negative space, and micro-animations that feel premium.",
      icon: Zap,
    },
    {
      title: "Technical Grounding",
      desc: "Certified in AI, machine learning, and Python. I understand the underlying mechanics of modern systems, not just prompting.",
      icon: ShieldCheck,
    },
    {
      title: "AI-Powered Speed",
      desc: "Leveraging AI as a productivity multiplier to build and ship production-ready applications in days, not months.",
      icon: Clock,
    },
    {
      title: "Reliable Operations",
      desc: "Leadership and operations experience across multiple organizations ensures transparent communication and on-time shipping.",
      icon: Award,
    },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-background">
      {/* 3D Background Canvas */}
      <InteractiveHeroCanvas />

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col justify-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="hero-cta inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent-glow px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent opacity-0">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping"></span>
            Open for Select Q3-Q4 Projects
          </span>
          <h1 className="hero-title mt-8 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl opacity-0 leading-[1.05]">
            Building premium, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-400 to-accent">
              high-performance
            </span>{" "}
            web experiences.
          </h1>
          <p className="hero-subtitle mt-8 font-sans text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-2xl mx-auto opacity-0">
            I combine thoughtful interface design with AI-accelerated workflows to ship polished, high-conversion applications at scale.
          </p>
          <div className="hero-cta mt-10 flex flex-wrap justify-center gap-4 opacity-0">
            <Link
              href="/projects"
              className="rounded-lg bg-accent text-zinc-950 px-6 py-3.5 text-sm font-semibold tracking-wide hover:bg-accent/90 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,165,39,0.25)] transition-all duration-300 flex items-center gap-2"
            >
              Explore Portfolio
              <LayoutGrid className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-[#0d0d0e] border border-zinc-800 hover:border-accent/40 text-foreground px-6 py-3.5 text-sm font-semibold tracking-wide hover:text-accent hover:shadow-[0_0_15px_rgba(212,165,39,0.1)] transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="scroll-section border-t border-zinc-900 bg-[#070708]/60 py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
                Selected Work
              </h2>
              <p className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Showcase Work
              </p>
            </div>
            <Link
              href="/projects"
              className="group flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              View all {projects.length} projects
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0d0d0e] hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* Desktop Screenshot Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-zinc-900">
                  <Image
                    src={`/projects/${project.slug}/desktop.png`}
                    alt={`${project.name} Desktop Interface`}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider bg-accent-glow px-2.5 py-1 rounded">
                        {project.category}
                      </span>
                      {project.projectType === "live-client" ? (
                        <span className="text-[10px] font-semibold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded uppercase">
                          Live Client Work
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold tracking-wider text-zinc-400 bg-zinc-900 border border-zinc-800 px-2 py-0.5 rounded uppercase">
                          Concept Build
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-foreground-muted">
                      {project.techStack.slice(0, 3).join(" · ")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm text-foreground-muted leading-relaxed flex-grow">
                    {project.summary}
                  </p>
                  <div className="mt-6 pt-6 border-t border-zinc-900/60 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent transition-colors"
                    >
                      Read Case Study
                      <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects / Client Work Section */}
      <section className="scroll-section border-t border-zinc-900 bg-zinc-950/20 py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
              SaaS & Web Applications
            </h2>
            <p className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Other Selected Work
            </p>
            <p className="mt-4 text-base text-foreground-muted max-w-3xl leading-relaxed">
              A collection of functional client solutions, administrative portals, learning systems, and dashboards built with robust state management and responsive styling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-zinc-850 bg-[#0c0c0d] p-6 hover:border-accent/25 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-wider bg-accent-glow px-2 py-0.5 rounded border border-accent/10">
                        {project.category}
                      </span>
                      {project.projectType === "live-client" ? (
                        <span className="text-[9px] font-bold tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-1.5 py-0.5 rounded uppercase">
                          Live Client
                        </span>
                      ) : (
                        <span className="text-[9px] font-bold tracking-wider text-zinc-400 bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded uppercase">
                          Concept
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-foreground-muted font-mono">
                      {project.techStack.slice(0, 2).join(" · ")}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2.5 text-xs text-foreground-muted leading-relaxed">
                    {project.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-900/50 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-accent transition-colors"
                  >
                    View Details
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* "Why Work With Me" Section */}
      <section className="scroll-section py-32 px-6 lg:px-8 bg-background border-t border-zinc-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
              Core Value
            </h2>
            <p className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Work With Me
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-zinc-800/80 bg-[#0d0d0e] p-8 flex flex-col gap-5 hover:border-accent/20 transition-all duration-300"
                >
                  <div className="rounded-lg bg-accent-glow border border-accent/20 p-2.5 w-11 h-11 flex items-center justify-center text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground leading-tight">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {prop.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Strip */}
      <section className="scroll-section py-20 bg-[#070708]/60 border-t border-b border-zinc-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
              Premium Tech Stack & Integration Capabilities
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-foreground-muted">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800/60 hover:border-accent/30 text-xs font-bold uppercase tracking-wider text-foreground hover:text-accent transition-colors duration-200"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Training Strip */}
      <section className="scroll-section py-32 px-6 lg:px-8 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div>
              <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent">
                Credibility
              </h2>
              <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Certified Technical Grounding
              </h3>
              <p className="mt-4 text-sm text-foreground-muted leading-relaxed">
                Rather than prompting blindly, I’ve completed formal training across prompt engineering, machine learning, Python scripting, and visual design to deliver rock-solid, production-grade applications.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                See all certifications
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-zinc-800/80 bg-[#0d0d0e] p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent-glow px-2 py-0.5 rounded border border-accent/10">
                  DataCamp Certified
                </span>
                <ul className="mt-4 space-y-3">
                  {datacampCertifications.map((cert) => (
                    <li key={cert.name} className="text-xs font-medium text-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{cert.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-zinc-800/80 bg-[#0d0d0e] p-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent-glow px-2 py-0.5 rounded border border-accent/10">
                  Udemy Certified
                </span>
                <ul className="mt-4 space-y-3">
                  {udemyCertifications.map((cert) => (
                    <li key={cert.name} className="text-xs font-medium text-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{cert.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="scroll-section border-t border-zinc-900 bg-[#070708]/80 py-32 px-6 lg:px-8 relative overflow-hidden">
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-accent-glow blur-[100px] pointer-events-none"></div>

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Let's build something serious.
          </h2>
          <p className="mt-6 text-base text-foreground-muted leading-relaxed max-w-xl mx-auto">
            Ready to upgrade your web presence with agency-tier aesthetics at AI-accelerated speeds? Let’s map out your launch timeline.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-accent text-zinc-950 px-6 py-3.5 text-sm font-semibold tracking-wide hover:bg-accent/90 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,165,39,0.25)] transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
