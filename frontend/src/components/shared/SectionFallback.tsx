/** Minimal, layout-stable placeholder shown while a lazy section loads. */
export function SectionFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" aria-hidden>
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-primary" />
    </div>
  );
}
