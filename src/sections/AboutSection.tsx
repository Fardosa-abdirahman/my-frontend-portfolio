import {
  ScrollReveal,
  ScrollStagger,
  SectionHeader,
  ThemedSection,
} from "../components/sections/SectionBlock";

export default function AboutSection() {
  return (
    <ThemedSection id="about">
      <SectionHeader
        sectionId="about"
        label="About"
        title="Building with curiosity and care"
      />
    <ScrollStagger className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-slate-300 md:text-lg">
        <ScrollReveal>
          <p>
            I started my frontend journey with HTML and CSS, then moved into
            JavaScript and React to build interactive, user-focused experiences.
            Along the way I learned TypeScript, Tailwind CSS, and foundational
            backend tools like Node.js, MySQL, and MongoDB.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            I studied Software Engineering at Frastract Academy, where I gained
            hands-on experience through real projects. I also worked with
            Luulsolution, learning how to collaborate in a team, follow
            requirements, and ship practical solutions.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <p>
            I believe consistency matters more than perfection. I keep practicing,
            shipping small projects, and improving my craft one iteration at a
            time.
          </p>
        </ScrollReveal>
      </ScrollStagger>
    </ThemedSection>
  );
}
