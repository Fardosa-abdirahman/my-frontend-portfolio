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
    <ThemedSection id="skills">
      <SectionHeader
        sectionId="skills"
        label="Skills"
        title="What I work with"
        description="Technologies I use to design and build modern, reliable web applications."
        align="split"
      />

      <ScrollStagger className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <ScrollReveal key={skill.name}>
            <SkillCard skill={skill} index={index} />
          </ScrollReveal>
        ))}
      </ScrollStagger>
    </ThemedSection>
  );
}
