import type { ProcessStep } from "@/types";

/** The four-step "How Gearbox Works" flow. */
export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "choose",
    stepNumber: "01",
    icon: "🔍",
    title: "Choose Asset",
    description:
      "Browse our curated catalogue of premium cameras, drones, studio gear, and luxury vehicles. Filter by category, availability, and share price.",
  },
  {
    id: "buy",
    stepNumber: "02",
    icon: "💳",
    title: "Buy Your Share",
    description:
      "Purchase the fraction that fits your budget. Own as little as 12.5% of a ₹3L cinema camera for ₹37,500 — recorded digitally and secured.",
  },
  {
    id: "schedule",
    stepNumber: "03",
    icon: "📅",
    title: "Schedule Usage",
    description:
      "Book your asset days through a transparent co-owner calendar. Zero conflicts, guaranteed access based on your ownership percentage.",
  },
  {
    id: "enjoy",
    stepNumber: "04",
    icon: "✨",
    title: "Enjoy Ownership",
    description:
      "Use gear professionally maintained, fully insured, and delivered to your location. Sell your share anytime on the Gearbox marketplace.",
  },
];
