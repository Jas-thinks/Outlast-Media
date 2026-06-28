import {
  Share2,
  Lightbulb,
  Users,
  Film,
  MessageSquare,
  Megaphone,
  Sparkles,
} from "lucide-react";
import type { Benefit } from "@/types";

/** Services offered by Outlast Media Creations. */
export const BENEFITS: readonly Benefit[] = [
  {
    id: "social-media",
    icon: Share2,
    title: "Social Media Management",
    description:
      "Strategic content calendars, platform-native storytelling, and community growth — turning your social presence into a powerful brand asset.",
  },
  {
    id: "consultation",
    icon: Lightbulb,
    title: "Creative Content Consultation",
    description:
      "Deep-dive strategy sessions that align your brand vision with audience behaviour, market trends, and compelling narrative frameworks.",
  },
  {
    id: "talent",
    icon: Users,
    title: "Talent Management",
    description:
      "End-to-end management for creators and public figures — brand deals, content strategy, growth roadmaps, and positioning.",
  },
  {
    id: "tvc",
    icon: Film,
    title: "TVC & Ad Film Production",
    description:
      "High-impact television commercials and ad films crafted with cinematic precision — from concept through post-production.",
  },
  {
    id: "community",
    icon: MessageSquare,
    title: "Community Management",
    description:
      "Building, nurturing, and activating loyal communities across platforms — driving engagement, retention, and brand advocacy.",
  },
  {
    id: "influencer",
    icon: Megaphone,
    title: "Influencer Marketing",
    description:
      "Curated influencer partnerships that amplify your message authentically — with full campaign management and performance tracking.",
  },
  {
    id: "cgi-vfx",
    icon: Sparkles,
    title: "CGI & VFX Production",
    description:
      "Breathtaking visual effects and CGI that elevate your content — from product visualisations to full-scale motion picture sequences.",
  },
];
