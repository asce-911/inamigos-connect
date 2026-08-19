import { Check } from "lucide-react";
import { missionPillars, organisation } from "@/data/site";

export function Mission() {
  return (
    <section id="mission" className="section-y bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground/70">
            Our Mission
          </p>
          <h2 className="mt-4 text-2xl font-extrabold leading-snug sm:text-3xl lg:text-[2.4rem]">
            “{organisation.mission}”
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/85">
            We do that by acting as the bridge between a student and the support that already
            exists around them — schools, scholarship schemes, professionals willing to mentor,
            and neighbours willing to teach.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {missionPillars.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-primary-foreground/10 px-4 py-3 text-sm"
            >
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
