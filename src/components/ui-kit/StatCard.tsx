import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

type Props = {
  value: number;
  label: string;
  suffix?: string;
  /** Animate the number when it scrolls into view. */
  animated?: boolean;
  className?: string;
};

/** Single statistic. Uses a lightweight rAF counter — no animation library. */
export function StatCard({ value, label, suffix = "", animated = true, className }: Props) {
  const { ref, display } = useCountUp(value, animated);

  return (
    <div ref={ref} className={cn("text-center sm:text-left", className)}>
      <p className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
