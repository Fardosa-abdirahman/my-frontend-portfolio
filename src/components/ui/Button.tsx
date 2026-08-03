import type { MouseEvent } from "react";
import type { ButtonProps } from "../../types";
import { scrollToSection } from "../../data/navigation";
import { cn } from "../../utils/cn";

const variants = {
  primary:
    "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30",
  secondary:
    "bg-ink text-white shadow-md hover:bg-ink-soft hover:-translate-y-0.5",
  outline:
    "border border-ink/15 bg-transparent text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5",
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
