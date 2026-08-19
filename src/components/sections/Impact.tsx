import { Card } from "@/components/ui-kit/Card";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { StatCard } from "@/components/ui-kit/StatCard";
import { impactMetrics } from "@/data/site";

export function Impact() {
  return (
    <section id="impact" className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Impact"
          title="What community support has made possible"
          description="Indicative figures from our demo dataset, updated at the end of every programme term."
          align="center"
        />

        <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impactMetrics.map((metric) => (
            <Card key={metric.label} interactive className="bg-card text-center">
              <StatCard {...metric} className="text-center sm:text-center" />
            </Card>
          ))}
        </dl>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Sample data for demonstration — replace with verified programme reporting.
        </p>
      </div>
    </section>
  );
}
