import type { JourneyLeg } from "@/data/site";
import { lineColor } from "@/lib/lines";

interface JourneyPlannerProps {
  from: string;
  to: string;
  summary: string;
  legs: JourneyLeg[];
}

export const JourneyPlanner = ({ from, to, summary, legs }: JourneyPlannerProps) => (
  <div className="rounded-xl border border-foreground/15 bg-card p-5 sm:p-6">
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <p className="text-lg font-bold">
        {from} <span aria-hidden="true">→</span>
        <span className="sr-only">to</span> {to}
      </p>
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{summary}</p>
    </div>

    <ol className="mt-5">
      {legs.map((leg) => {
        const color = leg.line ? lineColor(leg.line) : "hsl(var(--muted-foreground))";
        return (
          <li key={leg.title} className="grid grid-cols-[1.5rem_1fr] gap-x-3 sm:grid-cols-[1.5rem_1fr_auto]">
            <div aria-hidden="true" className="flex flex-col items-center">
              <span className="mt-1 h-3.5 w-3.5 rounded-full border-[3px] bg-card" style={{ borderColor: color }} />
              <span
                className="w-0 flex-1"
                style={{ borderLeft: leg.line ? `4px solid ${color}` : `3px dotted ${color}`, minHeight: "2rem" }}
              />
            </div>
            <div className="pb-6">
              <div className="flex items-center gap-2">
                <span className="rounded border border-foreground/20 px-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  {leg.mode}
                </span>
                <h3 className="font-bold">{leg.title}</h3>
              </div>
              <p className="mt-1.5 leading-relaxed text-muted-foreground">{leg.body}</p>
              {leg.duration && (
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground sm:hidden">
                  {leg.duration}
                </p>
              )}
            </div>
            <p className="hidden pt-0.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground sm:block">
              {leg.duration}
            </p>
          </li>
        );
      })}
      <li className="grid grid-cols-[1.5rem_1fr] gap-x-3">
        <span aria-hidden="true" className="mx-auto h-4 w-4 rounded-full bg-foreground" />
        <p className="font-bold leading-4">Arrive: {to.toLowerCase()}</p>
      </li>
    </ol>
  </div>
);
