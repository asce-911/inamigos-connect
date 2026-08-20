import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { GetInvolvedCards } from "@/components/sections/GetInvolvedCards";
import { DonationForm } from "@/components/sections/DonationForm";
import { VolunteerForm } from "@/components/sections/VolunteerForm";
import { Card } from "@/components/ui-kit/Card";
import { Button } from "@/components/ui-kit/Button";
import { Link } from "@tanstack/react-router";

const title = "Get Involved — Donate, Volunteer, Partner | InAmigos Foundation";
const description =
  "Donate to fund a student's term, volunteer two hours a week, or partner with InAmigos Foundation to widen educational impact.";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Support students in the way that suits you"
        description="Give funds, give time, or bring your organisation on board as a partner."
      />
      <GetInvolvedCards />
      <DonationForm />
      <VolunteerForm />

      <section id="partner" className="section-y bg-surface scroll-mt-24">
        <div className="container-page">
          <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-foreground">Partner with us</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Schools, companies and community groups partner with us on CSR-funded learning
                centres, employee mentoring, device donations and internship pathways. Write to us
                and we will share a programme deck and impact reporting sample.
              </p>
            </div>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Start a conversation</Link>
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
}
