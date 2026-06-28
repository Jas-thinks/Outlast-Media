import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  className?: string;
}

/**
 * Self-contained waitlist signup form (RHF + Zod + React Query). Reused by both
 * the hero and the CTA section, with inline validation, loading, and success
 * states.
 */
export function WaitlistForm({ className }: WaitlistFormProps) {
  const { register, onSubmit, errors, isSubmitting, isSuccess } = useWaitlistForm();

  return (
    <form onSubmit={onSubmit} noValidate className={cn("w-full", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 rounded-2xl border border-accent-emerald/30 bg-accent-emerald/10 px-4 py-3.5 text-sm font-semibold text-accent-emerald"
          >
            <Check size={18} />
            You&apos;re on the list — we&apos;ll be in touch soon.
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col gap-2"
          >
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="waitlist-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  aria-invalid={Boolean(errors.email)}
                  {...register("email")}
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="shrink-0">
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Joining…
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </div>
            {errors.email ? (
              <p role="alert" className="text-left text-xs text-accent-rose">
                {errors.email.message}
              </p>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
