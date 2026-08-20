/**
 * Shared client-side validation helpers.
 * Kept framework-free and simple so the rules are easy to read and reuse.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_RE = /^[0-9+\-\s()]{8,16}$/;

export type DonationValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
  amount: number;
};

export type VolunteerValues = {
  name: string;
  email: string;
  phone: string;
  city: string;
  skills: string;
  availability: string;
  motivation: string;
};

export type ContactValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Errors<T> = Partial<Record<keyof T, string>>;

function required(value: string, label: string) {
  return value.trim() ? undefined : `${label} is required.`;
}

function email(value: string) {
  if (!value.trim()) return "Email is required.";
  return EMAIL_RE.test(value.trim()) ? undefined : "Enter a valid email address.";
}

function phone(value: string) {
  if (!value.trim()) return "Phone number is required.";
  return PHONE_RE.test(value.trim()) ? undefined : "Enter a valid phone number.";
}

function assign<T>(errors: Errors<T>, key: keyof T, message?: string) {
  if (message) errors[key] = message;
}

export function validateDonation(values: DonationValues) {
  const errors: Errors<DonationValues> = {};
  assign(errors, "name", required(values.name, "Name"));
  assign(errors, "email", email(values.email));
  assign(errors, "phone", phone(values.phone));
  if (!values.amount || Number.isNaN(values.amount) || values.amount < 100) {
    errors.amount = "Choose a preset or enter an amount of at least ₹100.";
  }
  if (values.message.length > 500) errors.message = "Please keep the message under 500 characters.";
  return { errors };
}

export function validateVolunteer(values: VolunteerValues) {
  const errors: Errors<VolunteerValues> = {};
  assign(errors, "name", required(values.name, "Full name"));
  assign(errors, "email", email(values.email));
  assign(errors, "phone", phone(values.phone));
  assign(errors, "city", required(values.city, "City"));
  assign(errors, "skills", required(values.skills, "Skills"));
  assign(errors, "availability", required(values.availability, "Availability"));
  if (values.motivation.trim().length < 20) {
    errors.motivation = "Please write at least 20 characters so we can match you well.";
  } else if (values.motivation.length > 800) {
    errors.motivation = "Please keep your answer under 800 characters.";
  }
  return { errors };
}

export function validateContact(values: ContactValues) {
  const errors: Errors<ContactValues> = {};
  assign(errors, "name", required(values.name, "Name"));
  assign(errors, "email", email(values.email));
  assign(errors, "subject", required(values.subject, "Subject"));
  if (values.message.trim().length < 10) {
    errors.message = "Please write at least 10 characters.";
  } else if (values.message.length > 1000) {
    errors.message = "Please keep your message under 1000 characters.";
  }
  return { errors };
}
