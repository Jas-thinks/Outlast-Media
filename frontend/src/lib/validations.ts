import { z } from "zod";

/** Validation schema for the waitlist signup form. */
export const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
});

export type WaitlistFormValues = z.infer<typeof waitlistSchema>;
