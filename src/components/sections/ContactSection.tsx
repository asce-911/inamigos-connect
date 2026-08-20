import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui-kit/Button";
import { Card } from "@/components/ui-kit/Card";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { TextField, TextAreaField } from "@/components/ui-kit/FormField";
import { FormStatus } from "@/components/ui-kit/FormStatus";
import { organisation } from "@/data/site";
import { validateContact, type ContactValues } from "@/lib/validation";

const EMPTY: ContactValues = { name: "", email: "", subject: "", message: "" };

export function ContactSection() {
  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof ContactValues) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setSubmitted(false);
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateContact(values);
    setErrors(result.errors);
    if (Object.keys(result.errors).length === 0) {
      setSubmitted(true);
      setValues(EMPTY);
    }
  }

  return (
    <section id="contact" className="section-y scroll-mt-24">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to the team"
            description="Questions about supporting a student, volunteering, or partnering with us? We reply within two working days."
          />

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <a
                  href={`mailto:${organisation.email}`}
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                >
                  {organisation.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Phone</p>
                <a
                  href={`tel:${organisation.phone.replace(/\s/g, "")}`}
                  className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                >
                  {organisation.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">{organisation.address}</p>
              </div>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-sm font-semibold text-foreground">Social media</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {organisation.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-medium text-primary hover:bg-primary-soft"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map placeholder — swap for an embedded map iframe when a key is available. */}
          <div
            role="img"
            aria-label="Map placeholder showing the foundation's office location in New Delhi"
            className="mt-6 flex aspect-[16/9] w-full items-center justify-center rounded-2xl border border-dashed border-border bg-muted text-sm text-muted-foreground"
          >
            Map placeholder — embed added at launch
          </div>
        </div>

        <Card className="p-6 sm:p-8">
          <h3 className="text-lg font-bold text-foreground">Send us a message</h3>
          <form onSubmit={handleSubmit} noValidate className="mt-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField
                label="Name"
                required
                autoComplete="name"
                value={values.name}
                onChange={update("name")}
                error={errors.name}
              />
              <TextField
                label="Email"
                type="email"
                required
                autoComplete="email"
                value={values.email}
                onChange={update("email")}
                error={errors.email}
              />
            </div>
            <TextField
              className="mt-4"
              label="Subject"
              required
              value={values.subject}
              onChange={update("subject")}
              error={errors.subject}
            />
            <TextAreaField
              className="mt-4"
              label="Message"
              required
              rows={6}
              value={values.message}
              onChange={update("message")}
              error={errors.message}
            />
            <Button type="submit" size="lg" full className="mt-6">
              Send message
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">
              Prototype form: messages are validated in the browser and are not stored or emailed yet.
            </p>
            {submitted && (
              <FormStatus tone="success" className="mt-4">
                Thank you! Your message has been received.
              </FormStatus>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
