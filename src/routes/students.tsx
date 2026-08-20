import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { StudentSupport } from "@/components/sections/StudentSupport";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Card } from "@/components/ui-kit/Card";
import { Button } from "@/components/ui-kit/Button";
import { Link } from "@tanstack/react-router";

const title = "Students — Support and Success Stories | InAmigos Foundation";
const description =
  "How students apply for support, what help is available, and sample stories of students supported by InAmigos Foundation.";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: StudentsPage,
});

const eligibility = [
  "Currently enrolled in grades 6-12 or first-year college",
  "Household facing financial difficulty",
  "Referred by a teacher, volunteer or community member",
  "Willing to attend classes or mentoring regularly",
];

function StudentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Students"
        title="Support for students who want to keep studying"
        description="If fees, materials or guidance are standing between you and your next school year, we can help."
      />

      <section className="section-y">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-foreground">Who we can support</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {eligibility.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
          <Card className="bg-primary-soft">
            <h2 className="text-xl font-bold text-primary">How to request support</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Send us a message with the student's grade, school and what kind of help is needed.
              A coordinator will get in touch within two working days to arrange a short
              conversation.
            </p>
            <Button asChild className="mt-6">
              <Link to="/contact">Request support</Link>
            </Button>
          </Card>
        </div>
      </section>

      <StudentSupport />
      <SuccessStories />
      <Faq />
      <CtaBanner />
    </>
  );
}
