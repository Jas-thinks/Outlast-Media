import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ExternalLink } from "lucide-react";

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { FEATURED_WORK, type WorkItem } from "@/constants/work";
import { SITE_CONFIG } from "@/constants/site";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
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

/** Cinematic video card with lazy YouTube embed. */
function VideoCard({ item, large = false }: { item: WorkItem; large?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`;

  return (
    <motion.article variants={staggerItem} className="group relative flex flex-col">
      <div
        className={`relative overflow-hidden rounded-[20px] border border-border bg-card ${large ? "aspect-[16/9]" : "aspect-video"}`}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.div
              key="player"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <iframe
                src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
              <button
                type="button"
                onClick={() => setPlaying(false)}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-colors hover:bg-black/90"
                aria-label="Close video"
              >
                <X size={14} />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="thumbnail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <img
                src={thumbnail}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  if (!img.src.includes("hqdefault")) {
                    img.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                  }
                }}
              />
              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Category badge */}
              <div className="absolute left-4 top-4">
                <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-white/80 uppercase backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              {/* Play button */}
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="absolute inset-0 flex items-center justify-center"
                aria-label={`Play ${item.title}`}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary/60 group-hover:bg-primary/20">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </span>
              </button>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-cinzel text-lg font-black tracking-wide text-white drop-shadow-lg">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!playing && (
        <div className="mt-4 px-1">
          <p className="text-sm leading-relaxed text-muted">{item.description}</p>
          <a
            href={`https://www.youtube.com/watch?v=${item.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary transition-colors hover:text-primary-bright"
          >
            Watch on YouTube
            <ExternalLink size={12} />
          </a>
        </div>
      )}
    </motion.article>
  );
}

export function FeaturedAssets() {
  const featuredItem = FEATURED_WORK.find((w) => w.featured);
  const otherItems = FEATURED_WORK.filter((w) => !w.featured);

  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-[120px]"
      />
      <Container className="relative">
        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <p className="mb-4 text-[11px] font-bold tracking-[0.15em] text-primary uppercase">
            Our Work
          </p>
          <h2 className="font-cinzel text-[clamp(30px,4.5vw,56px)] font-black tracking-[-0.02em]">
            Stories We've Told
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            From cinematic music videos to brand films — every project is a story worth telling.
          </p>
        </motion.div>

        {/* Video grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12"
        >
          {/* Featured (large) video */}
          {featuredItem && (
            <div className="mb-6">
              <VideoCard item={featuredItem} large />
            </div>
          )}

          {/* Secondary videos */}
          {otherItems.length > 0 && (
            <div className={`grid gap-6 ${otherItems.length === 1 ? "grid-cols-1 sm:max-w-lg" : "grid-cols-1 sm:grid-cols-2"}`}>
              {otherItems.map((item) => (
                <VideoCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </motion.div>

        {/* Social CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={SITE_CONFIG.contact.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 text-[13px] font-semibold text-muted transition-all duration-300 hover:border-[#ff0000]/40 hover:bg-[#ff0000]/10 hover:text-white"
          >
            <span className="text-[#ff0000] transition-transform duration-300 group-hover:scale-110"><YoutubeIcon size={16} /></span>
            View All on YouTube
          </a>
          <a
            href={SITE_CONFIG.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 text-[13px] font-semibold text-muted transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
          >
            <InstagramIcon size={16} />
            Follow on Instagram
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
