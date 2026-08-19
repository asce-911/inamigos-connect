import { BookOpen, HandCoins, Users, Sprout } from "lucide-react";
import { Card } from "@/components/ui-kit/Card";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { focusAreas } from "@/data/site";
import communityImage from "@/assets/community-program.jpg";

const icons = { BookOpen, HandCoins, Users, Sprout };

export function About() {
  return (
    <section id="about" className="section-y">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <img
            src={communityImage}
            alt="A volunteer teaching a small group of children in a community classroom"
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A community-driven foundation for students who need a hand"
              description="InAmigos Foundation is a volunteer-led non-profit working with students and families in under-resourced neighbourhoods. Too many capable students stop studying because of school fees, missing study material, or simply because nobody at home has been through the system before."
            />
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              We exist to remove those practical barriers. Every student we support is referred by
              a teacher, a volunteer or a neighbour, understood as an individual, and then matched
              with the exact help they need — fees, resources, a mentor, or a place in a learning
              programme. Because our teams live in the same communities, support arrives quickly
              and stays consistent.
            </p>
          </div>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => {
            const Icon = icons[area.icon];
            return (
              <li key={area.title}>
                <Card interactive className="h-full">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </Card>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
