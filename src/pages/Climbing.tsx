import { useState } from "react";
import { MapPin, Calendar, Play } from "lucide-react";
import { CorridorMap } from "@/components/transit/CorridorMap";
import { GradeLine } from "@/components/transit/GradeLine";
import { ServiceInfo } from "@/components/transit/ServiceInfo";
import { StationSign } from "@/components/transit/StationSign";
import { CLIMB_STATS, CLIMBING_INTRO, CLIMBS, GRADE_MILESTONES } from "@/data/site";
import { cn } from "@/lib/utils";

const Climbing = () => {
  const [selectedId, setSelectedId] = useState(CLIMBS[0].id);

  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-8 sm:pt-14">
      <StationSign line={3} name="Climbing" subtitle={CLIMBING_INTRO} />

      <section aria-labelledby="grade-line-heading" className="mt-10 rounded-xl border border-foreground/15 bg-card p-4 sm:p-6">
        <h2 id="grade-line-heading" className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
          Grade line · V-scale
        </h2>
        <GradeLine milestones={GRADE_MILESTONES} />
        <p className="mt-1 text-sm text-muted-foreground">
          When I first sent each grade. Dashed ring: not there yet.
        </p>
      </section>

      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        {CLIMBS.map((climb) => {
          const active = climb.id === selectedId;
          return (
            <li key={climb.id} id={`climb-${climb.id}`} className="scroll-mt-24">
              <a
                href={climb.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setSelectedId(climb.id)}
                onFocus={() => setSelectedId(climb.id)}
                className={cn(
                  "group block overflow-hidden rounded-xl border bg-card transition-shadow",
                  active ? "border-transparent ring-[3px] ring-line-3" : "border-foreground/15",
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={climb.thumbnail}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-md bg-sign px-2.5 py-1 font-mono text-sm font-bold text-sign-foreground">
                    {climb.grade}
                  </span>
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-sign/85 px-3.5 py-1.5 text-sm font-semibold text-sign-foreground">
                    <Play aria-hidden="true" className="h-4 w-4" /> Watch clip
                  </span>
                </div>
                <div className="space-y-3 p-5 sm:p-6">
                  <h2 className="text-xl font-bold">
                    {climb.title}
                    {climb.project && <span className="ml-2 align-middle text-sm font-normal text-muted-foreground">(project)</span>}
                  </h2>
                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin aria-hidden="true" className="h-4 w-4" />
                      {climb.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar aria-hidden="true" className="h-4 w-4" />
                      {climb.date}
                    </span>
                  </div>
                  <p className="leading-relaxed text-muted-foreground">{climb.description}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <section aria-labelledby="corridor-heading" className="rounded-xl border border-foreground/15 bg-card p-4 sm:p-6">
          <h2 id="corridor-heading" className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
            Gyms I've climbed at
          </h2>
          <div className="mt-2">
            <CorridorMap />
          </div>
        </section>
        <ServiceInfo title="Service information" stats={CLIMB_STATS} />
      </div>
    </div>
  );
};

export default Climbing;
