import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Glassmorphism surface: frosted background, soft border, premium depth.
 * Hover affordances are opt-in via the `className` from the caller.
 */
export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "glass rounded-[var(--radius-card)] transition-colors duration-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
