import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/About";
import { Mission } from "@/components/sections/Mission";
import { StudentSupport } from "@/components/sections/StudentSupport";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PageHeader } from "@/components/layout/PageHeader";

const title = "About Us — InAmigos Foundation";
const description =
  "Who we are, why InAmigos Foundation exists, and how our community-driven teams support students facing financial and social barriers.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A foundation built by the community it serves"
        description="We are volunteers, teachers, parents and professionals working to keep students in education."
      />
      <About />
      <Mission />
      <StudentSupport />
      <CtaBanner />
    </>
  );
}
