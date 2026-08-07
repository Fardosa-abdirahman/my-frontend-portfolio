import SkillCard from "../components/ui/SkillCard";
import {
  ScrollReveal,
  ScrollStagger,
  SectionHeader,
  ThemedSection,
} from "../components/sections/SectionBlock";
import { skillCategories } from "../data/skills";

export default function SkillsSection() {
  return (
    <ThemedSection
      id="skills"
      className="!min-h-0 justify-start py-16 md:py-20"
    >
      <SectionHeader
        sectionId="skills"
        label="Skills"
        title="What I work with"
        description="A collection of the technologies I use to design and build modern, reliable web applications — grouped by the layer they power."
        align="split"
      />

      <div className="mt-12 flex flex-col gap-12 md:mt-16 md:gap-16">
        {skillCategories.map((group) => (
          <div key={group.category}>
            <ScrollReveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-lg">
                  {group.icon}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    {group.category}
                  </h3>
                  <p className="text-sm text-muted-light">{group.description}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollStagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {group.skills.map((skill) => (
                <ScrollReveal key={skill.name} className="h-full">
                  <SkillCard skill={skill} />
                </ScrollReveal>
              ))}
            </ScrollStagger>
          </div>
        ))}
      </div>
    </ThemedSection>
  );
}
