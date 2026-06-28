import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  /** Completion percentage, 0–100. */
  value: number;
  className?: string;
  "aria-label"?: string;
}

/**
 * Animated ownership progress bar. The fill grows from 0 to `value` when it
 * scrolls into view, giving the cards a lively, premium feel.
 */
export function ProgressBar({ value, className, ...rest }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(value)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={rest["aria-label"] ?? "Ownership progress"}
      className={cn(
        "h-1.5 w-full overflow-hidden rounded-full bg-white/10",
        className,
      )}
    >
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary to-primary-deep"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}
