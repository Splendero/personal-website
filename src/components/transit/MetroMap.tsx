import { useState, type KeyboardEvent } from "react";
import { CAREER_LINES, CAREER_STATIONS, type CareerLine } from "@/data/site";
import { lineColor } from "@/lib/lines";
import { cn } from "@/lib/utils";

const colorOf = (line: CareerLine) => lineColor(CAREER_LINES[line].line);

export const MetroMap = () => {
  const [selectedId, setSelectedId] = useState("exiger");
  const selected = CAREER_STATIONS.find((s) => s.id === selectedId) ?? CAREER_STATIONS[0];

  const onKey = (id: string) => (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedId(id);
    }
  };

  return (
    <div>
      <div className="-mx-2 overflow-x-auto px-2">
        <svg
          viewBox="0 0 700 240"
          className="h-auto w-full min-w-[640px]"
          role="group"
          aria-label="Career map: work and design team lines branch off the university line"
        >
          <path d="M 40 130 L 656 130" stroke={colorOf("school")} strokeWidth={8} strokeLinecap="round" fill="none" />
          <path
            d="M 200 130 L 260 70 L 626 70"
            stroke={colorOf("team")}
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 638 61 L 649 70 L 638 79"
            stroke={colorOf("team")}
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 240 130 L 300 190 L 625 190"
            stroke={colorOf("work")}
            strokeWidth={8}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path d="M 634 190 L 692 190" stroke={colorOf("work")} strokeWidth={8} strokeDasharray="7 7" fill="none" />

          {CAREER_STATIONS.map((station) => {
            const on = station.id === selectedId;
            const anchor = station.anchor ?? "middle";
            const labelX = anchor === "start" ? station.x - 4 : anchor === "end" ? station.x + 4 : station.x;
            const labelY = station.labelAbove ? station.y - 33 : station.y + 27;
            return (
              <g
                key={station.id}
                role="button"
                tabIndex={0}
                aria-pressed={on}
                aria-label={`${station.name}, ${station.sub}`}
                onClick={() => setSelectedId(station.id)}
                onKeyDown={onKey(station.id)}
                className="cursor-pointer outline-none [&:focus-visible_.station-mark]:stroke-line-4"
              >
                {station.terminus ? (
                  <rect
                    x={station.x - 4.5}
                    y={station.y - 12}
                    width={9}
                    height={24}
                    rx={3}
                    className="station-mark fill-card stroke-foreground"
                    strokeWidth={2.75}
                  />
                ) : (
                  <circle
                    cx={station.x}
                    cy={station.y}
                    r={on ? 8 : 6.5}
                    className={cn("station-mark stroke-foreground", !station.current && "fill-card")}
                    style={station.current ? { fill: colorOf(station.line) } : undefined}
                    strokeWidth={2.75}
                  />
                )}
                {on && (
                  <circle cx={station.x} cy={station.y} r={14} fill="none" stroke={colorOf(station.line)} strokeWidth={2.5} />
                )}
                <text
                  x={labelX}
                  y={labelY}
                  textAnchor={anchor}
                  className={cn("fill-foreground text-[12px]", on ? "font-bold" : "font-semibold")}
                >
                  {station.name}
                </text>
                <text x={labelX} y={labelY + 14} textAnchor={anchor} className="fill-muted-foreground text-[11px]">
                  {station.sub}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        {(Object.keys(CAREER_LINES) as CareerLine[]).map((line) => (
          <li key={line} className="flex items-center gap-2">
            <span aria-hidden="true" className="h-1.5 w-6 rounded-full" style={{ backgroundColor: colorOf(line) }} />
            {CAREER_LINES[line].label}
          </li>
        ))}
        <li>Dashed: the line keeps going</li>
      </ul>

      <div aria-live="polite" className="mt-4 border-t border-foreground/10 pt-4">
        <p className="font-bold">
          {selected.name} <span className="font-normal text-muted-foreground">· {selected.sub}</span>
        </p>
        <p className="mt-1 max-w-3xl leading-relaxed text-muted-foreground">{selected.detail}</p>
      </div>
    </div>
  );
};
