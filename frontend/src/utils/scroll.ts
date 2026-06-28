/** Smoothly scroll to an in-page element by id (e.g. "assets"). */
export function scrollToId(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
