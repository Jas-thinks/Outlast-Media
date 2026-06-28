import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variants so animation timing is consistent and premium
 * (subtle, eased, never flashy) across every section.
 */

const PREMIUM_EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + rise used for most on-scroll reveals. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: PREMIUM_EASE },
  },
};

/** Simple opacity fade. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: PREMIUM_EASE } },
};

/** Parent container that staggers the reveal of its children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/** Child item designed to be used inside `staggerContainer`. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: PREMIUM_EASE },
  },
};

/** Shared viewport config for `whileInView` so reveals fire once, early. */
export const viewportOnce = { once: true, margin: "0px 0px -80px 0px" } as const;
