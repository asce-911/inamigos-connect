import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui-kit/Button";
import { Card } from "@/components/ui-kit/Card";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { TextField, TextAreaField, SelectField } from "@/components/ui-kit/FormField";
import { FormStatus } from "@/components/ui-kit/FormStatus";
import { validateVolunteer, type VolunteerValues } from "@/lib/validation";

const EMPTY: VolunteerValues = {
  name: "",
  email: "",
  phone: "",
  city: "",
  skills: "",
  availability: "",
  motivation: "",
};

/** Volunteer registration form — validated on the client, no backend attached. */
export function VolunteerForm() {
  const [values, setValues] = useState<VolunteerValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof VolunteerValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (field: keyof VolunteerValues) => (e: { target: { value: string } }) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setSubmitted(false);
    };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateVolunteer(values);
    setErrors(result.errors);
    if (Object.keys(result.errors).length === 0) {
      setSubmitted(true);
      setValues(EMPTY);
    }
  }

  return (
    <section id="volunteer" className="section-y scroll-mt-24">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Volunteer"
            title="Give two hours a week, change a student's year"
            description="Teach a subject, mentor a student, help at weekend workshops, or support us remotely with design, translation or admin."
          />
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li>• Weekday evening classes at a centre near you</li>
            <li>• Remote one-to-one mentoring (video call)</li>
            <li>• Weekend skills and career workshops</li>
            <li>• Behind-the-scenes help: content, data, design</li>
          </ul>
        </div>

        <Card className="p-6 sm:p-8">
          <h3 className="text-lg font-bold text-foreground">Volunteer registration</h3>
          <form onSubmit={handleSubmit} noValidate className="mt-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField
                label="Full name"
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
              <TextField
                label="Phone"
                type="tel"
                required
                autoComplete="tel"
                value={values.phone}
                onChange={update("phone")}
                error={errors.phone}
              />
              <TextField
                label="City"
                required
                autoComplete="address-level2"
                value={values.city}
                onChange={update("city")}
                error={errors.city}
              />
            </div>

            <TextField
              className="mt-4"
              label="Skills"
              required
              placeholder="e.g. Maths tutoring, spoken English, graphic design"
              value={values.skills}
              onChange={update("skills")}
              error={errors.skills}
            />

            <SelectField
              className="mt-4"
              label="Availability"
              required
              value={values.availability}
              onChange={update("availability")}
              error={errors.availability}
            >
              <option value="">Select availability</option>
              <option value="weekday-mornings">Weekday mornings</option>
              <option value="weekday-evenings">Weekday evenings</option>
              <option value="weekends">Weekends</option>
              <option value="remote-flexible">Remote / flexible</option>
            </SelectField>

            <TextAreaField
              className="mt-4"
              label="Why do you want to volunteer?"
              required
              rows={5}
              value={values.motivation}
              onChange={update("motivation")}
              error={errors.motivation}
              hint="A couple of sentences is enough."
            />

            <Button type="submit" size="lg" full className="mt-6">
              Submit application
            </Button>

            {submitted && (
              <FormStatus tone="success" className="mt-4">
                Thank you! Your volunteer application has been validated. In this prototype it is
                not sent anywhere yet.
              </FormStatus>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
