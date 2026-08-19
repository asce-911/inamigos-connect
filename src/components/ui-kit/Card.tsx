import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/** Rounded surface card with a subtle shadow, used across all sections. */
export function Card({
  className,
  interactive = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & { interactive?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-card)]",
        interactive &&
          "transition-shadow duration-200 hover:shadow-[var(--shadow-card-hover)]",
        className,
      )}
      {...props}
    />
  );
}
