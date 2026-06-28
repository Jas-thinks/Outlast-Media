import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { PLATFORM_STATS } from "@/constants/stats";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Stats() {
  return (
    <section className="py-10 sm:py-16">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mx-auto grid max-w-4xl grid-cols-2 gap-9 overflow-hidden rounded-[22px] border border-border bg-white/[0.04] px-8 py-12 text-center lg:grid-cols-4"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary-deep/[0.08]"
          />
          {PLATFORM_STATS.map((stat) => (
            <div key={stat.id} className="relative">
              <div className="text-gradient font-cinzel text-[clamp(32px,5vw,52px)] font-black tracking-[-0.04em]">
                {stat.displayValue ? (
                  <span>{stat.displayValue}</span>
                ) : (
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="mt-2 text-[12px] font-medium tracking-wide text-muted uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
