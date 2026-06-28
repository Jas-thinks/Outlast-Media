import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

/**
 * Standardised section header (eyebrow tag + title + optional subtitle) so
 * typographic hierarchy and on-scroll reveal are identical everywhere.
 */
export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(isCenter && "text-center", className)}
    >
      <p className="mb-3 text-[11px] font-bold tracking-[0.15em] text-primary uppercase">
        {tag}
      </p>
      <h2 className="font-cinzel text-[clamp(28px,4vw,48px)] font-black tracking-[-0.02em] text-balance">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-[clamp(14px,1.8vw,17px)] leading-relaxed text-muted",
            isCenter && "mx-auto max-w-xl",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
