import SkillCard from "../components/ui/SkillCard";
import {
  ScrollReveal,
  ScrollStagger,
  SectionHeader,
  ThemedSection,
} from "../components/sections/SectionBlock";
import { skills } from "../data/skills";

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
        description="Technologies I use to design and build modern, reliable web applications."
        align="split"
      />

      <ScrollStagger className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill) => (
          <ScrollReveal key={skill.name}>
            <SkillCard skill={skill} />
          </ScrollReveal>
        ))}
      </ScrollStagger>
    </ThemedSection>
  );
}
