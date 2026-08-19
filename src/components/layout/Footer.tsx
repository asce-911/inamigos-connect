import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, HeartHandshake } from "lucide-react";
import { organisation } from "@/data/site";
import { navItems } from "./Navbar";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary-foreground/10">
              <HeartHandshake className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-extrabold">InAmigos Foundation</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            {organisation.mission}
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="text-sm font-bold uppercase tracking-wider">Quick links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/80 underline-offset-4 hover:text-primary-foreground hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${organisation.email}`} className="hover:underline">
                {organisation.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${organisation.phone.replace(/\s/g, "")}`} className="hover:underline">
                {organisation.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{organisation.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider">Follow us</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {organisation.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-primary-foreground/80 underline-offset-4 hover:text-primary-foreground hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-primary-foreground/75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} InAmigos Foundation. Demo project — sample content.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
