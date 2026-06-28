import { motion, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, Film, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { HERO_CONTENT } from "@/constants/site";
import { usePointerParallax } from "@/hooks/usePointerParallax";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { scrollToId } from "@/utils/scroll";

/** A floating, blurred-in glass statistic chip used as ambient hero decoration. */
function FloatingStat({
  value,
  label,
  className,
  delay,
  driftX,
}: {
  value: string;
  label: string;
  className: string;
  delay: number;
  driftX: MotionValue<number>;
}) {
  return (
    <motion.div
      aria-hidden
      style={{ x: driftX }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay, duration: 0.6 },
        scale: { delay, duration: 0.6 },
        y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`glass absolute hidden items-center gap-3 rounded-2xl px-4 py-3 lg:flex ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary">
        <Film size={18} />
      </span>
      <span className="text-left">
        <span className="block text-sm font-extrabold leading-none">{value}</span>
        <span className="text-[11px] text-muted">{label}</span>
      </span>
    </motion.div>
  );
}

export function Hero() {
  const { x } = usePointerParallax();
  const driftLeft = useTransform(x, (value) => value * 24);
  const driftRight = useTransform(x, (value) => value * -24);

  return (
    <section className="relative flex min-h-[95vh] flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-16 text-center sm:px-6">
      <AmbientBackground withGrid interactive />

      {/* Logo watermark — premium branding element */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 w-[min(72vw,460px)] -translate-x-1/2 -translate-y-1/2 select-none object-contain opacity-[0.10]"
      />

      {HERO_CONTENT.floatingStats.map((stat, i) => (
        <FloatingStat
          key={stat.id}
          value={stat.value}
          label={stat.label}
          className={i === 0 ? "top-[26%] left-[5%]" : "top-[32%] right-[5%]"}
          delay={i === 0 ? 0.8 : 1.1}
          driftX={i === 0 ? driftLeft : driftRight}
        />
      ))}

      <Container className="relative max-w-4xl">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div
            variants={staggerItem}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-primary-bright uppercase"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            {HERO_CONTENT.badge}
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="font-cinzel text-[clamp(48px,9vw,108px)] font-black leading-[0.9] tracking-[-0.02em]"
          >
            <span className="block text-gradient">{HERO_CONTENT.titleLine1}</span>
            <span className="block">{HERO_CONTENT.titleLine2}</span>
            <span className="block text-gradient">{HERO_CONTENT.titleLine3}</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mx-auto mt-8 max-w-xl text-[clamp(15px,2vw,19px)] leading-relaxed text-muted"
          >
            {HERO_CONTENT.subtitle}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 flex flex-wrap items-center justify-center gap-3.5"
          >
            <Button size="lg" onClick={() => scrollToId("work")}>
              {HERO_CONTENT.primaryCta}
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" onClick={() => scrollToId("contact")}>
              {HERO_CONTENT.secondaryCta}
            </Button>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-xs text-faint">Trusted by 50+ brands</p>
            </div>
            <div className="hidden h-6 w-px bg-white/10 sm:block" />
            <p className="text-xs text-faint">
              <strong className="font-bold text-white/85">7</strong> service verticals
            </p>
            <div className="hidden h-6 w-px bg-white/10 sm:block" />
            <p className="text-xs text-faint">
              <strong className="font-bold text-white/85">Cinematic</strong> storytelling
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
