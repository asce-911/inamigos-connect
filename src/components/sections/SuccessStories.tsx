import { Card } from "@/components/ui-kit/Card";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { successStories } from "@/data/students";

export function SuccessStories() {
  return (
    <section id="stories" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading
          eyebrow="Success Stories"
          title="Students whose year turned around"
          description="Sample stories used for demonstration. Real, consented student stories will replace these before launch."
          align="center"
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {successStories.map((story) => (
            <li key={story.id}>
              <Card interactive className="flex h-full flex-col overflow-hidden p-0">
                <img
                  src={story.image}
                  alt={`Portrait of ${story.name}, a student supported by the foundation`}
                  width={800}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-foreground">{story.name}</h3>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Demo story
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{story.background}</p>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="font-semibold text-foreground">Challenge</dt>
                      <dd className="text-muted-foreground">{story.challenge}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Support received</dt>
                      <dd className="text-muted-foreground">{story.support}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-success">Outcome</dt>
                      <dd className="text-muted-foreground">{story.outcome}</dd>
                    </div>
                  </dl>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
