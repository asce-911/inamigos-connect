import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Mission } from "@/components/sections/Mission";
import { StudentSupport } from "@/components/sections/StudentSupport";
import { Impact } from "@/components/sections/Impact";
import { SuccessStories } from "@/components/sections/SuccessStories";
import { GetInvolvedCards } from "@/components/sections/GetInvolvedCards";
import { Faq } from "@/components/sections/Faq";

const title = "InAmigos Foundation — Every Student Deserves a Chance to Learn";
const description =
  "InAmigos Foundation connects students in need with educational resources, financial support, mentorship and community programs.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <StudentSupport />
      <Impact />
      <SuccessStories />
      <GetInvolvedCards />
      <Faq />
    </>
  );
}
