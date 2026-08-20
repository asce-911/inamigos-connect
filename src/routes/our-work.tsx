import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui-kit/Card";
import { Impact } from "@/components/sections/Impact";
import { StudentSupport } from "@/components/sections/StudentSupport";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { programs } from "@/data/site";

const title = "Our Work — Programs and Impact | InAmigos Foundation";
const description =
  "Learning centres, digital literacy labs, scholarship facilitation, mentorship circles and family assistance programs run by InAmigos Foundation.";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: OurWorkPage,
});

function OurWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Programs that keep students learning"
        description="Six core programs, all run locally with volunteers and partner schools."
      />

      <section className="section-y">
        <div className="container-page">
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program) => (
              <li key={program.title}>
                <Card interactive className="h-full">
                  <h2 className="text-lg font-bold text-foreground">{program.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                  <p className="mt-4 inline-flex rounded-full bg-success-soft px-3 py-1 text-xs font-semibold text-success">
                    {program.reach}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StudentSupport />
      <Impact />
      <CtaBanner />
    </>
  );
}
