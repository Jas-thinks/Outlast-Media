import { lazy, Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Founder } from "@/components/sections/Founder";
import { FeaturedAssets } from "@/components/sections/FeaturedAssets";
import { SectionFallback } from "@/components/shared/SectionFallback";

const Benefits = lazy(() =>
  import("@/components/sections/Benefits").then((m) => ({ default: m.Benefits })),
);
const Stats = lazy(() =>
  import("@/components/sections/Stats").then((m) => ({ default: m.Stats })),
);
const InstagramHighlights = lazy(() =>
  import("@/components/sections/InstagramHighlights").then((m) => ({
    default: m.InstagramHighlights,
  })),
);
const Faq = lazy(() =>
  import("@/components/sections/Faq").then((m) => ({ default: m.Faq })),
);
const CtaWaitlist = lazy(() =>
  import("@/components/sections/CtaWaitlist").then((m) => ({
    default: m.CtaWaitlist,
  })),
);

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <HowItWorks />
      <Founder />
      <FeaturedAssets />
      <Suspense fallback={<SectionFallback />}>
        <Benefits />
        <Stats />
        <InstagramHighlights />
        <Faq />
        <CtaWaitlist />
      </Suspense>
    </>
  );
}

export default HomePage;
