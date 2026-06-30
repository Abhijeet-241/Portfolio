import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { experience } from "@/constants/data";

export function Experience() {
  return (
    <section id="work" className="scroll-mt-20 border-t border-border">
      <div className="container py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Experience</SectionLabel>
        </Reveal>

        <div className="mt-4">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <article className="grid gap-x-10 gap-y-6 border-t border-border py-10 md:grid-cols-[230px_1fr]">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold tracking-tightish">{job.company}</h3>
                    {job.current && (
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-accent" aria-label="Current role" />
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-muted">{job.role}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-subtle">{job.period}</p>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{job.location}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {job.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <Field label="The problem">{job.problem}</Field>
                  <Field label="What I owned">{job.responsibility}</Field>
                  <Field label="What I did">{job.solution}</Field>
                  <div>
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">Outcome</p>
                    <ul className="space-y-1.5">
                      {job.outcomes.map((o) => (
                        <li key={o} className="flex gap-2.5 text-sm leading-relaxed text-foreground/90">
                          <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{label}</p>
      <p className="max-w-2xl text-[15px] leading-relaxed text-foreground/90">{children}</p>
    </div>
  );
}
