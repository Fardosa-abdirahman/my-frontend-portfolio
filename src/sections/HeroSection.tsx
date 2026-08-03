import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { defaultTransition, easeOut } from "../lib/motion";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="#ff6b00"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55 + i * 0.08, duration: 0.35, ease: easeOut }}
          aria-hidden
        >
          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
        </motion.svg>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-section section-light relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl flex-col items-center px-6">
        {/* Headline */}
        <motion.div
          className="relative z-20 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={defaultTransition}
        >
          {/* Hello */}
          <motion.span
            className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent md:mb-5 md:text-xs"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.45, ease: easeOut }}
          >
            Hello
          </motion.span>

          <h1 className="flex flex-col items-center gap-2 sm:gap-3">
            <motion.span
              className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.55, ease: easeOut }}
            >
              I&apos;m <span className="text-accent">Fardosa</span>
            </motion.span>

            <motion.span
              className="font-display text-xl font-semibold tracking-wide text-ink/55 sm:text-2xl md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.55, ease: easeOut }}
            >
              Full-Stack Developer
            </motion.span>
          </h1>
        </motion.div>

        {/* Portrait composition */}
        <div className="relative mt-6 flex w-full flex-1 flex-col items-center justify-end md:mt-4">
          {/* Orange circle behind portrait */}
          <motion.div
            aria-hidden
            className="hero-orange-orb absolute bottom-0 left-1/2 h-[min(72vw,420px)] w-[min(72vw,420px)] -translate-x-1/2 rounded-full md:h-[480px] md:w-[480px]"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.7, ease: easeOut }}
          />

          {/* Left supporting copy */}
          <motion.p
            className="absolute left-0 top-[18%] z-20 hidden max-w-[200px] text-sm leading-relaxed text-muted lg:block"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.55, ease: easeOut }}
          >
            Building clean, responsive web experiences with React, TypeScript,
            and a focus on craft.
          </motion.p>

          {/* Right stats */}
          <motion.div
            className="absolute right-0 top-[18%] z-20 hidden text-right lg:block"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.55, ease: easeOut }}
          >
            <Stars />
            <p className="mt-2 font-display text-lg font-bold text-ink">
              Always Learning
            </p>
            <p className="text-sm text-muted">Open to opportunities</p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            className="relative z-10 animate-float-soft"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: easeOut }}
          >
            <img
              src="/images/my image.jpg"
              alt="Fardosa"
              className="relative z-10 h-[340px] w-auto object-cover object-top sm:h-[400px] md:h-[460px]"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 78%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 78%, transparent 100%)",
              }}
            />
          </motion.div>

          {/* CTAs overlaid near bottom of portrait */}
          <motion.div
            className="absolute bottom-6 z-20 flex flex-wrap items-center justify-center gap-5 md:bottom-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5, ease: easeOut }}
          >
            <Button href="#projects" variant="primary" className="group gap-2">
              Portfolio
              <ArrowIcon />
            </Button>
            <a
              href="#achievements"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("achievements")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-semibold text-ink underline decoration-accent/40 underline-offset-4 transition hover:text-accent hover:decoration-accent"
            >
              Hire me
            </a>
          </motion.div>
        </div>

        {/* Mobile supporting text */}
        <div className="mt-8 flex w-full flex-col gap-4 text-center lg:hidden">
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted">
            Building clean, responsive web experiences with React, TypeScript,
            and a focus on craft.
          </p>
          <div className="flex flex-col items-center">
            <Stars />
            <p className="mt-2 font-display text-base font-bold text-ink">
              Always Learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
