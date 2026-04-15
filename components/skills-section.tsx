import { skillGroups } from "@/lib/data";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Tag } from "@/components/ui/tag";

export function SkillsSection() {
  return (
    <section id="skills" className="section-space">
      <SectionReveal className="container-shell">
        <p className="font-mono text-sm uppercase tracking-[0.32em] text-accent">Skills</p>
        <h2 className="section-title mt-4">A toolkit grounded in modern web engineering and solid fundamentals.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card rounded-[2rem] p-6">
              <h3 className="font-display text-2xl tracking-[-0.05em] text-text">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <Tag
                    key={item}
                    className="bg-bg/35 font-mono text-xs uppercase tracking-[0.14em] text-text"
                  >
                    {item}
                  </Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
