import { ArrowUpRight, Download, ExternalLink } from "lucide-react";
import { MetroMap } from "@/components/transit/MetroMap";
import { StationSign } from "@/components/transit/StationSign";
import { CONTACT, RESUME, type ResumeEntry } from "@/data/site";

const SECTION_LABEL = "font-mono text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground";

const Entry = ({ entry }: { entry: ResumeEntry }) => (
  <li className="grid gap-x-8 gap-y-1 border-t border-foreground/10 py-6 md:grid-cols-[11rem_1fr]">
    <p className="font-mono text-sm text-muted-foreground">{entry.dates}</p>
    <div>
      <h3 className="text-lg font-bold">
        {entry.url ? (
          <a href={entry.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
            {entry.org} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        ) : (
          entry.org
        )}
      </h3>
      <p className="text-muted-foreground">{entry.role}</p>
      {entry.note && <p className="text-sm text-muted-foreground">{entry.note}</p>}
      <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed marker:text-muted-foreground">
        {entry.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  </li>
);

const Resume = () => (
  <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-8 sm:pt-14">
    <StationSign
      line={4}
      name="Resume"
      subtitle="Updated September 2026. The map shows how everything connects; the full timetable is below."
    />

    <div className="mt-6 flex flex-wrap gap-3 print:hidden">
      <a
        href={CONTACT.resumePdf}
        download="SpencerOsbornResume.pdf"
        className="inline-flex items-center gap-2 rounded-md bg-sign px-4 py-2.5 font-semibold text-sign-foreground transition-opacity hover:opacity-90"
      >
        <Download aria-hidden="true" className="h-4 w-4" /> Download PDF
      </a>
      <a
        href={CONTACT.resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-md border border-foreground/20 bg-card px-4 py-2.5 font-semibold transition-colors hover:bg-muted"
      >
        <ExternalLink aria-hidden="true" className="h-4 w-4" /> Open PDF
      </a>
    </div>

    <section aria-labelledby="map-heading" className="mt-10 rounded-xl border border-foreground/15 bg-card p-4 sm:p-6 print:hidden">
      <h2 id="map-heading" className={SECTION_LABEL}>
        Career map
      </h2>
      <div className="mt-3">
        <MetroMap />
      </div>
    </section>

    <article className="mt-14">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Spencer Osborn</h2>
          <p className="mt-1 text-muted-foreground">{RESUME.headline}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <li>
            <a href={`mailto:${CONTACT.email}`} className="underline underline-offset-4">
              {CONTACT.email}
            </a>
          </li>
          <li>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
              GitHub
            </a>
          </li>
        </ul>
      </header>

      <section aria-labelledby="experience-heading" className="mt-10">
        <h2 id="experience-heading" className={SECTION_LABEL}>
          Work experience
        </h2>
        <ul className="mt-3">
          {RESUME.experience.map((entry) => (
            <Entry key={entry.org} entry={entry} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="team-heading" className="mt-10">
        <h2 id="team-heading" className={SECTION_LABEL}>
          Design team
        </h2>
        <ul className="mt-3">
          {RESUME.designTeam.map((entry) => (
            <Entry key={entry.org} entry={entry} />
          ))}
        </ul>
      </section>

      <section aria-labelledby="education-heading" className="mt-10">
        <h2 id="education-heading" className={SECTION_LABEL}>
          Education
        </h2>
        <div className="mt-3 grid gap-x-8 gap-y-1 border-t border-foreground/10 py-6 md:grid-cols-[11rem_1fr]">
          <p className="font-mono text-sm text-muted-foreground">{RESUME.education.dates}</p>
          <div>
            <h3 className="text-lg font-bold">{RESUME.education.school}</h3>
            <p className="text-muted-foreground">{RESUME.education.degree}</p>
            <p className="mt-2 leading-relaxed">{RESUME.education.note}</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="mt-10">
        <h2 id="projects-heading" className={SECTION_LABEL}>
          Personal projects
        </h2>
        <ul className="mt-3">
          {RESUME.projects.map((project) => (
            <li key={project.name} className="grid gap-x-8 gap-y-1 border-t border-foreground/10 py-6 md:grid-cols-[11rem_1fr]">
              <span aria-hidden="true" className="hidden md:block" />
              <div>
                <h3 className="text-lg font-bold">
                  {project.url ? (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
                      {project.name} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed marker:text-muted-foreground">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="skills-heading" className="mt-10">
        <h2 id="skills-heading" className={SECTION_LABEL}>
          Technical skills and interests
        </h2>
        <dl className="mt-3">
          {RESUME.skills.map((skill) => (
            <div key={skill.label} className="grid gap-x-8 gap-y-1 border-t border-foreground/10 py-4 md:grid-cols-[11rem_1fr]">
              <dt className="font-semibold">{skill.label}</dt>
              <dd className="leading-relaxed text-muted-foreground">{skill.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  </div>
);

export default Resume;
