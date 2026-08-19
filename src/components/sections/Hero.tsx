import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui-kit/Button";
import { StatCard } from "@/components/ui-kit/StatCard";
import { heroStats } from "@/data/site";
import heroImage from "@/assets/hero-students.jpg";

export function Hero() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="animate-fade-up">
          <p className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-accent-foreground">
            Education → Opportunity → Community
          </p>
          <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] text-foreground sm:text-4xl lg:text-5xl">
            Every Student Deserves a Chance to Learn.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We work to connect students in need with educational resources, financial support,
            mentorship, and opportunities that help them build a better future.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link to="/get-involved" hash="donate">
                Support a Student
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/get-involved" hash="volunteer">
                Become a Volunteer
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="Students studying together around a table at a community learning centre"
            width={1600}
            height={1104}
            fetchPriority="high"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-card-hover)]"
          />
        </div>
      </div>

      <div className="container-page pb-12 lg:pb-16">
        <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8 lg:grid-cols-4">
          {heroStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </dl>
      </div>
    </section>
  );
}
