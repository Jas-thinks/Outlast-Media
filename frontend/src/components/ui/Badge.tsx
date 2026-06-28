import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { BadgeTone } from "@/types";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-black tracking-[0.12em] uppercase",
  {
    variants: {
      tone: {
        rose: "border-accent-rose/30 bg-accent-rose/15 text-accent-rose",
        emerald: "border-accent-emerald/30 bg-accent-emerald/15 text-accent-emerald",
        amber: "border-primary/30 bg-primary/15 text-primary-bright",
        sky: "border-accent-sky/30 bg-accent-sky/15 text-accent-sky",
      },
    },
    defaultVariants: {
      tone: "amber",
    },
  },
);

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

/** Small status pill used for asset states, trust markers, and section tags. */
export function Badge({ children, tone, className }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)}>{children}</span>;
}
