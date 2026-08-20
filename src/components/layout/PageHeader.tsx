import { SectionHeading } from "@/components/ui-kit/SectionHeading";

/** Consistent page intro banner for every inner page. */
export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page py-12 md:py-16">
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          {...(description ? { description } : {})}
        />
      </div>
    </section>
  );
}
