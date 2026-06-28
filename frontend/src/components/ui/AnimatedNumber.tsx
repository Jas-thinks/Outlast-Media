import { useCountUp } from "@/hooks/useCountUp";
import { formatNumber } from "@/utils/format";
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Renders a number that counts up from zero when scrolled into view, with
 * locale-aware grouping plus optional prefix/suffix (e.g. "₹", "Cr+").
 */
export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  className,
}: AnimatedNumberProps) {
  const { ref, value: current } = useCountUp<HTMLSpanElement>({ to: value, duration });

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {formatNumber(current)}
      {suffix}
    </span>
  );
}
