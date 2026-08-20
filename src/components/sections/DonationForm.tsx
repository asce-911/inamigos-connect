import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui-kit/Button";
import { Card } from "@/components/ui-kit/Card";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { TextField, TextAreaField } from "@/components/ui-kit/FormField";
import { FormStatus } from "@/components/ui-kit/FormStatus";
import { cn } from "@/lib/utils";
import { validateDonation, type DonationValues } from "@/lib/validation";

const PRESET_AMOUNTS = [500, 1000, 2500, 5000];

/**
 * Donation UI prototype.
 * No payment gateway is connected — submitting shows a demo confirmation only.
 */
export function DonationForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [amount, setAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof DonationValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const effectiveAmount = customAmount ? Number(customAmount) : amount;

  const update = (field: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setSubmitted(false);
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = validateDonation({ ...values, amount: effectiveAmount ?? 0 });
    setErrors(result.errors);
    if (Object.keys(result.errors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  }

  return (
    <section id="donate" className="section-y bg-surface scroll-mt-24">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Donate"
            title="Support a student this term"
            description="₹1,000 covers a term of study material for one student. ₹5,000 covers exam fees and a full year of after-school classes."
          />
          <Card className="mt-8 bg-primary-soft">
            <h3 className="text-base font-bold text-primary">Where donations go</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>82% — direct student support (fees, materials, programmes)</li>
              <li>12% — programme staff and centre running costs</li>
              <li>6% — administration and reporting</li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Demonstration figures only.
            </p>
          </Card>
        </div>

        <Card className="p-6 sm:p-8">
          <form onSubmit={handleSubmit} noValidate>
            {/* Frequency toggle */}
            <fieldset>
              <legend className="text-sm font-semibold text-foreground">Donation frequency</legend>
              <div
                role="group"
                className="mt-2 grid grid-cols-2 gap-1 rounded-full bg-muted p-1"
              >
                {(["one-time", "monthly"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={frequency === option}
                    onClick={() => setFrequency(option)}
                    className={cn(
                      "min-h-10 rounded-full px-4 text-sm font-semibold capitalize transition-colors",
                      frequency === option
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {option === "one-time" ? "One-time" : "Monthly"}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Amount selection */}
            <fieldset className="mt-6">
              <legend className="text-sm font-semibold text-foreground">Choose an amount (₹)</legend>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {PRESET_AMOUNTS.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    aria-pressed={!customAmount && amount === preset}
                    onClick={() => {
                      setAmount(preset);
                      setCustomAmount("");
                    }}
                    className={cn(
                      "min-h-11 rounded-xl border-2 text-sm font-bold transition-colors",
                      !customAmount && amount === preset
                        ? "border-accent bg-accent-soft text-accent-foreground"
                        : "border-border bg-card text-foreground hover:border-primary/40",
                    )}
                  >
                    ₹{preset.toLocaleString()}
                  </button>
                ))}
              </div>
            </fieldset>

            <TextField
              className="mt-4"
              label="Custom amount (₹)"
              type="number"
              inputMode="numeric"
              min={100}
              placeholder="Enter another amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount(null);
              }}
              error={errors.amount}
              hint="Minimum ₹100."
            />

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
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
            </div>

            <TextField
              className="mt-4"
              label="Phone"
              type="tel"
              required
              autoComplete="tel"
              value={values.phone}
              onChange={update("phone")}
              error={errors.phone}
              hint="10-digit mobile number."
            />

            <TextAreaField
              className="mt-4"
              label="Message (optional)"
              value={values.message}
              onChange={update("message")}
              error={errors.message}
              placeholder="Tell us if you would like your donation directed to a specific programme."
            />

            <Button type="submit" variant="accent" size="lg" full className="mt-6">
              Donate {effectiveAmount ? `₹${Number(effectiveAmount).toLocaleString()}` : ""}{" "}
              {frequency === "monthly" ? "monthly" : ""}
            </Button>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              This is a front-end prototype. No payment is processed and no card details are collected.
            </p>

            {submitted && (
              <FormStatus tone="success" className="mt-4">
                Demo confirmation: a {frequency} donation of ₹
                {Number(effectiveAmount).toLocaleString()} would be recorded for {values.name}. No
                real transaction has taken place.
              </FormStatus>
            )}
          </form>
        </Card>
      </div>
    </section>
  );
}
