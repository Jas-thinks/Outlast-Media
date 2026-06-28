import { useRef, type PointerEvent, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees on each axis. */
  tilt?: number;
}

const SPRING = { stiffness: 200, damping: 18, mass: 0.4 };

/**
 * Glass card with live, cursor-reactive effects: a subtle 3D tilt toward the
 * pointer plus an amber spotlight that follows the cursor. Falls back to a
 * static glass surface when the user prefers reduced motion.
 */
export function InteractiveCard({
  children,
  className,
  tilt = 6,
}: InteractiveCardProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Spotlight position (percentages) and tilt rotations.
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowOpacity = useSpring(0, SPRING);
  const rotateX = useSpring(0, SPRING);
  const rotateY = useSpring(0, SPRING);

  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${glowX}% ${glowY}%, rgba(201,169,110,0.14), transparent 62%)`;

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const xRatio = (event.clientX - rect.left) / rect.width;
    const yRatio = (event.clientY - rect.top) / rect.height;
    glowX.set(xRatio * 100);
    glowY.set(yRatio * 100);
    rotateY.set((xRatio - 0.5) * tilt * 2);
    rotateX.set(-(yRatio - 0.5) * tilt * 2);
  };

  const handlePointerEnter = () => glowOpacity.set(1);
  const handlePointerLeave = () => {
    glowOpacity.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  if (prefersReduced) {
    return (
      <div
        className={cn(
          "glass rounded-[var(--radius-card)] transition-colors duration-300",
          className,
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn(
        "glass relative rounded-[var(--radius-card)] transition-colors duration-300 [transform-style:preserve-3d]",
        className,
      )}
    >
      <motion.span
        aria-hidden
        style={{ opacity: glowOpacity, background: spotlight }}
        className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)]"
      />
      {children}
    </motion.div>
  );
}
