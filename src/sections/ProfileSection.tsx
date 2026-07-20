import Button from "../components/ui/Button";
import Gallery from "../components/ui/Gallery";
import {
  ScrollReveal,
  ScrollStagger,
  ThemedSection,
} from "../components/sections/SectionBlock";
import { galleryImages } from "../data/gallery";
import { sectionThemes } from "../lib/sectionThemes";

export default function ProfileSection() {
  const theme = sectionThemes.profile;

  return (
    <ThemedSection id="profile">
      <div className="grid items-center gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
        <ScrollReveal className="mx-auto lg:mx-0">
          <div className="group surface-card relative overflow-hidden rounded-2xl ring-2 ring-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-violet-500/35">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=480&q=80"
              alt="Fardosa"
              className="h-72 w-72 object-cover transition-transform duration-500 group-hover:scale-105 lg:h-80 lg:w-full"
            />
          </div>
        </ScrollReveal>

        <ScrollStagger className="text-center lg:text-left">
          <ScrollReveal>
            <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${theme.label}`}>
              Profile
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <h2
              className={`${theme.heading} mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl`}
            >
              Fardosa
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className={`mt-2 text-base font-medium ${theme.subheading}`}>
              Aspiring Full-Stack Developer
            </p>
          </ScrollReveal>
          <ScrollReveal>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              I build clean, responsive web applications with React, TypeScript,
              and Tailwind CSS. I enjoy turning ideas into polished interfaces
              and continuously growing my skills across frontend and backend
              technologies.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button
                href="#projects"
                variant="primary"
                accentGradient={theme.buttonPrimary}
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
              <Button href="/cv.pdf" external variant="outline">
                Download CV
              </Button>
            </div>
          </ScrollReveal>
        </ScrollStagger>
      </div>

      <ScrollStagger className="mt-16 lg:mt-20">
        <ScrollReveal>
          <h3 className="font-display text-2xl font-semibold text-mist-50 md:text-3xl">
            Photo Gallery
          </h3>
        </ScrollReveal>
        <ScrollReveal>
          <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
            Moments from learning, building, and exploring technology.
          </p>
        </ScrollReveal>
        <ScrollReveal className="mt-8">
          <Gallery images={galleryImages} />
        </ScrollReveal>
      </ScrollStagger>
    </ThemedSection>
  );
}
