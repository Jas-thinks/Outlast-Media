import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";
import { SectionFallback } from "@/components/shared/SectionFallback";

/**
 * Application routes. Pages are loaded with route-based code splitting via the
 * router's `lazy` option, so each route ships in its own chunk.
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    hydrateFallbackElement: <SectionFallback />,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import("@/pages/HomePage")).default }),
      },
      {
        path: "*",
        lazy: async () => ({
          Component: (await import("@/pages/NotFoundPage")).default,
        }),
      },
    ],
  },
]);
