import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";

const title = "Privacy Policy — InAmigos Foundation";
const description =
  "How InAmigos Foundation handles personal information submitted through donation, volunteer and contact forms.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="Last updated: sample text for demonstration." />
      <section className="section-y">
        <div className="container-page max-w-3xl space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            This website is a demonstration prototype. The donation, volunteer and contact forms
            validate input in your browser only — no information is transmitted to a server or
            stored anywhere.
          </p>
          <div>
            <h2 className="text-lg font-bold text-foreground">Information we would collect</h2>
            <p className="mt-2">
              In a live deployment we would collect names, email addresses, phone numbers and any
              message text you choose to submit, solely to respond to your enquiry or process a
              donation.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">How it would be used</h2>
            <p className="mt-2">
              Information would be used to acknowledge donations, match volunteers to programmes,
              and reply to enquiries. It would never be sold, and would be shared with payment or
              email providers only as needed to deliver the service.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Your choices</h2>
            <p className="mt-2">
              You could request access to, correction of, or deletion of your data at any time by
              writing to the contact address on our Contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
