import Button from "../components/ui/Button";
import {
  ScrollReveal,
  ScrollStagger,
  SectionHeader,
  ThemedSection,
} from "../components/sections/SectionBlock";
import { sectionThemes } from "../lib/sectionThemes";

export default function AchievementsSection() {
  const theme = sectionThemes.achievements;

  return (
    <ThemedSection id="achievements">
      <ScrollStagger className="mx-auto max-w-3xl">
        <SectionHeader
          sectionId="achievements"
          label="Milestones"
          title="Achievements"
          align="center"
        />
        <ScrollReveal>
          <div className="surface-card mt-10 rounded-2xl border-l-4 border-l-rose-500 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="font-display text-2xl font-semibold text-mist-50">
              Mission
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              My mission is to grow into a confident full-stack developer who builds
              accessible, reliable, and thoughtfully designed applications. I aim to
              keep learning, ship meaningful work, and contribute to teams that
              value craft and collaboration.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              href="/cv.pdf"
              external
              variant="primary"
              accentGradient={theme.buttonPrimary}
            >
              View CV
            </Button>
            <Button
              href="https://github.com/"
              external
              variant="outline"
              className={theme.buttonOutline}
            >
              GitHub
            </Button>
          </div>
        </ScrollReveal>
      </ScrollStagger>
    </ThemedSection>
  );
}
