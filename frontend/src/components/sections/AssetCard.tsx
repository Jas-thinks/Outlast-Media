import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, BadgeCheck, CalendarClock } from "lucide-react";
import { InteractiveCard } from "@/components/shared/InteractiveCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { staggerItem } from "@/lib/motion";
import {
  formatCurrencyINR,
  computeOwnershipPercent,
  computePerSharePrice,
} from "@/utils/format";
import type { Asset } from "@/types";

interface AssetCardProps {
  asset: Asset;
}

/** Premium fractional-ownership asset card with progress, trust markers, and price. */
export function AssetCard({ asset }: AssetCardProps) {
  const ownershipPercent = computeOwnershipPercent(asset.sharesSold, asset.totalShares);
  const perSharePrice = computePerSharePrice(asset.assetValue, asset.totalShares);
  const percentSold = Math.round(ownershipPercent);

  return (
    <motion.div variants={staggerItem}>
      <InteractiveCard className="group relative h-full overflow-hidden p-0 hover:border-border-strong">
        {/* Image placeholder with ambient gradient + asset glyph */}
        <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br from-white/[0.06] to-transparent">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.18),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span
            className="text-6xl transition-transform duration-300 group-hover:scale-110"
            aria-hidden
          >
            {asset.icon}
          </span>
          <div className="absolute top-3 right-3">
            <Badge tone={asset.badgeTone}>{asset.badgeLabel}</Badge>
          </div>
          <div className="absolute top-3 left-3 flex gap-1.5">
            {asset.isInsured ? (
              <span
                title="Fully insured"
                className="flex items-center gap-1 rounded-full border border-border bg-background/60 px-2 py-1 text-[10px] font-semibold text-accent-emerald backdrop-blur"
              >
                <ShieldCheck size={12} /> Insured
              </span>
            ) : null}
            {asset.isVerified ? (
              <span
                title="Verified asset"
                className="flex items-center gap-1 rounded-full border border-border bg-background/60 px-2 py-1 text-[10px] font-semibold text-accent-sky backdrop-blur"
              >
                <BadgeCheck size={12} /> Verified
              </span>
            ) : null}
          </div>
        </div>

        <div className="p-5">
          <p className="text-[11px] tracking-[0.08em] text-faint uppercase">
            {asset.category}
          </p>
          <h3 className="mt-1 text-lg font-extrabold tracking-[-0.02em]">{asset.name}</h3>

          <div className="mt-4">
            <div className="mb-1.5 flex justify-between text-[11px] text-faint">
              <span>Ownership · {percentSold}% sold</span>
              <span>
                {asset.sharesSold}/{asset.totalShares} shares sold
              </span>
            </div>
            <ProgressBar
              value={ownershipPercent}
              aria-label={`${asset.name} ownership: ${percentSold}% sold`}
            />
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-[11px] text-muted">
            <CalendarClock size={13} className="text-primary" />
            {asset.availabilityNote}
          </div>

          <div className="mt-4 flex justify-between border-t border-border pt-3.5">
            <div>
              <div className="text-[11px] text-faint">Asset Value</div>
              <div className="text-[15px] font-extrabold">
                {formatCurrencyINR(asset.assetValue)}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[11px] text-faint">Per Share</div>
              <div className="text-[15px] font-extrabold text-primary">
                {formatCurrencyINR(perSharePrice)}
              </div>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-faint">
            Maintenance ·{" "}
            <span className="font-semibold text-muted">
              {formatCurrencyINR(asset.monthlyMaintenance)}/mo
            </span>{" "}
            (shared)
          </div>

          <Button variant="outline" size="sm" className="mt-4 w-full">
            View Shares
            <ArrowRight size={15} />
          </Button>
        </div>
      </InteractiveCard>
    </motion.div>
  );
}
