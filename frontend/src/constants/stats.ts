import type { Stat } from "@/types";

/**
 * Headline platform statistics. The numeric `value` is animated with a
 * count-up effect; `displayValue` overrides rendering for non-numeric stats.
 */
export const PLATFORM_STATS: readonly Stat[] = [
  { id: "verticals", value: 6, label: "Service Verticals" },
  { id: "brands", value: 50, suffix: "+", label: "Brands Served" },
  { id: "stories", value: 0, displayValue: "∞", label: "Stories to Tell" },
  { id: "years", value: 3, suffix: "+", label: "Years of Excellence" },
];
