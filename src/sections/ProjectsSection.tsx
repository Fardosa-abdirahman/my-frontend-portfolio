import ProjectCard from "../components/ui/ProjectCard";
import {
  ScrollReveal,
  ScrollStagger,
  SectionHeader,
  ThemedSection,
} from "../components/sections/SectionBlock";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <ThemedSection id="projects">
      <SectionHeader
        sectionId="projects"
        label="Work"
        title="Projects"
        description="A selection of practical applications built with modern frontend tools."
      />

      <ScrollStagger className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id}>
            <ProjectCard project={project} index={index} />
          </ScrollReveal>
        ))}
      </ScrollStagger>
    </ThemedSection>
  );
}
