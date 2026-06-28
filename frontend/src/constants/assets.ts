import type { Asset } from "@/types";

/**
 * Featured assets available for fractional ownership. In production this data
 * is served by the Gearbox API (see `services/assets.ts`); this static list is
 * the fallback / seed used for the marketing landing page.
 */
export const FEATURED_ASSETS: readonly Asset[] = [
  {
    id: "sony-a7-iv",
    name: "Sony A7 IV",
    category: "Mirrorless Camera",
    icon: "📷",
    badgeLabel: "HOT",
    badgeTone: "rose",
    totalShares: 8,
    sharesSold: 6,
    assetValue: 245000,
    monthlyMaintenance: 1200,
    isInsured: true,
    isVerified: true,
    availabilityNote: "Next available slot in 3 days",
  },
  {
    id: "canon-eos-r5",
    name: "Canon EOS R5",
    category: "Cinema Hybrid",
    icon: "🎥",
    badgeLabel: "NEW",
    badgeTone: "emerald",
    totalShares: 8,
    sharesSold: 3,
    assetValue: 320000,
    monthlyMaintenance: 1600,
    isInsured: true,
    isVerified: true,
    availabilityNote: "Wide open availability",
  },
  {
    id: "dji-mavic-3-pro",
    name: "DJI Mavic 3 Pro",
    category: "Professional Drone",
    icon: "🚁",
    badgeLabel: "2 LEFT",
    badgeTone: "amber",
    totalShares: 4,
    sharesSold: 2,
    assetValue: 180000,
    monthlyMaintenance: 900,
    isInsured: true,
    isVerified: true,
    availabilityNote: "Next available slot in 1 week",
  },
  {
    id: "red-komodo-6k",
    name: "RED Komodo 6K",
    category: "Cinema Camera",
    icon: "🎬",
    badgeLabel: "RARE",
    badgeTone: "sky",
    totalShares: 8,
    sharesSold: 5,
    assetValue: 850000,
    monthlyMaintenance: 4200,
    isInsured: true,
    isVerified: true,
    availabilityNote: "Priority booking for new co-owners",
  },
];
