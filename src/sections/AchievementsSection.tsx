import Button from "../components/ui/Button";
import {
  ScrollReveal,
  ScrollStagger,
  SectionHeader,
  ThemedSection,
} from "../components/sections/SectionBlock";

export default function AchievementsSection() {
  return (
    <ThemedSection id="achievements">
      <ScrollStagger className="mx-auto max-w-3xl">
        <SectionHeader
          sectionId="achievements"
          label="Contact"
          title="Let's build something"
          align="center"
          description="Open to internships, junior roles, and collaborations."
        />
        <ScrollReveal>
          <div className="glass-card mt-10 rounded-[28px] p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-white">
              Mission
            </h3>
            <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
              My mission is to grow into a confident full-stack developer who builds
              accessible, reliable, and thoughtfully designed applications. I aim to
              keep learning, ship meaningful work, and contribute to teams that
              value craft and collaboration.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/cv.pdf" external variant="primary">
              View CV
            </Button>
            <Button
              href="https://github.com/Fardosa-abdirahman"
              external
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:border-accent hover:bg-accent hover:text-white"
            >
              GitHub
            </Button>
          </div>
        </ScrollReveal>
      </ScrollStagger>
    </ThemedSection>
  );
}
