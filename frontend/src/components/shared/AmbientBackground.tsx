import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { usePointerParallax } from "@/hooks/usePointerParallax";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  /** Render a faint grid overlay (used in the hero). */
  withGrid?: boolean;
  /** Enable cursor-driven parallax on the orbs. */
  interactive?: boolean;
  className?: string;
}

/**
 * Floating, blurred gradient orbs plus an optional grid — the "ambient
 * lighting" layer that gives sections depth. When `interactive`, the orbs drift
 * with the cursor for a live, three-dimensional feel. Purely decorative.
 */
export function AmbientBackground({
  withGrid = false,
  interactive = false,
  className,
}: AmbientBackgroundProps) {
  const prefersReduced = useReducedMotion();
  const { x, y } = usePointerParallax();
  const enableParallax = interactive && !prefersReduced;

  // Orbs move in opposite directions for a layered depth effect.
  const orb1X = useTransform(x, (value) => (enableParallax ? value * 40 : 0));
  const orb1Y = useTransform(y, (value) => (enableParallax ? value * 40 : 0));
  const orb2X = useTransform(x, (value) => (enableParallax ? value * -55 : 0));
  const orb2Y = useTransform(y, (value) => (enableParallax ? value * -55 : 0));

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <ParallaxOrb
        x={orb1X}
        y={orb1Y}
        floatY={[0, -30, 0]}
        duration={12}
        positionClassName="top-[30%] left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 blur-[100px]"
        orbClassName="bg-primary/12"
      />
      <ParallaxOrb
        x={orb2X}
        y={orb2Y}
        floatY={[0, 25, 0]}
        duration={15}
        positionClassName="bottom-[20%] left-[15%] h-[350px] w-[350px] blur-[80px]"
        orbClassName="bg-primary-deep/10"
      />
      {withGrid ? (
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      ) : null}
    </div>
  );
}

function ParallaxOrb({
  x,
  y,
  floatY,
  duration,
  positionClassName,
  orbClassName,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  floatY: number[];
  duration: number;
  positionClassName: string;
  orbClassName: string;
}) {
  return (
    <motion.div style={{ x, y }} className={cn("absolute", positionClassName)}>
      <motion.div
        className={cn("h-full w-full rounded-full", orbClassName)}
        animate={{ y: floatY }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
