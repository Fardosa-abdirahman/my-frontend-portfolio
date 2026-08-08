import type { MouseEvent } from "react";
import type { ButtonProps } from "../../types";
import { scrollToSection } from "../../data/navigation";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-gradient-to-r from-accent to-accent-blue text-white shadow-lg shadow-accent/30 hover:from-accent-hover hover:to-accent-blue hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40",
  secondary:
    "bg-ink-muted text-white shadow-md hover:bg-ink-soft hover:-translate-y-0.5",
  outline:
    "border border-white/20 bg-white/[0.03] text-white hover:border-accent hover:text-accent-glow hover:-translate-y-0.5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  accentGradient: _accentGradient,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out",
    variants[variant],
    className
  );

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (href?.startsWith("#")) {
      event.preventDefault();
      scrollToSection(href);
    }
    onClick?.();
  };

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
