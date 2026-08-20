import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { Faq } from "@/components/sections/Faq";

const title = "Contact — InAmigos Foundation";
const description =
  "Email, phone, office location and a contact form for donations, volunteering, student support and partnerships.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We would love to hear from you"
        description="Students, volunteers, donors and partners — every message reaches the same small team."
      />
      <ContactSection />
      <Faq />
    </>
  );
}
