import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { skillGroups, credentials } from "@/constants/data";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border">
      <div className="container py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Toolkit</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Reveal key={group.label}>
              <div className="group h-full rounded-xl border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/15 hover:bg-card">
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{group.label}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-md border border-border bg-background px-2.5 py-1 text-[13px] text-foreground/85 transition-colors hover:border-accent/50 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 border-t border-border pt-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">Background</h3>
            <dl className="mt-4 grid gap-x-10 gap-y-4 sm:grid-cols-3">
              {credentials.map((c) => (
                <div key={c.label}>
                  <dt className="text-sm font-medium text-foreground">{c.label}</dt>
                  <dd className="mt-0.5 text-sm leading-relaxed text-muted">{c.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
