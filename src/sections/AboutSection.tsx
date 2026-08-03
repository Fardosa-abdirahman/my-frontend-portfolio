import {
  ScrollReveal,
  ScrollStagger,
  SectionHeader,
  ThemedSection,
} from "../components/sections/SectionBlock";

const aboutBoxes = [
  {
    label: "Journey",
    color: "#FF6B00",
    text: "I started with HTML and CSS, then moved into JavaScript and React to build interactive, user-focused experiences.",
  },
  {
    label: "Stack",
    color: "#E34F26",
    text: "Along the way I learned TypeScript, Tailwind CSS, and foundational backend tools like Node.js, MySQL, and MongoDB.",
  },
  {
    label: "Education",
    color: "#1572B6",
    text: "Studied Software Engineering at Frastract Academy, gaining hands-on experience through real projects.",
  },
  {
    label: "Experience",
    color: "#339933",
    text: "Worked with Luulsolution—collaborating in a team, following requirements, and shipping practical solutions.",
  },
  {
    label: "Approach",
    color: "#F05032",
    text: "I believe consistency matters more than perfection. Every project is a chance to grow as a developer.",
  },
  {
    label: "Mindset",
    color: "#4479A1",
    text: "I keep practicing, shipping small projects, and improving my craft one iteration at a time.",
  },
];

export default function AboutSection() {
  return (
    <ThemedSection
      id="about"
      className="!min-h-0 justify-start py-16 md:py-20"
    >
      <SectionHeader
        sectionId="about"
        label="About"
        title="Building with curiosity and care"
        description="A bit about my path, tools, and how I like to work."
        align="split"
      />

      <ScrollStagger className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {aboutBoxes.map((box) => (
          <ScrollReveal key={box.label}>
            <article
              className="group flex h-full min-h-[220px] flex-col rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 sm:min-h-[240px] sm:p-7"
              style={{
                ["--box-color" as string]: box.color,
                borderColor: "var(--box-color)",
                backgroundColor:
                  "color-mix(in srgb, var(--box-color) 10%, white)",
              }}
            >
              <div
                className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border-2 transition-transform duration-300 group-hover:scale-105"
                style={{
                  borderColor: "var(--box-color)",
                  backgroundColor:
                    "color-mix(in srgb, var(--box-color) 18%, white)",
                  color: "var(--box-color)",
                }}
              >
                <span className="font-display text-sm font-bold">
                  {box.label.charAt(0)}
                </span>
              </div>

              <h3
                className="font-display text-lg font-bold text-ink transition-colors duration-300 group-hover:text-[var(--box-color)]"
              >
                {box.label}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65 sm:text-[15px]">
                {box.text}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </ScrollStagger>
    </ThemedSection>
  );
}
