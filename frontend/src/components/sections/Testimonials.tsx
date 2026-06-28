import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { TESTIMONIALS } from "@/constants/testimonials";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL = 4500;

export function Testimonials() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");
  const perView = isDesktop ? 3 : isTablet ? 2 : 1;

  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Keep the active index valid when the viewport (perView) changes.
  const clampedIndex = Math.min(index, maxIndex);

  const goTo = useCallback(
    (next: number) => setIndex(Math.min(Math.max(next, 0), maxIndex)),
    [maxIndex],
  );

  const next = useCallback(
    () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1)),
    [maxIndex],
  );
  const prev = useCallback(
    () => setIndex((current) => (current <= 0 ? maxIndex : current - 1)),
    [maxIndex],
  );

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, next, maxIndex]);

  const dots = useMemo(
    () => Array.from({ length: maxIndex + 1 }, (_, i) => i),
    [maxIndex],
  );

  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading tag="Creator Stories" title="Loved by Creators" />

        <div
          className="relative mt-13"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Creator testimonials"
        >
          <div className="overflow-hidden">
            <motion.ul
              className="flex"
              animate={{ x: `-${clampedIndex * (100 / perView)}%` }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <li
                  key={testimonial.id}
                  className="shrink-0 px-2.5"
                  style={{ width: `${100 / perView}%` }}
                >
                  <Card className="flex h-full flex-col gap-3.5 p-6">
                    <div
                      className="flex gap-0.5 text-primary"
                      aria-label={`${testimonial.rating} out of 5 stars`}
                    >
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-white/70">
                      “{testimonial.quote}”
                    </p>
                    <div className="flex items-center gap-3 border-t border-border pt-3.5">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
                        style={{ background: `hsl(${testimonial.avatarHue}, 65%, 42%)` }}
                      >
                        {testimonial.initials}
                      </span>
                      <div>
                        <div className="text-[13px] font-bold">
                          {testimonial.authorName}
                        </div>
                        <div className="text-[11px] text-faint">
                          {testimonial.authorRole}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </Card>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonials"
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Slides">
              {dots.map((dot) => (
                <button
                  key={dot}
                  type="button"
                  role="tab"
                  aria-selected={dot === clampedIndex}
                  aria-label={`Go to slide ${dot + 1}`}
                  onClick={() => goTo(dot)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    dot === clampedIndex
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-white/20 hover:bg-white/40",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next testimonials"
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
