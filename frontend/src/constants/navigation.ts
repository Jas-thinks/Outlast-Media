import type { NavLink } from "@/types";

/** Primary in-page navigation, rendered in the navbar. */
export const NAV_LINKS: readonly NavLink[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Our Work", href: "#work" },
  { id: "services", label: "Services", href: "#services" },
  { id: "contact", label: "Contact", href: "#contact" },
];
