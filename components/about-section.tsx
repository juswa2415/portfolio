import { aboutParagraphs, skillGroups } from "@/lib/data";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Tag } from "@/components/ui/tag";

export function AboutSection() {
  return (
    <section id="about" className="section-space">
      <SectionReveal className="container-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.32em] text-accent">About</p>
          <h2 className="section-title mt-4">Engineering with product sense and systems discipline.</h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-muted">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="surface-card rounded-[2rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">Currently building</p>
            <p className="mt-4 font-display text-2xl tracking-[-0.05em] text-text">
              A production-ready, scalable web-based Property Management System for small landlords.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              Building comprehensive tenant management, maintenance tracking, and financial reporting
              tools to streamline property operations and improve landlord-tenant communication.
            </p>
          </div>
          <div className="surface-card rounded-[2rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted">Core toolkit</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {skillGroups.flatMap((group) => group.items.slice(0, 3)).map((skill) => (
                <Tag key={skill} className="bg-bg/35 text-text">
                  {skill}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
