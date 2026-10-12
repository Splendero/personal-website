import { FileText, Github, Info, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "@/data/site";

const LINKS = [
  { label: "Email", href: `mailto:${CONTACT.email}`, icon: Mail, external: false },
  { label: "LinkedIn", href: CONTACT.linkedin, icon: Linkedin, external: true },
  { label: "GitHub", href: CONTACT.github, icon: Github, external: true },
  { label: "Resume (PDF)", href: CONTACT.resumePdf, icon: FileText, external: true },
];

export const HelpPoint = () => (
  <footer className="mt-24 bg-sign text-sign-foreground print:hidden">
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-line-1 text-line-1-ink">
            <Info aria-hidden="true" className="h-5 w-5" />
          </span>
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em]">Help point</p>
            <p className="text-sign-muted">Want to get in touch? Pick a line.</p>
          </div>
        </div>
        <ul className="flex flex-wrap gap-3">
          {LINKS.map(({ label, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="inline-flex items-center gap-2 rounded-md border border-sign-foreground/25 px-4 py-2 font-semibold transition-colors hover:bg-white/10"
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-col gap-2 border-t border-sign-foreground/15 pt-6 text-sm text-sign-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Spencer Osborn</p>
        <p className="hidden sm:block">Press 1–4 to change lines · 0 for home</p>
      </div>
    </div>
  </footer>
);
