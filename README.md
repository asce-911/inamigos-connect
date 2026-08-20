# InAmigos Connect

Create a professional, production-style NGO website for “InAmigos Foundation”, an organization focused on helping students and needy families access education, financial support, learning resources, and community assistance.

The website should look like a real client project that a junior Website Developer could have developed during an internship. Prioritize clean frontend engineering, responsive design, accessibility, reusable components, performance, and maintainable code rather than excessive visual effects.

Primary Objective

Build a complete, responsive NGO website that communicates the organization's mission clearly, encourages visitors to support students in need, and provides clear ways for volunteers, donors, students, and visitors to interact with the organization.

The website should demonstrate skills relevant to a Website Developer role:

HTML5 semantic structure

CSS3 styling

JavaScript interactions

Responsive design

Cross-browser compatibility

Reusable UI components

Form validation

Accessibility

Performance-conscious implementation

Git-friendly project structure

Clean and maintainable code

Mobile, tablet, and desktop layouts

Use React with Vite if appropriate, but keep the implementation understandable for a junior developer. Use modern JavaScript/TypeScript where useful. Do not add unnecessary backend complexity unless required for a realistic UI prototype.

Visual Direction

Create a trustworthy, modern, human-centered NGO design.

Use:

White and warm off-white backgrounds

Deep blue as the primary trust color

Orange/yellow as an accent for calls to action

Soft green for success/support indicators

Rounded cards

Subtle shadows

Professional typography

High-quality student/community imagery

Generous whitespace

Clear visual hierarchy

Avoid making the website look like a generic corporate template.

The emotional message should communicate:

Education → Opportunity → Community → Impact

Navigation

Create a responsive navigation bar with:

InAmigos Foundation logo/text

Home

About Us

Our Work

Students

Get Involved

Contact

Donate button

Desktop navigation should be horizontal.

Mobile navigation should transform into a hamburger menu with an accessible open/close interaction.

The navigation should remain easy to use on all screen sizes.

Hero Section

Create a strong hero section containing:

Heading:

“Every Student Deserves a Chance to Learn.”

Supporting text:

“We work to connect students in need with educational resources, financial support, mentorship, and opportunities that help them build a better future.”

Primary CTA:

Support a Student

Secondary CTA:

Become a Volunteer

Include a large image showing students learning or a community education activity.

Add a subtle statistic area such as:

Students Supported

Volunteers

Educational Resources

Community Programs

Use realistic placeholder values and clearly structure them as editable data.

About Section

Create an About Us section explaining:

Who InAmigos Foundation is

Why the organization exists

The problem it addresses

How it supports students

Its community-driven approach

Include 3 or 4 cards:

Education Access

Financial Support

Mentorship

Community Development

Each card should have an icon, title, and concise description.

Our Mission

Create a visually prominent section with:

“Our mission is to make education more accessible to students who face financial or social barriers.”

Explain how the organization connects students with:

Learning resources

Scholarships/support

Mentors

Volunteers

Community programs

Career and skill-development opportunities

Student Support Section

Create a section titled:

“How We Help Students”

Display the process as a simple 4-step flow:

Identify Need

Understand the Student

Connect Resources

Track Progress

Each step should have a number, icon, title, and short explanation.

Impact Section

Create an impact dashboard with visually attractive cards showing metrics such as:

Students Helped

Scholarships Facilitated

Volunteers

Learning Programs

Community Partners

Use animated counters only if they can be implemented cleanly without hurting performance.

Success Stories

Create 3 student success-story cards.

Each card should contain:

Student image

First name only

Short background

Challenge

Support received

Outcome

Clearly label the content as sample/demo data so it can later be replaced with real stories.

Get Involved Section

Create three cards:

Donate

“Help provide educational opportunities to students who need them.”

Button:

Donate Now

Volunteer

“Use your time and skills to support students and community programs.”

Button:

Join as Volunteer

Partner

“Collaborate with us to create larger educational impact.”

Button:

Become a Partner

Donation Section

Create a donation UI prototype.

Include:

Donation amount buttons

Custom amount input

Monthly / One-time toggle

Name

Email

Phone

Optional message

Donate button

Implement frontend validation.

For this prototype, do NOT pretend that real payment processing exists. Display a realistic demo confirmation rather than integrating a fake payment gateway.

Volunteer Form

Create a responsive volunteer registration form with:

Full Name

Email

Phone

City

Skills

Availability

Why do you want to volunteer?

Add proper validation and helpful error messages.

Contact Section

Include:

Email

Phone

Location

Social media links

Contact form

Embedded map placeholder

Add client-side form validation.

After successful validation, display:

“Thank you! Your message has been received.”

For the prototype, do not claim that the message is actually stored on a backend unless a real backend is implemented.

Footer

Create a professional footer containing:

InAmigos Foundation

Short mission statement

Quick links

Contact information

Social links

Privacy Policy

Terms

Copyright

Responsive Requirements

The website MUST work properly on:

320px mobile

375px mobile

425px mobile

768px tablet

1024px laptop

1440px desktop

Do not allow:

Horizontal scrolling

Broken navigation

Text overlapping

Images overflowing

Buttons becoming inaccessible

Forms breaking on mobile

Use CSS Grid and Flexbox appropriately.

Accessibility

Implement:

Semantic HTML5 elements

Proper heading hierarchy

Descriptive image alt text

Keyboard-accessible navigation

Visible focus states

Accessible form labels

Sufficient color contrast

aria-label where necessary

Reduced-motion consideration for animations

JavaScript Interactions

Implement useful frontend interactions such as:

Mobile navigation toggle

Smooth scrolling

FAQ accordion

Form validation

Donation amount selection

One-time/monthly toggle

Success/error messages

Scroll-to-top button

Active navigation state

Keep the JavaScript modular and understandable.

Performance

Optimize the website by:

Lazy-loading below-the-fold images

Using appropriately sized images

Avoiding unnecessary JavaScript

Using CSS animations where possible

Avoiding heavy animation libraries unless needed

Preventing unnecessary re-renders

Keeping the initial page lightweight

Cross-Browser Compatibility

Test the implementation conceptually for:

Chrome

Edge

Firefox

Safari

Avoid browser-specific CSS unless necessary.

Code Structure

Use a clean structure such as:

src/
components/
Navbar
Hero
About
Mission
Impact
StudentSupport
SuccessStories
GetInvolved
DonationForm
VolunteerForm
Contact
Footer

pages/
Home

data/
students
impact
programs

assets/

Keep repeated UI elements reusable.

For example, create reusable components for:

Buttons

Cards

Section headings

Form fields

Statistics

Navigation items

Technical Expectations

Use:

React

Vite

HTML5

CSS3

JavaScript/TypeScript

Git-friendly structure

Tailwind CSS may be used for styling if it improves development speed, but the final code must remain readable and maintainable.

Do NOT add MongoDB, Express, authentication, payment gateways, or external APIs unless there is a clear reason and the implementation is actually functional.

Final Quality

The final website should look like a legitimate NGO client project that could be presented during a junior Web Developer interview.

It should demonstrate that the developer understands:

turning a design requirement into a working website

responsive UI development

reusable components

JavaScript interactions

form validation

accessibility

cross-browser concerns

performance

debugging

clean code organization

Git-based development workflow

Add realistic sample content and images, but clearly structure content so that real NGO information can easily replace the demo data later.

At the end, provide:

Complete runnable source code

Installation instructions

Development commands

Production build command

Explanation of the component structure

Explanation of responsive implementation

Explanation of JavaScript functionality

Suggestions for connecting a real backend in the future

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f53c6cd0-5d00-4fa3-8eeb-ac0aacb65f8d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
