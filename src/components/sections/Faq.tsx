import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { faqs } from "@/data/site";
import { cn } from "@/lib/utils";

/** Accessible accordion built with native buttons + aria-expanded. */
export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y bg-surface">
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" align="center" />

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-foreground hover:bg-primary-soft/60"
                  >
                    {faq.question}
                    <ChevronDown
                      className={cn(
                        "size-5 shrink-0 text-primary transition-transform duration-200",
                        open && "rotate-180",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  hidden={!open}
                  className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
