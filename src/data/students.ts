/**
 * DEMO DATA — sample student success stories.
 * Replace with real, consented stories before going live.
 */
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";
import type { SuccessStory } from "./site";

export const successStories: SuccessStory[] = [
  {
    id: "aisha",
    name: "Aisha",
    image: student1,
    background: "Grade 10 student, first person in her family to reach secondary school.",
    challenge: "Her family could not pay exam fees after her father lost work.",
    support: "Fee assistance, a study kit and weekly maths tutoring from a volunteer.",
    outcome: "Passed her board exams with 84% and is now in grade 11 science.",
  },
  {
    id: "rohan",
    name: "Rohan",
    image: student2,
    background: "First-year college student from a low-income neighbourhood.",
    challenge: "No guidance on applications and no money for the admission deposit.",
    support: "Scholarship paperwork help, a mentor and a one-time admission grant.",
    outcome: "Enrolled in a B.Sc. programme and now mentors two younger students.",
  },
  {
    id: "meera",
    name: "Meera",
    image: student3,
    background: "Grade 12 student who had never used a computer before joining a lab.",
    challenge: "Wanted to study IT but had no access to a device or internet at home.",
    support: "A place in the digital literacy lab and a refurbished laptop.",
    outcome: "Completed a basic coding course and interned with a local design studio.",
  },
];
