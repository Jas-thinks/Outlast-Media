import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

interface UseCountUpOptions {
  /** Target value to count up to. */
  to: number;
  /** Duration of the animation in seconds. */
  duration?: number;
  /** Start counting only when the element scrolls into view. */
  startOnView?: boolean;
}

/**
 * Counts a number up from 0 to `to`, optionally triggered when the host element
 * enters the viewport. Returns both the live value and the ref to attach.
 */
export function useCountUp<T extends HTMLElement = HTMLSpanElement>({
  to,
  duration = 2,
  startOnView = true,
}: UseCountUpOptions) {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const [value, setValue] = useState(0);

  // Track the latest displayed value so live updates animate from where we are,
  // rather than snapping back to zero on every change to `to`.
  const fromRef = useRef(0);
  useEffect(() => {
    fromRef.current = value;
  }, [value]);

  const shouldStart = startOnView ? inView : true;

  useEffect(() => {
    if (!shouldStart) return;
    const controls = animate(fromRef.current, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(latest),
    });
    return () => controls.stop();
  }, [shouldStart, to, duration]);

  return { ref, value };
}
