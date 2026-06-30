import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";
import { site } from "@/constants/site";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="container py-20 sm:py-28">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
        </Reveal>

        <Reveal>
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-card/40 p-8 sm:p-12">
            <div aria-hidden className="aurora pointer-events-none absolute inset-0 -z-10 opacity-70" />

            <h2 className="max-w-2xl text-balance text-3xl font-medium leading-tight tracking-tighter2 sm:text-4xl">
              Open to software engineering roles and hard problems in fintech and applied AI.
            </h2>

            <a
              href={`mailto:${site.email}`}
              className="group mt-8 inline-flex items-center gap-2 text-xl text-foreground transition-colors hover:text-accent sm:text-2xl"
            >
              {site.email}
              <ArrowUpRight className="h-5 w-5 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-sm">
              <ContactLink href={site.links.github}>GitHub</ContactLink>
              <ContactLink href={site.links.linkedin}>LinkedIn</ContactLink>
              <ContactLink href={site.links.resume}>Résumé</ContactLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-foreground"
    >
      {children}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </Link>
  );
}
