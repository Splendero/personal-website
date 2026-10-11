import { StationSign } from "@/components/transit/StationSign";
import { TicketStub } from "@/components/transit/TicketStub";
import { PROJECTS, PROJECTS_INTRO, SKILL_GROUPS } from "@/data/site";

const Projects = () => (
  <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-8 sm:pt-14">
    <StationSign line={1} name="Projects" subtitle={PROJECTS_INTRO} />

    <ol className="mt-10 space-y-6">
      {PROJECTS.map((project, i) => (
        <li key={project.title}>
          <TicketStub project={project} number={i + 1} />
        </li>
      ))}
    </ol>

    <section aria-labelledby="skills-heading" className="mt-16">
      <h2 id="skills-heading" className="text-2xl font-bold sm:text-3xl">
        Technologies &amp; skills
      </h2>
      <p className="mt-2 text-muted-foreground">Transfers available at every stop.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group) => (
          <div key={group.name} className="overflow-hidden rounded-lg border border-foreground/15 bg-card">
            <h3 className="bg-sign px-4 py-2.5 font-bold text-sign-foreground">{group.name}</h3>
            <ul className="divide-y divide-foreground/10">
              {group.items.map((item) => (
                <li key={item} className="px-4 py-2.5">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Projects;
