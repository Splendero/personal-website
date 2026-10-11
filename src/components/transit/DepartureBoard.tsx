import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FlapText } from "@/components/transit/SplitFlap";
import { LineBullet } from "@/components/transit/LineBullet";
import { DEPARTURES, LINES } from "@/data/site";
import { useNow } from "@/hooks/use-now";
import { flapWidth, formatClock } from "@/lib/lines";
import { cn } from "@/lib/utils";

const COLS = { time: 5, destination: 8, via: 11, status: 8 };

const Heading = ({ label, cells, className }: { label: string; cells?: number; className?: string }) => (
  <span className={cn("shrink-0", className)} style={{ width: cells ? flapWidth(cells) : "1.25rem" }}>
    <span className="font-mono text-[10px] tracking-[0.2em] text-sign-muted">{label}</span>
  </span>
);

export const DepartureBoard = () => {
  const now = useNow(15_000);

  return (
    <section aria-labelledby="departures-heading" className="rounded-xl bg-sign p-4 text-sign-foreground sm:p-6">
      <div className="flex items-center justify-between gap-4 px-2">
        <h2 id="departures-heading" className="font-mono text-sm font-bold tracking-[0.25em]">
          DEPARTURES
        </h2>
        <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-sign-muted">
          <span>LOCAL TIME</span>
          <span className="sr-only">{formatClock(now)}</span>
          <span className="text-xs sm:text-sm">
            <FlapText text={formatClock(now)} length={5} />
          </span>
        </p>
      </div>

      <div className="mt-5 text-xs sm:text-sm md:text-base lg:text-lg">
        <div aria-hidden="true" className="flex items-center gap-2.5 px-2 pb-2 sm:gap-4">
          <Heading label="TIME" cells={COLS.time} />
          <Heading label="DESTINATION" cells={COLS.destination} />
          <Heading label="VIA" cells={COLS.via} className="hidden lg:inline-block" />
          <Heading label="TRK" />
          <Heading label="STATUS" cells={COLS.status} className="hidden sm:inline-block" />
        </div>

        <ul className="space-y-1">
          {DEPARTURES.map((departure, row) => {
            const line = LINES.find((l) => l.line === departure.line);
            if (!line) return null;
            const time = formatClock(new Date(now.getTime() + departure.minutes * 60_000));
            const delay = 200 + row * 160;
            return (
              <li key={departure.destination}>
                <Link
                  to={line.path}
                  viewTransition
                  className="group flex items-center gap-2.5 rounded-md px-2 py-1.5 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06] sm:gap-4"
                >
                  <span className="sr-only">
                    {`${line.label}: ${departure.via.toLowerCase()}, line ${departure.line}, ${departure.status.toLowerCase()}`}
                  </span>
                  <FlapText text={time} length={COLS.time} delay={delay} />
                  <FlapText text={departure.destination} length={COLS.destination} delay={delay + 60} />
                  <FlapText
                    text={departure.via}
                    length={COLS.via}
                    delay={delay + 120}
                    className="hidden lg:inline-flex"
                  />
                  <LineBullet line={departure.line} size="sm" />
                  <FlapText
                    text={departure.status}
                    length={COLS.status}
                    delay={delay + 180}
                    className={cn("hidden sm:inline-flex", departure.status !== "ON TIME" && "flap-accent")}
                  />
                  <ArrowRight
                    aria-hidden="true"
                    className="ml-auto h-4 w-4 shrink-0 text-sign-muted opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-4 px-2 text-xs text-sign-muted sm:text-sm">
        Each departure is a page. Press 1–4 to board from anywhere, or 0 to come back here.
      </p>
    </section>
  );
};
