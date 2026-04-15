"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Tag } from "@/components/ui/tag";

export function ProjectsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="projects" className="section-space">
      <SectionReveal className="container-shell">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.32em] text-accent">Projects</p>
          <h2 className="section-title mt-4">Selected work built for practical engineering outcomes.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            These projects reflect the kind of problems I enjoy most: real-time visibility,
            developer efficiency, and clean full-stack workflows.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : index * 0.08,
                ease: [0.21, 1, 0.35, 1]
              }}
              whileHover={reducedMotion ? {} : { y: -8 }}
              className="group surface-card relative overflow-hidden rounded-[2rem] border border-border/70"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  priority={index === 0}
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl tracking-[-0.05em] text-text">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-muted">{project.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} source code on GitHub`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-bg/30 text-text hover:border-accent/80 hover:text-accent"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open live demo for ${project.title}`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-bg/30 text-text hover:border-accent/80 hover:text-accent"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Tag
                      key={item}
                      className="border-accent/20 bg-accent/10 font-mono text-xs uppercase tracking-[0.16em] text-text"
                    >
                      {item}
                    </Tag>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-transparent transition duration-300 group-hover:ring-accent/50 group-hover:shadow-amber" />
            </motion.article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
