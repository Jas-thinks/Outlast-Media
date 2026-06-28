/**
 * Format a number as Indian Rupees with no decimals, e.g. 245000 -> "₹2,45,000".
 */
const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatCurrencyINR(amount: number): string {
  return inrFormatter.format(amount);
}

const numberFormatter = new Intl.NumberFormat("en-IN");

/** Format a plain number with locale-aware grouping, e.g. 12000 -> "12,000". */
export function formatNumber(value: number): string {
  return numberFormatter.format(Math.round(value));
}

/** Compute a clamped percentage (0–100) for an ownership progress bar. */
export function computeOwnershipPercent(
  sharesSold: number,
  totalShares: number,
): number {
  if (totalShares <= 0) return 0;
  return Math.min(100, Math.max(0, (sharesSold / totalShares) * 100));
}

/** Derive the price of a single ownership share. */
export function computePerSharePrice(
  assetValue: number,
  totalShares: number,
): number {
  if (totalShares <= 0) return assetValue;
  return Math.round(assetValue / totalShares);
}
