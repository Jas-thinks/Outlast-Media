import { SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a
      href="#top"
      className={cn("flex items-center gap-2.5", className)}
      aria-label={`${SITE_CONFIG.name} home`}
    >
      <img
        src="/logo.png"
        alt={SITE_CONFIG.name}
        className="h-10 w-auto object-contain"
      />
    </a>
  );
}
