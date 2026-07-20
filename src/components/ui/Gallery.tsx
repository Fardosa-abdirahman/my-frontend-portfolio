import { motion } from "framer-motion";
import type { GalleryImage } from "../../types";
import { getCardAccent } from "../../lib/sectionThemes";
import { cn } from "../../utils/cn";
import {
  defaultTransition,
  fadeUp,
  scrollRevealViewport,
  staggerContainer,
} from "../../lib/motion";

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      variants={staggerContainer}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {images.map((image, index) => {
        const accent = getCardAccent(index);

        return (
          <motion.figure
            key={image.id}
            variants={fadeUp}
            transition={defaultTransition}
            whileHover={{ y: -4 }}
            className={cn(
              "group surface-card relative overflow-hidden rounded-xl border-t-4 transition-shadow duration-300 hover:shadow-xl",
              accent.border,
              accent.hover
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-slate-ink/85 via-violet-950/60 to-transparent px-4 pb-4 pt-10 text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {image.alt}
            </figcaption>
          </motion.figure>
        );
      })}
    </motion.div>
  );
}
