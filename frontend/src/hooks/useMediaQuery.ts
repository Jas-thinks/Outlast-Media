import { useSyncExternalStore } from "react";

/**
 * Subscribe to a CSS media query and re-render on change. SSR-safe via
 * `useSyncExternalStore` (returns `false` on the server snapshot).
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", callback);
      return () => mql.removeEventListener("change", callback);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
