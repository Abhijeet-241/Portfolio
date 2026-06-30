import { Activity, BadgeCheck, Eye } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

const principles = [
  {
    k: "Observable",
    v: "Instrument what matters, so a system can show its own state.",
    Icon: Activity,
  },
  {
    k: "Provable",
    v: "An answer or a release should carry the evidence that it works.",
    Icon: BadgeCheck,
  },
  {
    k: "Considered",
    v: "The empty state, the screen-reader path, the offline case.",
    Icon: Eye,
  },
];

export function About() {
  return (
    <section className="border-t border-border">
      <div className="container py-20 sm:py-28">
        <Reveal>
          <SectionLabel>How I work</SectionLabel>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <div className="max-w-prose space-y-5 text-lg leading-relaxed text-foreground/90">
              <p className="text-2xl leading-snug tracking-tightish text-foreground">
                I build software for places where being wrong is expensive.
              </p>
              <p>
                Trading screens where a mislabeled exchange erodes trust. AI systems where an
                unverified answer is worse than no answer at all.
              </p>
              <p>
                At Paytm Money that means instrumenting the events that let teams see real user
                journeys, and chasing production defects to their root cause instead of patching
                symptoms. In my own work it means building agents that carry their own evidence —
                retrieval that cites its sources, and a verifier that has to sign off before a
                result counts.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-3">
              {principles.map(({ k, v, Icon }) => (
                <li
                  key={k}
                  className="group flex gap-4 rounded-xl border border-border bg-card/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:bg-card"
                >
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-accent transition-colors group-hover:border-accent/40">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{k}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{v}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
