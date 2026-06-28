import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const FOUNDER_PHOTO: string | null = "/viral.png";

const FOUNDER = {
  name: "Viral Namdeo",
  role: "Founder & Creative Director",
  tagline: "Every frame tells a story. We make sure yours is unforgettable.",
  bio: "With a passion for visual storytelling and a deep understanding of what moves audiences, Ashishtaanu founded Outlast Media Creations to bridge the gap between cinematic craft and strategic brand communication. Every project is a personal commitment to excellence.",
} as const;

const CREDENTIALS = [
  { id: "c1", value: "3+", label: "Years Directing" },
  { id: "c2", value: "50+", label: "Brand Projects" },
  { id: "c3", value: "7", label: "Service Verticals" },
] as const;

export function Founder() {
  return (
    <section id="founder" className="py-20 sm:py-28">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center"
        >
          {/* Portrait card */}
          <motion.div variants={staggerItem} className="flex justify-center lg:justify-start">
            <div className="group relative w-full max-w-sm">
              {/* Outer gold border accent — visible on hover */}
              <div className="absolute -inset-px rounded-[24px] bg-gradient-to-br from-primary/40 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Portrait container */}
              <div className="relative overflow-hidden rounded-[22px] border border-border bg-card shadow-[var(--shadow-card)] transition-transform duration-500 group-hover:-translate-y-1">
                {FOUNDER_PHOTO ? (
                  <img
                    src={FOUNDER_PHOTO}
                    alt={`${FOUNDER.name} — ${FOUNDER.role}`}
                    className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  /* Premium placeholder — replace with actual photo */
                  <div className="relative flex aspect-[3/4] w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900/80 to-[#060606]">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-60"
                      style={{
                        background:
                          "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(201,169,110,0.12), transparent)",
                      }}
                    />
                    {/* Silhouette icon */}
                    <div className="relative mb-4 flex h-28 w-28 items-center justify-center rounded-full border border-primary/20 bg-primary/8">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-16 w-16 text-primary/40"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <p className="relative text-[12px] font-semibold tracking-[0.12em] text-primary/50 uppercase">
                      Photo Coming Soon
                    </p>
                    {/* Logo watermark inside placeholder */}
                    <img
                      src="/logo.png"
                      alt=""
                      aria-hidden
                      className="pointer-events-none absolute bottom-6 left-1/2 w-28 -translate-x-1/2 select-none object-contain opacity-[0.08]"
                    />
                  </div>
                )}

                {/* Name overlay at bottom of portrait */}
                <div className="border-t border-border bg-card/80 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[15px] font-extrabold tracking-[-0.01em] text-foreground">
                    {FOUNDER.name}
                  </p>
                  <p className="mt-0.5 text-[12px] font-medium tracking-[0.06em] text-primary">
                    {FOUNDER.role}
                  </p>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-primary/6 blur-2xl"
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div variants={fadeUp} className="flex flex-col">
            <p className="mb-4 text-[11px] font-bold tracking-[0.15em] text-primary uppercase">
              The Vision Behind It All
            </p>
            <h2 className="font-cinzel text-[clamp(28px,4vw,50px)] font-black leading-[1.05] tracking-[-0.02em]">
              Meet the{" "}
              <span className="text-gradient">Creative Director</span>
            </h2>

            {/* Pull quote */}
            <div className="mt-7 flex gap-4 rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4">
              <Quote size={20} className="mt-0.5 shrink-0 text-primary/60" strokeWidth={1.5} />
              <p className="text-[14px] font-medium italic leading-relaxed text-foreground/80">
                {FOUNDER.tagline}
              </p>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-muted">
              {FOUNDER.bio}
            </p>

            {/* Credential stats */}
            <div className="mt-9 grid grid-cols-3 gap-4">
              {CREDENTIALS.map((cred) => (
                <div
                  key={cred.id}
                  className="flex flex-col rounded-[16px] border border-border bg-card px-4 py-4 text-center"
                >
                  <span className="text-gradient font-cinzel text-[clamp(22px,3vw,34px)] font-black leading-none">
                    {cred.value}
                  </span>
                  <span className="mt-2 text-[11px] font-medium tracking-wide text-muted">
                    {cred.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
