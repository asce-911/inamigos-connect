import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";

const title = "Terms of Use — InAmigos Foundation";
const description =
  "Terms covering use of the InAmigos Foundation website, its demo content and its prototype donation interface.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of Use" description="Last updated: sample text for demonstration." />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-lg font-bold text-foreground">Demonstration content</h2>
            <p className="mt-2">
              Statistics, programmes and student stories on this site are sample data created for a
              portfolio prototype. They do not represent verified figures or real individuals.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Donations</h2>
            <p className="mt-2">
              The donation interface is a front-end prototype. No payment gateway is connected, no
              card details are collected, and no funds are transferred.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Acceptable use</h2>
            <p className="mt-2">
              Please do not attempt to disrupt the site, submit unlawful content through the forms,
              or reuse the imagery and copy as if it represented a real organisation.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
