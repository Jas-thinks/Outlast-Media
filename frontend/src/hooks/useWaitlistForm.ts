import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { joinWaitlist } from "@/services/waitlist";
import { useWaitlistStore } from "@/store/waitlistStore";
import { waitlistSchema, type WaitlistFormValues } from "@/lib/validations";

/**
 * Encapsulates the entire waitlist signup flow: React Hook Form + Zod
 * validation wired to a TanStack Query mutation, with the global store updated
 * on success. Sections only need to consume the returned handlers.
 */
export function useWaitlistForm() {
  const registerSignup = useWaitlistStore((state) => state.registerSignup);

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { email: "" },
  });

  const mutation = useMutation({
    mutationFn: joinWaitlist,
    onSuccess: () => {
      registerSignup();
      form.reset();
    },
  });

  const onSubmit = form.handleSubmit((values) => mutation.mutate(values));

  return {
    register: form.register,
    onSubmit,
    errors: form.formState.errors,
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
    error: mutation.error,
  };
}
