import { Search, MessageCircle, Link2, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui-kit/Card";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { supportSteps } from "@/data/site";

const icons = { Search, MessageCircle, Link2, TrendingUp };

export function StudentSupport() {
  return (
    <section id="how-we-help" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Help Students"
          description="A simple, repeatable four-step process that every student goes through — from the first referral to long-term follow-up."
          align="center"
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supportSteps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <li key={step.title}>
                <Card interactive className="h-full">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span
                      className="font-display text-3xl font-extrabold text-primary/15"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    <span className="sr-only">Step {index + 1}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </Card>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
