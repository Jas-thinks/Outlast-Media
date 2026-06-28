import type { ProofAvatar } from "@/types";
import { cn } from "@/lib/utils";

interface AvatarStackProps {
  avatars: readonly ProofAvatar[];
  className?: string;
}

/** Overlapping circular avatars used as compact social proof. */
export function AvatarStack({ avatars, className }: AvatarStackProps) {
  return (
    <div className={cn("flex", className)}>
      {avatars.map((avatar, index) => (
        <div
          key={avatar.id}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full border-2 border-background text-[10px] font-bold text-white",
            index !== 0 && "-ml-2",
          )}
          style={{ background: `hsl(${avatar.hue}, 70%, 42%)` }}
        >
          {avatar.initials}
        </div>
      ))}
    </div>
  );
}
