import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui-kit/Button";

/** Reusable closing call-to-action used at the end of most pages. */
export function CtaBanner() {
  return (
    <section className="section-y">
      <div className="container-page">
        <div className="rounded-3xl bg-accent-soft px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">
            One student, one term, one decision away.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Your support keeps a student in class, with the books, fees and mentoring they need.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="accent" size="lg">
              <Link to="/get-involved" hash="donate">
                Support a Student
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Talk to the team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
