import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { SITE_CONFIG } from "@/constants/site";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * Instagram highlight cards — each represents a category of content on
 * the official @outlastmediacreation Instagram profile.
 * Links open the official profile in a new tab.
 * Update `href` on each card when specific reel/post URLs are available.
 */
const HIGHLIGHTS = [
  {
    id: "ig-01",
    label: "Music Video",
    title: "Bechainiyann",
    gradient: "from-violet-950 via-purple-900/60 to-black",
    href: SITE_CONFIG.contact.instagramUrl,
  },
  {
    id: "ig-02",
    label: "Behind the Scenes",
    title: "On Set Moments",
    gradient: "from-amber-950 via-yellow-900/60 to-black",
    href: SITE_CONFIG.contact.instagramUrl,
  },
  {
    id: "ig-03",
    label: "Brand Film",
    title: "Brand Storytelling",
    gradient: "from-rose-950 via-red-900/60 to-black",
    href: SITE_CONFIG.contact.instagramUrl,
  },
  {
    id: "ig-04",
    label: "Documentary",
    title: "Voices & Stories",
    gradient: "from-teal-950 via-emerald-900/60 to-black",
    href: SITE_CONFIG.contact.instagramUrl,
  },
  {
    id: "ig-05",
    label: "CGI & VFX",
    title: "Visual Effects Reel",
    gradient: "from-cyan-950 via-sky-900/60 to-black",
    href: SITE_CONFIG.contact.instagramUrl,
  },
  {
    id: "ig-06",
    label: "Social Media",
    title: "Content Creation",
    gradient: "from-fuchsia-950 via-pink-900/60 to-black",
    href: SITE_CONFIG.contact.instagramUrl,
  },
] as const;

function HighlightCard({
  label,
  title,
  gradient,
  href,
}: (typeof HIGHLIGHTS)[number]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${title} on Instagram`}
      className="group relative flex aspect-[4/5] flex-col overflow-hidden rounded-[18px] border border-border bg-card"
    >
      {/* Gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-b ${gradient} transition-opacity duration-500`}
      />

      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Corner Instagram icon */}
      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/70 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:bg-primary/20 group-hover:text-primary">
        <InstagramIcon size={14} />
      </div>

      {/* Gold hover border accent */}
      <div className="absolute inset-0 rounded-[18px] border border-primary/0 transition-all duration-500 group-hover:border-primary/30" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 transition-transform duration-400 group-hover:translate-y-0">
        <p className="text-[10px] font-bold tracking-[0.14em] text-primary/80 uppercase mb-1">
          {label}
        </p>
        <p className="text-[13px] font-bold text-white/90 leading-tight">
          {title}
        </p>
        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-white/40 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-primary/70">
          View on Instagram
          <ExternalLink size={10} />
        </div>
      </div>
    </a>
  );
}

export function InstagramHighlights() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-3 text-[11px] font-bold tracking-[0.15em] text-primary uppercase">
              Instagram
            </p>
            <h2 className="font-cinzel text-[clamp(26px,4vw,46px)] font-black tracking-[-0.02em]">
              @{SITE_CONFIG.contact.instagram}
            </h2>
            <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-muted">
              Follow us for behind-the-scenes, reels, and the stories we're crafting every day.
            </p>
          </div>
          <a
            href={SITE_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 text-[13px] font-semibold text-muted transition-all duration-300 hover:border-primary/40 hover:bg-primary/8 hover:text-foreground"
          >
            <InstagramIcon size={15} />
            Follow on Instagram
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4"
        >
          {HIGHLIGHTS.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <HighlightCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
