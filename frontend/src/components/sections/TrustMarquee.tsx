import { Marquee } from "@/components/shared/Marquee";
import { SERVICE_CATEGORIES } from "@/constants/site";

/** A slim, continuously-scrolling strip of service categories beneath the hero. */
export function TrustMarquee() {
  return (
    <section className="border-y border-border bg-white/[0.02] py-5" aria-label="Services">
      <p className="mb-3 text-center text-[11px] font-bold tracking-[0.18em] text-faint uppercase">
        What we create
      </p>
      <Marquee items={SERVICE_CATEGORIES} />
    </section>
  );
}
