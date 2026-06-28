import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: readonly string[];
  /** Seconds for one full loop. Lower = faster. */
  speed?: number;
  /** Reverse the scroll direction. */
  reverse?: boolean;
  className?: string;
}

/**
 * Infinite, seamless horizontal marquee. The item list is duplicated so the
 * loop has no visible seam. Honors reduced-motion (renders a static row).
 */
export function Marquee({
  items,
  speed = 28,
  reverse = false,
  className,
}: MarqueeProps) {
  const prefersReduced = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "relative flex overflow-hidden",
        // Soft fade at both edges.
        "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <motion.ul
        className="flex shrink-0 items-center gap-10 pr-10"
        animate={prefersReduced ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        {loop.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-10 text-sm font-semibold tracking-wide text-white/45"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-primary/60" aria-hidden />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
