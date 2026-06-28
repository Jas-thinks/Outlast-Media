import { useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

interface PointerParallax {
  /** Normalised horizontal pointer offset from viewport center, range ~[-1, 1]. */
  x: MotionValue<number>;
  /** Normalised vertical pointer offset from viewport center, range ~[-1, 1]. */
  y: MotionValue<number>;
}

/**
 * Tracks the global pointer position and exposes springed, normalised offsets
 * from the viewport center. Multiply by a depth factor to drive parallax.
 */
export function usePointerParallax(): PointerParallax {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 40, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 40, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      rawX.set((event.clientX / window.innerWidth - 0.5) * 2);
      rawY.set((event.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [rawX, rawY]);

  return { x, y };
}
