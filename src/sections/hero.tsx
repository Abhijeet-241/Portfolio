"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { site } from "@/constants/site";
import { buttonVariants } from "@/components/ui/button";
import { Tilt } from "@/components/tilt";
import { Counter } from "@/components/counter";
import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

const facts = [
  { label: "Now", value: "SDE Intern · Paytm Money" },
  { label: "Focus", value: "Mobile · Fintech · Applied AI" },
  { label: "Based", value: "Ghaziabad, IN" },
];

const metrics = [
  { to: 5, suffix: "+", label: "Trading flows instrumented" },
  { to: 92.7, suffix: "%", decimals: 1, label: "Latency cut on AgentOS" },
  { to: 24, suffix: "", label: "Verified agent tasks" },
  { to: 8.32, decimals: 2, label: "B.Tech CGPA" },
];

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
  };
  const item: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      };

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="aurora pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]" />
      <div aria-hidden className="grid-fade pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px]" />

      <div className="container relative pb-16 pt-20 sm:pb-20 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* Text column */}
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
            <motion.p
              variants={item}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.16em] text-muted backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open to software engineering roles
            </motion.p>

            <motion.h1
              variants={item}
              className="text-balance text-4xl font-medium leading-[1.06] tracking-tighter2 sm:text-5xl md:text-[3.5rem]"
            >
              I build reliable financial products and AI systems that{" "}
              <span className="text-gradient">show their work</span>.
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Currently at Paytm Money — instrumenting trading flows, fixing production defects in a
              live app, and building AI agents that verify themselves.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="#work" className={cn(buttonVariants({ variant: "primary" }))}>
                View work
                <ArrowDown className="h-4 w-4" />
              </Link>
              <a
                href={site.links.resume}
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                Résumé
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="ml-1 flex items-center gap-1">
                <IconLink href={site.links.github} label="GitHub">
                  <Github className="h-[18px] w-[18px]" />
                </IconLink>
                <IconLink href={site.links.linkedin} label="LinkedIn">
                  <Linkedin className="h-[18px] w-[18px]" />
                </IconLink>
                <IconLink href={`mailto:${site.email}`} label="Email">
                  <Mail className="h-[18px] w-[18px]" />
                </IconLink>
              </div>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-12 grid max-w-xl grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3"
            >
              {facts.map((f) => (
                <div key={f.label} className="bg-background px-4 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-subtle">{f.label}</dt>
                  <dd className="mt-1.5 text-sm text-foreground">{f.value}</dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          {/* Portrait column */}
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
          >
            <Tilt className="group relative">
              {/* glowing conic ring frame */}
              <div
                aria-hidden
                className="ring-conic absolute -inset-[2px] rounded-[26px] opacity-70 blur-[2px] transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card">
                <Image
                  src="/abhijeet.jpg"
                  alt="Abhijeet Pal, software engineer"
                  width={1024}
                  height={1536}
                  priority
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 340px, 420px"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent"
                />
              </div>

              {/* floating badge — current role */}
              <div
                style={{ transform: "translateZ(60px)" }}
                className="animate-float absolute -left-4 bottom-8 flex items-center gap-2.5 rounded-2xl border border-border bg-background/85 px-3.5 py-2.5 shadow-lg shadow-black/5 backdrop-blur-md sm:-left-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-subtle">Now</p>
                  <p className="text-xs font-medium text-foreground">@ Paytm Money</p>
                </div>
              </div>

              {/* floating badge — discipline */}
              <div
                style={{ transform: "translateZ(80px)" }}
                className="absolute -right-3 top-8 flex items-center gap-2 rounded-2xl border border-border bg-background/85 px-3 py-2 shadow-lg shadow-black/5 backdrop-blur-md sm:-right-5"
              >
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <p className="text-xs font-medium text-foreground">Flutter · Applied AI</p>
              </div>
            </Tilt>
          </motion.div>
        </div>

        {/* metrics strip */}
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-20 lg:grid-cols-4"
        >
          {metrics.map((m) => (
            <div key={m.label} className="bg-background px-5 py-6">
              <p className="text-3xl font-medium tracking-tighter2 text-foreground sm:text-4xl">
                <Counter to={m.to} suffix={m.suffix} decimals={m.decimals ?? 0} />
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {children}
    </a>
  );
}
