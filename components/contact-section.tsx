"use client";

import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { contactLinks } from "@/lib/data";
import { SectionReveal } from "@/components/ui/section-reveal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(contactLinks.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="section-space pb-24">
      <SectionReveal className="container-shell">
        <div className="surface-card rounded-[2.25rem] p-8 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="font-mono text-sm uppercase tracking-[0.32em] text-accent">Contact</p>
              <h2 className="section-title mt-4">Let’s build something useful and well-executed.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
                I am open to software engineering internships and entry-level opportunities where I
                can contribute with care, learn quickly, and ship dependable work.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-border/70 bg-bg/35 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">Reach out</p>
              <div className="mt-5 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${contactLinks.email}`}
                    className="inline-flex items-center gap-2 text-base font-medium text-text"
                  >
                    <Mail className="h-4 w-4 text-accent" />
                    {contactLinks.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border/70 bg-surface/70 text-text hover:border-accent/70 hover:text-accent"
                    title={copied ? "Copied!" : "Copy email"}
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={contactLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2.5 text-sm font-medium text-text hover:border-accent/70 hover:text-accent"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={contactLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2.5 text-sm font-medium text-text hover:border-accent/70 hover:text-accent"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
