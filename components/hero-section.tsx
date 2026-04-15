"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { heroRoles, profileSnapshot } from "@/lib/data";
import { TypewriterText } from "@/components/ui/typewriter-text";

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
      aria-label="Hero"
    >
      <div className="container-shell relative z-10 grid gap-14 pb-16 pt-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:pb-24">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.21, 1, 0.35, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm text-text">
            <span className="inline-flex h-2.5 w-2.5 animate-pulse-dot rounded-full bg-success" />
            Open to Summer 2026 Internships
          </div>
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.32em] text-accent">
            Computer Engineering Portfolio
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-text sm:text-6xl lg:text-8xl">
            Joshua
            <br />
            Periabras
          </h1>
          <div className="mt-6 text-2xl font-medium text-muted sm:text-3xl">
            <span className="text-text">I build as a </span>
            <span className="text-accent">
              <TypewriterText words={heroRoles} />
            </span>
          </div>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Computer Engineering student crafting reliable full-stack products, developer tools,
            and systems-minded interfaces.
            <br className="hidden sm:block" /> Focused on internship-ready engineering with clean
            execution and practical impact.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-slate-950 shadow-amber"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-surface/70 px-6 py-3.5 text-base font-semibold text-text"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 32 }}
          animate={reducedMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.21, 1, 0.35, 1] }}
          className="surface-card relative rounded-[2rem] p-6"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,rgba(245,166,35,0.18),transparent_40%)]" />
          <div className="relative">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                Snapshot
              </span>
              <span className="rounded-full border border-border/70 px-3 py-1 font-mono text-xs text-accent">
                2026
              </span>
            </div>
            <div className="space-y-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                  Focus Areas
                </p>
                <p className="mt-2 text-lg text-text">
                  Full-stack products, finance tooling, and operations-focused interfaces
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">
                  Current Goal
                </p>
                <p className="mt-2 text-lg text-text">
                  Tightening product polish, project accuracy, and internship-ready engineering
                  depth.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Metric label="Projects Shipped" value={`0${profileSnapshot.projectCount}`} />
                <Metric label="Internship Focus" value={profileSnapshot.internshipFocus} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-bg/35 p-4">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">{label}</p>
      <p className="mt-2 font-display text-3xl tracking-[-0.05em] text-text">{value}</p>
    </div>
  );
}
