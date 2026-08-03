import type { ReactNode } from "react";
import type { SectionId } from "../../data/navigation";
import { sectionThemes } from "../../lib/sectionThemes";
import {
  ScrollReveal,
  ScrollStagger,
  Section,
} from "../ui/PageMotion";

type SectionBlockProps = {
  id: SectionId;
  children: ReactNode;
  className?: string;
};

export function ThemedSection({ id, children, className = "" }: SectionBlockProps) {
  return (
    <Section id={id} theme={id} className={className}>
      {children}
    </Section>
  );
}

type SectionHeaderProps = {
  sectionId: SectionId;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "split";
};

export function SectionHeader({
  sectionId,
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const theme = sectionThemes[sectionId];

  if (align === "split" && description) {
    return (
      <ScrollStagger className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <ScrollReveal>
          <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${theme.label}`}>
            {label}
          </p>
          <h2
            className={`${theme.heading} mt-3 font-display text-4xl font-bold md:text-5xl`}
          >
            {title}
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className={`max-w-md text-base md:text-right md:text-lg ${theme.subheading}`}>
            {description}
          </p>
        </ScrollReveal>
      </ScrollStagger>
    );
  }

  const alignClass = align === "center" ? "mx-auto text-center" : "max-w-2xl";

  return (
    <ScrollStagger className={alignClass}>
      <ScrollReveal>
        <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${theme.label}`}>
          {label}
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <h2
          className={`${theme.heading} mt-3 font-display text-4xl font-bold md:text-5xl`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal>
          <p className={`mt-4 text-base md:text-lg ${theme.subheading}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </ScrollStagger>
  );
}

export { ScrollReveal, ScrollStagger };
