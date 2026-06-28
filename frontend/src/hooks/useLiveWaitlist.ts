import { useEffect } from "react";
import { useWaitlistStore } from "@/store/waitlistStore";

/**
 * Simulates live waitlist momentum: every few seconds the global counter nudges
 * up by a small random amount, so the hero/CTA numbers feel alive. Pauses while
 * the tab is hidden to avoid pointless work.
 */
export function useLiveWaitlist() {
  const incrementLive = useWaitlistStore((state) => state.incrementLive);

  useEffect(() => {
    let timeoutId: number;

    const schedule = () => {
      const delay = 4000 + Math.random() * 5000;
      timeoutId = window.setTimeout(() => {
        if (document.visibilityState === "visible") {
          incrementLive(1 + Math.floor(Math.random() * 2));
        }
        schedule();
      }, delay);
    };

    schedule();
    return () => window.clearTimeout(timeoutId);
  }, [incrementLive]);
}
