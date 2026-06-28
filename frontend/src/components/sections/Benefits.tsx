import { motion } from "framer-motion";
import {
  Share2,
  Lightbulb,
  Users,
  Film,
  MessageSquare,
  Megaphone,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFITS } from "@/constants/benefits";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

type ServiceId = keyof typeof SERVICE_VISUAL;

const SERVICE_VISUAL = {
  "social-media": {
    gradient: "from-[#1a0d2e] to-[#080608]",
    glow: "rgba(139,92,246,0.20)",
    accent: "#7c3aed",
    icon: Share2,
    pattern: "social",
  },
  consultation: {
    gradient: "from-[#1e1508] to-[#080706]",
    glow: "rgba(201,169,110,0.25)",
    accent: "#c9a96e",
    icon: Lightbulb,
    pattern: "consult",
  },
  talent: {
    gradient: "from-[#07180f] to-[#060806]",
    glow: "rgba(52,211,153,0.18)",
    accent: "#10b981",
    icon: Users,
    pattern: "talent",
  },
  tvc: {
    gradient: "from-[#1e0808] to-[#080606]",
    glow: "rgba(239,68,68,0.20)",
    accent: "#dc2626",
    icon: Film,
    pattern: "film",
  },
  community: {
    gradient: "from-[#07101e] to-[#060608]",
    glow: "rgba(59,130,246,0.18)",
    accent: "#3b82f6",
    icon: MessageSquare,
    pattern: "community",
  },
  influencer: {
    gradient: "from-[#1a0720] to-[#080608]",
    glow: "rgba(217,70,239,0.18)",
    accent: "#a21caf",
    icon: Megaphone,
    pattern: "influencer",
  },
  "cgi-vfx": {
    gradient: "from-[#071820] to-[#060608]",
    glow: "rgba(6,182,212,0.18)",
    accent: "#0891b2",
    icon: Sparkles,
    pattern: "cgi",
  },
} as const;

export function Benefits() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          tag="What We Do"
          title="Our Services"
          subtitle="From strategy to production to distribution — every dimension of your creative journey, covered."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {BENEFITS.map((benefit) => {
            const visual = SERVICE_VISUAL[benefit.id as ServiceId];
            const Icon = visual?.icon ?? benefit.icon;
            const accent = visual?.accent ?? "#c9a96e";
            const glow = visual?.glow ?? "rgba(201,169,110,0.18)";
            const gradient = visual?.gradient ?? "from-zinc-900 to-[#060606]";

            return (
              <motion.article
                key={benefit.id}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden rounded-[20px] border border-border bg-[#0a0908] transition-all duration-500 hover:-translate-y-1.5 hover:border-white/12 hover:shadow-[0_24px_64px_rgba(0,0,0,0.6)]"
              >
                {/* Visual header */}
                <div
                  className={`relative flex h-40 flex-col items-center justify-center overflow-hidden bg-gradient-to-b ${gradient}`}
                >
                  {/* Ambient glow — always subtle, stronger on hover */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-80"
                    style={{
                      background: `radial-gradient(55% 55% at 50% 45%, ${glow}, transparent)`,
                    }}
                  />

                  {/* Horizontal grid lines for cinematic texture */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(transparent 49%, rgba(255,255,255,0.8) 50%, transparent 51%)",
                      backgroundSize: "100% 28px",
                    }}
                  />

                  {/* Icon container */}
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `rgba(255,255,255,0.05)`,
                      border: `1px solid ${accent}28`,
                      boxShadow: `0 0 24px ${accent}22, inset 0 1px 0 rgba(255,255,255,0.08)`,
                    }}
                  >
                    <Icon
                      size={26}
                      strokeWidth={1.4}
                      style={{ color: accent }}
                    />
                  </div>

                  {/* Category label */}
                  <p
                    className="relative mt-3 text-[10px] font-bold tracking-[0.18em] uppercase opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                    style={{ color: accent }}
                  >
                    {benefit.title.split(" ")[0]}
                  </p>

                  {/* Fade to card body */}
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a0908] to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
                  <h3 className="mb-2.5 text-[14px] font-extrabold tracking-[-0.01em] text-foreground leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-[12.5px] leading-relaxed text-muted flex-1">
                    {benefit.description}
                  </p>
                </div>

                {/* Gold bottom sweep line on hover */}
                <div className="h-[1.5px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary/70 via-primary-bright/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
