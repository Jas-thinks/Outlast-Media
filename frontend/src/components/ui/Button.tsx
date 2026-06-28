import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-2xl font-bold whitespace-nowrap transition-all duration-250 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 tracking-[0.01em]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-[#060606] shadow-[var(--shadow-glow)] hover:bg-primary-bright hover:shadow-[var(--shadow-glow-lg)]",
        secondary:
          "glass text-foreground hover:bg-card-hover hover:border-border-strong",
        outline:
          "border border-primary/35 bg-primary/8 text-primary-bright hover:bg-primary/18 hover:border-primary/55",
        ghost:
          "border border-border bg-card text-muted hover:text-foreground hover:border-border-strong hover:bg-card-hover",
      },
      size: {
        sm: "px-4 py-2.5 text-[13px]",
        md: "px-6 py-3.5 text-[14px]",
        lg: "px-8 py-4 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type MotionButtonProps = HTMLMotionProps<"button">;

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionButtonProps>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

/**
 * Primary interactive button with premium hover/press micro-interactions
 * powered by Framer Motion. Variants/sizes are driven by `cva`.
 */
export function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps & MotionButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
