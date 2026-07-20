import Button from "../components/ui/Button";
import { Section } from "../components/ui/PageMotion";
import { sectionThemes } from "../lib/sectionThemes";
import { ScrollReveal, ScrollStagger } from "../components/sections/SectionBlock";

export default function HeroSection() {
  const theme = sectionThemes.home;

  return (
    <Section id="home" theme="home" className="!py-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 [background: radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full blur-3xl ${theme.blobPrimary}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-20 bottom-32 h-64 w-64 rounded-full blur-3xl ${theme.blobSecondary}`}
      />

      <div className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center">
        <ScrollStagger>
          <ScrollReveal>
            <div className="mb-6 flex flex-wrap gap-2">
              {/* {["React", "TypeScript", "Tailwind"].map((tag) => ( */}
                {/* <span
                  key={tag}
                  className="rounded-full border border-ocean-500/20 bg-white/70 px-3 py-1 text-xs font-medium text-ocean-700 shadow-sm"
                >
                  {tag}
                </span> */}
              {/* ))} */}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className={`text-sm font-semibold uppercase tracking-[0.2em] ${theme.label}`}>
              Portfolio
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h1
              className={`${theme.heading} mt-4 max-w-4xl font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl`}
            >
              Hi, I&apos;m Fardosa
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className={`mt-5 max-w-xl text-lg sm:text-xl ${theme.subheading}`}>
              Aspiring Full-Stack Developer crafting clean, responsive web
              experiences.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="#projects"
                variant="primary"
                accentGradient={`${theme.buttonPrimary} shadow-ocean-700/20`}
              >
                View Projects
              </Button>
              <Button
                href="#skills"
                variant="outline"
                className={theme.buttonOutline}
              >
                View Skills
              </Button>
            </div>
          </ScrollReveal>
        </ScrollStagger>

        <ScrollReveal className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("profile")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to profile section"
            className="group flex flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-violet-400"
          >
            Scroll
            <span className="brand-gradient-line block h-10 w-1 rounded-full transition-transform duration-300 group-hover:scale-y-110" />
          </button>
        </ScrollReveal>
      </div>
    </Section>
  );
}
