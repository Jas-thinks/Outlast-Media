import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function Field({ label, error, required, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold tracking-wide text-white/60">
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-[11px] text-accent-rose">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");

    if (!isEmailJsConfigured) {
      // Fallback: open default mail client if EmailJS is not configured
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone ?? "N/A"}\n\nMessage:\n${data.message}`,
      );
      window.open(
        `mailto:outlastmedia07@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${body}`,
      );
      setStatus("success");
      reset();
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone ?? "Not provided",
          subject: data.subject,
          message: data.message,
          to_email: "outlastmedia07@gmail.com",
        },
        { publicKey: PUBLIC_KEY! },
      );
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={cn("w-full", className)}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 rounded-2xl border border-accent-emerald/30 bg-accent-emerald/10 px-6 py-10 text-center"
          >
            <CheckCircle size={40} className="text-accent-emerald" />
            <div>
              <p className="text-base font-bold text-foreground">Message Sent!</p>
              <p className="mt-1 text-sm text-muted">
                We'll get back to you at your email within 24 hours.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 text-[12px] font-semibold text-primary underline-offset-2 hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Your Name" required error={errors.name?.message}>
                <Input
                  type="text"
                  placeholder="Ravi Kumar"
                  aria-invalid={Boolean(errors.name)}
                  {...register("name")}
                />
              </Field>
              <Field label="Email Address" required error={errors.email?.message}>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  {...register("email")}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Phone Number" error={errors.phone?.message}>
                <Input
                  type="tel"
                  placeholder="+91 98765 43210 (optional)"
                  {...register("phone")}
                />
              </Field>
              <Field label="Subject" required error={errors.subject?.message}>
                <Input
                  type="text"
                  placeholder="Brand film for my company"
                  aria-invalid={Boolean(errors.subject)}
                  {...register("subject")}
                />
              </Field>
            </div>

            <Field label="Message" required error={errors.message?.message}>
              <textarea
                placeholder="Tell us about your project, timeline, and goals..."
                rows={5}
                aria-invalid={Boolean(errors.message)}
                className={cn(
                  "w-full resize-none rounded-xl border border-border bg-card px-4 py-3 text-[14px] text-foreground placeholder:text-white/25 transition-colors duration-200",
                  "focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20",
                  errors.message && "border-accent-rose/60 focus:border-accent-rose/60 focus:ring-accent-rose/20",
                )}
                {...register("message")}
              />
            </Field>

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 rounded-xl border border-accent-rose/30 bg-accent-rose/10 px-4 py-3 text-sm text-accent-rose"
              >
                <AlertCircle size={16} className="shrink-0" />
                Something went wrong. Please try again or email us directly at outlastmedia07@gmail.com
              </motion.div>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={status === "sending"}
              className="mt-2 w-full sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </Button>

            {!isEmailJsConfigured && (
              <p className="text-[11px] text-white/25">
                Note: EmailJS is not configured. Clicking Send will open your email client.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
