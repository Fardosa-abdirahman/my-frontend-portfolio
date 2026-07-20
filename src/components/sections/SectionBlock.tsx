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
  const theme = sectionThemes[id];

  return (
    <Section id={id} theme={id} className={className}>
      <div
        aria-hidden
        className={`pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full blur-3xl ${theme.blobPrimary}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute -right-16 bottom-16 h-56 w-56 rounded-full blur-3xl ${theme.blobSecondary}`}
      />
      <div className="relative">{children}</div>
    </Section>
  );
}

type SectionHeaderProps = {
  sectionId: SectionId;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  sectionId,
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const theme = sectionThemes[sectionId];
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
          className={`${theme.heading} mt-3 font-display text-4xl font-semibold md:text-5xl`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal>
          <p className="mt-4 text-base text-slate-400 md:text-lg">{description}</p>
        </ScrollReveal>
      )}
    </ScrollStagger>
  );
}

export { ScrollReveal, ScrollStagger };
