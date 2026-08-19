import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

/** Inline success / error banner announced to screen readers. */
export function FormStatus({
  tone,
  children,
  className,
}: {
  tone: "success" | "error";
  children: React.ReactNode;
  className?: string;
}) {
  const Icon = tone === "success" ? CheckCircle2 : AlertCircle;
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex items-start gap-2 rounded-xl px-4 py-3 text-sm font-medium",
        tone === "success"
          ? "bg-success-soft text-success"
          : "bg-destructive/10 text-destructive",
        className,
      )}
    >
      <Icon className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
