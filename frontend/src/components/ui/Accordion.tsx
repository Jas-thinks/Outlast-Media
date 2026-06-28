import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  trigger: ReactNode;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItemData[];
  /** Id of the item open by default. */
  defaultOpenId?: string;
  className?: string;
}

/**
 * Accessible, animated single-open accordion (shadcn-style behaviour built on
 * Framer Motion). Implements the WAI-ARIA disclosure pattern: each trigger is a
 * button with `aria-expanded` / `aria-controls`, and each panel is a labelled
 * region with `role="region"`.
 */
export function Accordion({ items, defaultOpenId, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);
  const baseId = useId();

  return (
    <div className={cn("flex flex-col gap-2.5", className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `${baseId}-trigger-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              "glass overflow-hidden rounded-2xl transition-colors duration-300",
              isOpen && "border-border-strong",
            )}
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-bold text-foreground transition-colors duration-200 hover:text-primary-bright"
              >
                <span>{item.trigger}</span>
                <motion.span
                  aria-hidden
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "shrink-0 transition-colors",
                    isOpen ? "text-primary" : "text-white/30",
                  )}
                >
                  <Plus size={20} strokeWidth={2.5} />
                </motion.span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-4 text-sm leading-relaxed text-muted">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
