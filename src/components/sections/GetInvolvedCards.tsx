import { Link } from "@tanstack/react-router";
import { Heart, HandHeart, Handshake } from "lucide-react";
import { Button } from "@/components/ui-kit/Button";
import { Card } from "@/components/ui-kit/Card";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";

const options = [
  {
    icon: Heart,
    title: "Donate",
    description: "Help provide educational opportunities to students who need them.",
    cta: "Donate Now",
    hash: "donate",
  },
  {
    icon: HandHeart,
    title: "Volunteer",
    description: "Use your time and skills to support students and community programs.",
    cta: "Join as Volunteer",
    hash: "volunteer",
  },
  {
    icon: Handshake,
    title: "Partner",
    description: "Collaborate with us to create larger educational impact.",
    cta: "Become a Partner",
    hash: "partner",
  },
] as const;

export function GetInvolvedCards() {
  return (
    <section id="get-involved" className="section-y">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get Involved"
          title="Three ways to support a student today"
          align="center"
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {options.map((option) => (
            <li key={option.title}>
              <Card interactive className="flex h-full flex-col items-start">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent-soft text-accent-foreground">
                  <option.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-foreground">{option.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {option.description}
                </p>
                <Button asChild variant={option.hash === "donate" ? "accent" : "outline"} className="mt-6">
                  <Link to="/get-involved" hash={option.hash}>
                    {option.cta}
                  </Link>
                </Button>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
