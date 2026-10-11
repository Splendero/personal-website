import { ArrowUpRight } from "lucide-react";
import { RouteStrip } from "@/components/transit/RouteStrip";
import type { Project } from "@/data/site";
import { cn } from "@/lib/utils";

const STUB_LINK = "inline-flex items-center gap-1.5 font-semibold underline-offset-4 hover:underline";
const NOTCH = "absolute right-[calc(11rem-9px)] hidden h-[18px] w-[18px] rounded-full border border-foreground/15 bg-background sm:block";

interface TicketStubProps {
  project: Project;
  number: number;
}

export const TicketStub = ({ project, number }: TicketStubProps) => {
  const { title, description, technologies, liveUrl, githubUrl, imageUrl, imageFit, route, fromResume } = project;
  const contain = imageFit === "contain";
  return (
    <article className="relative flex flex-col overflow-hidden rounded-xl border border-foreground/15 bg-card sm:flex-row">
      {imageUrl && (
        <div
          className={cn(
            "aspect-[16/9] shrink-0 overflow-hidden border-b border-foreground/10 sm:aspect-auto sm:w-56 sm:border-b-0 sm:border-r lg:w-64",
            contain ? "bg-card" : "bg-muted",
          )}
        >
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className={cn("h-full w-full", contain ? "object-contain p-5" : "object-cover")}
          />
        </div>
      )}

      <div className="min-w-0 flex-1 p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span>Admit one · Project</span>
          <span>No. {String(number).padStart(3, "0")}</span>
        </div>
        <h2 className="mt-2 text-xl font-bold sm:text-2xl">{title}</h2>
        <p className="mt-2 max-w-prose leading-relaxed text-muted-foreground">{description}</p>
        {route && (
          <div className="mt-4">
            <RouteStrip stops={route} line={1} label={`How ${title} works`} />
          </div>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Fare</span>
          {technologies.map((tech) => (
            <span key={tech} className="rounded border border-foreground/15 px-2 py-0.5 font-mono text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 flex-row flex-wrap items-center gap-x-5 gap-y-2 border-t-2 border-dashed border-foreground/20 px-5 py-4 sm:w-44 sm:flex-col sm:flex-nowrap sm:items-start sm:justify-center sm:border-l-2 sm:border-t-0">
        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={STUB_LINK}>
            Live site <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={STUB_LINK}>
            Source <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        )}
        {fromResume && (
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">From my resume</span>
        )}
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
          Valid on all lines
        </span>
      </div>

      <span aria-hidden="true" className={`${NOTCH} -top-[9px]`} />
      <span aria-hidden="true" className={`${NOTCH} -bottom-[9px]`} />
    </article>
  );
};
