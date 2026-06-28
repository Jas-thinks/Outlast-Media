import { apiClient } from "./apiClient";

export interface WaitlistPayload {
  email: string;
}

export interface WaitlistResponse {
  success: boolean;
  /** The new member's position in the waitlist queue. */
  position: number;
}

/** Whether a real backend base URL is configured. */
const hasBackend = Boolean(import.meta.env.VITE_API_BASE_URL);

/**
 * Submit an email to the waitlist.
 *
 * When `VITE_API_BASE_URL` is configured this POSTs to the real backend.
 * Otherwise it falls back to a simulated success so the landing page is fully
 * demoable out of the box. Swap-in is zero-effort: just set the env var.
 */
export async function joinWaitlist(
  payload: WaitlistPayload,
): Promise<WaitlistResponse> {
  if (hasBackend) {
    const { data } = await apiClient.post<WaitlistResponse>("/waitlist", payload);
    return data;
  }

  // Simulated network call for local/demo environments.
  await new Promise((resolve) => setTimeout(resolve, 900));
  return {
    success: true,
    position: 3200 + Math.floor(Math.random() * 800),
  };
}
