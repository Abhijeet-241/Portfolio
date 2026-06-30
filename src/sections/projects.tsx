"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { projects } from "@/constants/data";
import type { Project } from "@/types";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border">
      <div className="container py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Selected work</SectionLabel>
        </Reveal>
        <div className="mt-10 space-y-6">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  function onMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <article
      onMouseMove={onMove}
      className="spotlight-card group rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-xl hover:shadow-black/5 sm:p-9"
    >
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">
            {project.kind} · {project.year}
          </p>
          <h3 className="mt-2 text-2xl font-medium tracking-tightish transition-colors group-hover:text-accent sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">{project.tagline}</p>
        </div>
        <div className="flex items-center gap-2">
          {project.links.github && (
            <RepoLink href={project.links.github} label={`${project.name} on GitHub`}>
              <Github className="h-4 w-4" />
              Code
            </RepoLink>
          )}
          {project.links.live && (
            <RepoLink href={project.links.live} label={`${project.name} live demo`}>
              Live
              <ArrowUpRight className="h-4 w-4" />
            </RepoLink>
          )}
        </div>
      </div>

      <div className="mt-9 grid gap-x-10 gap-y-8 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-7">
          <Field label="The problem">{project.problem}</Field>
          <Field label="Approach">{project.approach}</Field>
          <div>
            <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">
              Decisions &amp; trade-offs
            </p>
            <ul className="space-y-2">
              {project.decisions.map((d) => (
                <li key={d} className="flex gap-2.5 text-[15px] leading-relaxed text-foreground/90">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:border-l md:border-border md:pl-8">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Highlights</p>
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-1">
            {project.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-lg border border-border bg-background/50 px-3 py-2.5 transition-colors group-hover:border-border md:border-0 md:bg-transparent md:px-0 md:py-0"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{h.label}</dt>
                <dd className="mt-0.5 text-sm text-foreground">{h.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mb-2.5 mt-7 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Stack</p>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted transition-colors hover:border-accent/50 hover:text-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function RepoLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {children}
    </a>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{label}</p>
      <p className="text-[15px] leading-relaxed text-foreground/90">{children}</p>
    </div>
  );
}
