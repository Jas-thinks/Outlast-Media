import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Render as a different element (e.g. "section", "header"). Defaults to div. */
  as?: ElementType;
}

/**
 * Width-constrained, horizontally-padded content wrapper used by every section
 * to keep alignment and rhythm consistent across breakpoints.
 */
export function Container({ children, className, as: Tag = "div" }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}
