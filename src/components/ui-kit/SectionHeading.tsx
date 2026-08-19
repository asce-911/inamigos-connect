import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Heading level so pages keep a valid document outline. */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
};

/** Reusable eyebrow + heading + intro block. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-foreground">
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-bold text-foreground",
          Tag === "h1"
            ? "text-3xl sm:text-4xl lg:text-5xl"
            : "text-2xl sm:text-3xl lg:text-[2.15rem]",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
