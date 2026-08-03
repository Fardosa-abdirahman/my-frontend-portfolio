import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { SectionId } from "../../data/navigation";
import { sectionThemes } from "../../lib/sectionThemes";
import {
  defaultTransition,
  fadeUp,
  scrollRevealViewport,
  staggerContainer,
} from "../../lib/motion";

type MotionProps = {
  children: ReactNode;
  className?: string;
  id?: SectionId;
};

export function Section({
  children,
  className = "",
  id,
  theme,
}: MotionProps & { theme?: SectionId }) {
  const themeClass = theme ? sectionThemes[theme].sectionBg : "";

  return (
    <section
      id={id}
      className={`scroll-section relative flex min-h-screen scroll-mt-24 flex-col justify-center overflow-hidden px-6 py-24 md:py-28 ${themeClass} ${className}`}
    >
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function ScrollStagger({ children, className }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollReveal({ children, className }: MotionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      variants={fadeUp}
      transition={defaultTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
