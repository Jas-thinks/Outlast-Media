import { QueryClient } from "@tanstack/react-query";

/**
 * Shared TanStack Query client. Sensible defaults for a marketing/app frontend:
 * cache for a minute, no aggressive refetching, one retry on failure.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      gcTime: 5 * 60_000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});
