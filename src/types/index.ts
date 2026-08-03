import type { ReactNode } from "react";

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
  accentGradient?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
