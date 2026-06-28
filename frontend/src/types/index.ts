import type { LucideIcon } from "lucide-react";

/** Visual style variants available for asset status badges. */
export type BadgeTone = "rose" | "emerald" | "amber" | "sky";

/** A premium asset (legacy type, retained for compatibility). */
export interface Asset {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly icon: string;
  readonly badgeLabel: string;
  readonly badgeTone: BadgeTone;
  readonly totalShares: number;
  readonly sharesSold: number;
  readonly assetValue: number;
  readonly monthlyMaintenance: number;
  readonly isInsured: boolean;
  readonly isVerified: boolean;
  readonly availabilityNote: string;
}

/** A step in the creative process flow. */
export interface ProcessStep {
  readonly id: string;
  readonly stepNumber: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

/** A platform benefit / value proposition. */
export interface Benefit {
  readonly id: string;
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
}

/** An animated headline statistic. */
export interface Stat {
  readonly id: string;
  readonly label: string;
  /** The numeric portion that is counted up. */
  readonly value: number;
  /** Rendered before the number, e.g. a currency symbol. */
  readonly prefix?: string;
  /** Rendered after the number, e.g. "+", "K+", "Cr+". */
  readonly suffix?: string;
  /** Overrides the numeric display entirely (e.g. "∞"). */
  readonly displayValue?: string;
}

/** A customer testimonial used in the carousel. */
export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly authorName: string;
  readonly authorRole: string;
  readonly company: string;
  readonly initials: string;
  readonly avatarHue: number;
  readonly rating: number;
}

/** A frequently asked question entry. */
export interface FaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

/** An in-page navigation link. */
export interface NavLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

/** A compact social-proof avatar shown in the hero. */
export interface ProofAvatar {
  readonly id: string;
  readonly initials: string;
  readonly hue: number;
}
