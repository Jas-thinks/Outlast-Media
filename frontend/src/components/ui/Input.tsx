import { type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

/**
 * Glass text input matching the design system. Works seamlessly with React
 * Hook Form via spread props (`{...register("email")}`).
 */
export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border border-border bg-white/[0.07] px-4 py-3.5 text-sm text-foreground outline-none transition-colors duration-200",
        "placeholder:text-white/30 focus:border-primary/50 focus-visible:ring-0",
        className,
      )}
      {...props}
    />
  );
}
