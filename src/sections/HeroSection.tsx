import { motion } from "framer-motion";
import Button from "../components/ui/Button";
import { easeOut } from "../lib/motion";

const LINKEDIN_URL = "https://ke.linkedin.com/in/fardosa-abdirahman-39b539376";
const GITHUB_URL = "https://github.com/Fardosa-abdirahman";

type SocialCardProps = {
  href: string;
  label: string;
  handle: string;
  badgeClass: string;
  iconBgClass: string;
  cta: string;
  icon?: React.ReactNode;
  avatar?: string;
  delay: number;
};

function SocialCard({
  href,
  label,
  handle,
  badgeClass,
  iconBgClass,
  icon,
  avatar,
  cta,
  delay,
}: SocialCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`glass-card-light flex aspect-square w-[150px] shrink-0 flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition duration-300 ease-out hover:scale-105 hover:border-accent/40 sm:w-[180px] ${badgeClass}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: easeOut }}
    >
{avatar ? (
        <span className="relative">
          <img
            src={avatar}
            alt={label}
            referrerPolicy="no-referrer"
            className={`h-14 w-14 rounded-full border-2 border-white object-cover shadow-md ${iconBgClass}`}
          />
          {icon ? (
            <span
              className={`absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-white shadow ring-2 ring-white ${iconBgClass}`}
            >
              {icon}
            </span>
          ) : null}
        </span>
      ) : (
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white ${iconBgClass}`}
        >
          {icon}
        </span>
      )}
      <div className="min-w-0 leading-tight">
        <p className="truncate text-sm font-bold text-ink">{label}</p>
        <p className="truncate text-xs text-muted">{handle}</p>
        <p className="text-[11px] font-semibold text-[#0A66C2]">{cta}</p>
      </div>
    </motion.a>
  );
}

function SocialCards() {
  return (
    <motion.div
      className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: easeOut }}
    >
      <SocialCard
        href={LINKEDIN_URL}
        label="Fardosa Abdirahman"
        handle="full-stack developer"
        iconBgClass="bg-[#0A66C2]"
        badgeClass="hover:border-[#0A66C2]/50"
        cta="View Profile"
        delay={0.6}
        icon={
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
          </svg>
        }
      />
<SocialCard
        href={GITHUB_URL}
        label="Fardosa"
        handle="@Fardosa-abdirahman"
        iconBgClass="bg-ink"
        badgeClass="hover:border-ink/50"
        cta="View Repos"
        delay={0.7}
        avatar="https://github.com/Fardosa-abdirahman.png"
        icon={
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden>
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
          </svg>
        }
      />
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="scroll-section section-dark relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
    >
      {/* Ambient glowing orbs */}
      <div
        aria-hidden
        className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-accent opacity-15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-[12%] right-[6%] h-72 w-72 rounded-full bg-accent opacity-10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-6 md:grid-cols-2 lg:gap-20">
        {/* ===================== Text column ===================== */}
        <motion.div
          className="flex flex-col items-center text-center md:items-start md:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          {/* Intro eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Hi, I&apos;m Fardosa
          </p>

          {/* Subtitle */}
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Full-Stack Developer focused on performance, clean UI, and user
            experience
          </p>
          {/* Headline */}
          <span className="mt-4 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            I build with{" "}
            <span className="text-accent">React &amp; TypeScript</span>
          </span>
          {/* Buttons */}
          <div className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button
              href="#projects"
              variant="primary"
              className="w-full justify-center gap-2 transition duration-300 hover:scale-105 sm:w-auto"
            >
              🚀 View My Work
            </Button>
            <a
              href="/cv.pdf"
              download="Fardosa_Resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition duration-300 ease-out hover:scale-105 hover:border-accent hover:text-accent sm:w-auto"
            >
              📄 Download Resume
            </a>
          </div>

{/* Social profile cards */}
          <SocialCards />
        </motion.div>

        {/* ===================== Image column ===================== */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: easeOut }}
        >
          {/* Blurred glowing background behind the profile image */}
          <div
            aria-hidden
            className="absolute h-72 w-72 rounded-full bg-accent opacity-20 blur-3xl sm:h-80 sm:w-80"
          />

          {/* Decorative ring */}
          <div
            aria-hidden
            className="absolute h-[min(80vw,400px)] w-[min(80vw,400px)] rounded-full border border-accent/25 sm:h-[440px] sm:w-[440px]"
          />

{/* Perfectly circular profile image */}
          <div className="relative z-10 -mt-10 h-64 w-64 overflow-hidden rounded-full shadow-2xl shadow-accent/30 ring-4 ring-white/10 transition duration-300 ease-out hover:scale-105 sm:h-72 sm:w-72 md:-mt-14 md:h-80 md:w-80">
            <img
              src="/images/my image.jpg"
              alt="Fardosa"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

