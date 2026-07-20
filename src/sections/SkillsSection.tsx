import SkillCard from "../components/ui/SkillCard";
import {
  ScrollReveal,
  ScrollStagger,
  SectionHeader,
  ThemedSection,
} from "../components/sections/SectionBlock";
import { certificates } from "../data/certificates";

export default function SkillsSection() {
  return (
    <ThemedSection id="skills">
      <SectionHeader
        sectionId="skills"
        label="Expertise"
        title="Skills & Certifications"
        description="Technologies I use to design and build modern web applications."
      />

      <ScrollStagger className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate, index) => (
          <ScrollReveal key={certificate.skill}>
            <SkillCard certificate={certificate} index={index} />
          </ScrollReveal>
        ))}
      </ScrollStagger>
    </ThemedSection>
  );
}
