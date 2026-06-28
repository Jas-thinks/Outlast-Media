import type { ElementType, ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds (useful for sequencing siblings). */
  delay?: number;
  variants?: Variants;
  as?: ElementType;
}

const MotionTag = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
} as const;

/**
 * Lightweight wrapper that fades + rises its children into view once. Provides a
 * single, consistent on-scroll reveal primitive used throughout the page.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeUp,
  as = "div",
}: RevealProps) {
  const Tag = MotionTag[as as keyof typeof MotionTag] ?? motion.div;

  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Tag>
  );
}
