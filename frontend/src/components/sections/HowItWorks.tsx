import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { scrollToId } from "@/utils/scroll";

const PILLARS = [
  {
    id: "storytelling",
    icon: "🎬",
    title: "Cinematic Storytelling",
    description: "Every frame is intentional. We approach every project as a film — with craft, emotion, and purpose at the core.",
  },
  {
    id: "strategy",
    icon: "🎯",
    title: "Strategic Creativity",
    description: "We blend creative excellence with marketing strategy to ensure your story doesn't just look beautiful — it performs.",
  },
  {
    id: "impact",
    icon: "🌍",
    title: "Lasting Impact",
    description: "We measure success by the conversations our work starts, the communities it builds, and the results it drives.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Watermark */}
      <img
        src="/logo.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-6%] top-1/2 w-[min(52vw,360px)] -translate-y-1/2 select-none object-contain opacity-[0.12]"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left column — text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="mb-4 text-[11px] font-bold tracking-[0.15em] text-primary uppercase">
              About Us
            </p>
            <h2 className="font-cinzel text-[clamp(32px,4.5vw,54px)] font-black leading-[1.05] tracking-[-0.02em]">
              Driven by{" "}
              <span className="text-gradient">Creativity</span>
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              Outlast Media Creations is a creative agency built on the belief that powerful
              storytelling creates lasting impact.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              We help brands, creators, and businesses bring their vision to life through
              documentaries, short films, advertisements, podcasts, and digital content.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              By blending cinematic creativity with strategic marketing, we craft stories that
              connect, inspire, and deliver results.
            </p>
            <div className="mt-9">
              <Button size="lg" onClick={() => scrollToId("contact")}>
                Work with Us
                <ArrowRight size={18} />
              </Button>
            </div>
          </motion.div>

          {/* Right column — pillars */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-4"
          >
            {PILLARS.map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={staggerItem}
                className="glass rounded-[18px] p-6 transition-colors duration-300 hover:border-border-strong hover:bg-card-hover"
              >
                <div className="mb-3 flex items-center gap-4">
                  <span className="text-3xl" aria-hidden>{pillar.icon}</span>
                  <h3 className="text-lg font-extrabold tracking-[-0.02em]">{pillar.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted">{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

