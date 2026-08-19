/**
 * Central content file — DEMO DATA.
 *
 * Everything the site renders (stats, programs, stories, contact details)
 * lives here so real NGO content can replace it without touching components.
 */

export const organisation = {
  name: "InAmigos Foundation",
  tagline: "Education → Opportunity → Community → Impact",
  mission:
    "Our mission is to make education more accessible to students who face financial or social barriers.",
  email: "hello@inamigosfoundation.org",
  phone: "+91 98765 43210",
  address: "2nd Floor, Community Centre, Sector 21, New Delhi 110075, India",
  socials: [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
};

export const heroStats = [
  { label: "Students Supported", value: 2450, suffix: "+" },
  { label: "Volunteers", value: 380, suffix: "+" },
  { label: "Educational Resources", value: 1200, suffix: "+" },
  { label: "Community Programs", value: 46, suffix: "" },
];

export const focusAreas = [
  {
    icon: "BookOpen",
    title: "Education Access",
    description:
      "School kits, digital learning access and after-school classes for students who would otherwise drop out.",
  },
  {
    icon: "HandCoins",
    title: "Financial Support",
    description:
      "Fee assistance and scholarship facilitation so money is never the reason a student stops studying.",
  },
  {
    icon: "Users",
    title: "Mentorship",
    description:
      "One-to-one mentors who guide students through exams, college applications and first career steps.",
  },
  {
    icon: "Sprout",
    title: "Community Development",
    description:
      "Skill workshops, health drives and parent awareness sessions that strengthen the whole neighbourhood.",
  },
] as const;

export const missionPillars = [
  "Learning resources and study material",
  "Scholarships and fee support",
  "Mentors from schools and industry",
  "Volunteers who teach every week",
  "Community programs close to home",
  "Career and skill-development opportunities",
];

export const supportSteps = [
  {
    icon: "Search",
    title: "Identify Need",
    description:
      "Community volunteers and partner schools refer students who are at risk of dropping out.",
  },
  {
    icon: "MessageCircle",
    title: "Understand the Student",
    description:
      "A short home and school conversation tells us what is really blocking the student's learning.",
  },
  {
    icon: "Link2",
    title: "Connect Resources",
    description:
      "We match the student with fee support, study material, a mentor or a learning program.",
  },
  {
    icon: "TrendingUp",
    title: "Track Progress",
    description:
      "Attendance, results and mentor notes are reviewed each term so support can be adjusted.",
  },
] as const;

export const impactMetrics = [
  { label: "Students Helped", value: 2450, suffix: "+" },
  { label: "Scholarships Facilitated", value: 610, suffix: "" },
  { label: "Volunteers", value: 380, suffix: "+" },
  { label: "Learning Programs", value: 46, suffix: "" },
  { label: "Community Partners", value: 28, suffix: "" },
];

export type SuccessStory = {
  id: string;
  name: string;
  image: string;
  background: string;
  challenge: string;
  support: string;
  outcome: string;
};

export const programs = [
  {
    title: "After-School Learning Centres",
    description:
      "Daily two-hour classes in maths, science and language for grades 6-10, run by trained volunteers.",
    reach: "18 centres · 900+ students",
  },
  {
    title: "Digital Literacy Labs",
    description:
      "Shared computer labs teaching typing, internet safety, spreadsheets and basic coding.",
    reach: "7 labs · 420 students",
  },
  {
    title: "Scholarship Facilitation",
    description:
      "Help with paperwork, documents and deadlines for government and private scholarships.",
    reach: "610 scholarships facilitated",
  },
  {
    title: "Mentorship Circles",
    description:
      "Monthly small-group mentoring with college students and working professionals.",
    reach: "240 active mentor pairs",
  },
  {
    title: "Family Assistance",
    description:
      "Emergency support with school fees, uniforms, transport and exam registration for needy families.",
    reach: "530 families reached",
  },
  {
    title: "Skill & Career Workshops",
    description:
      "Weekend sessions on resumes, interviews, spoken English and vocational skills.",
    reach: "36 workshops a year",
  },
];

export const faqs = [
  {
    question: "How is my donation used?",
    answer:
      "Demo figures: roughly 82% goes directly to student support (fees, materials, programs), 12% to program staff and 6% to administration.",
  },
  {
    question: "Can I sponsor one specific student?",
    answer:
      "Yes. Sponsorships are matched with a student from our waiting list, and you receive a progress update each term.",
  },
  {
    question: "How much time does volunteering take?",
    answer:
      "Most volunteers give two hours a week. Remote mentoring and one-off workshop slots are also available.",
  },
  {
    question: "Do you work outside Delhi?",
    answer:
      "Our centres are in Delhi NCR, and partner-run programs operate in three additional states.",
  },
  {
    question: "Are donations tax deductible?",
    answer:
      "This is a demonstration site, so no real receipts are issued. A real deployment would issue 80G receipts by email.",
  },
];
