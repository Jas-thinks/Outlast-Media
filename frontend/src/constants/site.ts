/**
 * Global, brand-level configuration for Outlast Media Creations.
 * Centralising this avoids hardcoded, repeated strings across components.
 */
export const SITE_CONFIG = {
  name: "Outlast Media Creations",
  shortName: "Outlast Media",
  tagline: "Let's build something that outlasts the algorithm.",
  description:
    "Outlast Media Creations is a creative agency built on the belief that powerful storytelling creates lasting impact. We help brands, creators, and businesses bring their vision to life through documentaries, short films, advertisements, podcasts, and digital content.",
  url: import.meta.env.VITE_SITE_URL ?? "https://outlastmedia.in",
  contact: {
    email: "outlastmedia07@gmail.com",
    phones: ["9399349636", "7803869005"],
    instagram: "outlastmediacreation",
    instagramUrl: "https://www.instagram.com/outlastmediacreation/",
    youtube: "https://www.youtube.com/@outlastmediacreations",
  },
} as const;

/** Hero headline + supporting copy. */
export const HERO_CONTENT = {
  badge: "Premium Creative Media Agency",
  titleLine1: "CREATE.",
  titleLine2: "INFLUENCE.",
  titleLine3: "LEAD.",
  subtitle: SITE_CONFIG.tagline,
  primaryCta: "View Our Work",
  secondaryCta: "Get in Touch",
  floatingStats: [
    { id: "brands", value: "50+", label: "Brands Served" },
    { id: "verticals", value: "7", label: "Service Verticals" },
  ],
} as const;

/** Service categories shown in the continuously-scrolling marquee. */
export const SERVICE_CATEGORIES = [
  "Music Videos",
  "Documentary Films",
  "Brand Films",
  "TVC & Ad Films",
  "CGI & VFX",
  "Social Media Content",
  "Corporate Videos",
  "Short Films",
  "Podcasts",
  "Motion Graphics",
] as const;

/** Contact section copy. */
export const CONTACT_CONTENT = {
  tag: "Let's Create Together",
  title: "Ready to Build Something That Lasts?",
  subtitle:
    "Whether you have a vision or just a spark — we'll help you craft a story that connects, inspires, and outlasts.",
  cta: "Email Us",
  note: "We respond within 24 hours.",
} as const;

/** Footer navigation links. */
export const FOOTER_LINKS = [
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Our Work", href: "#work" },
  { id: "services", label: "Services", href: "#services" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;
