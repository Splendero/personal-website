import { lineColor } from "@/lib/lines";

type Stop = { x: number; name: string; detail: string[]; anchor: "start" | "middle" | "end" };

const STOPS: Stop[] = [
  { x: 56, name: "Oakville", detail: ["Climber's Rock"], anchor: "start" },
  { x: 188, name: "Kingston", detail: ["Boiler Room"], anchor: "middle" },
  { x: 320, name: "Calgary", detail: ["Bolder Climbing", "Community"], anchor: "middle" },
  { x: 452, name: "Brisbane", detail: ["Urban Climb", "Australia"], anchor: "middle" },
  { x: 584, name: "Toronto", detail: ["Basecamp"], anchor: "end" },
];

export const CorridorMap = () => (
  <div className="-mx-2 overflow-x-auto px-2">
    <svg
      viewBox="0 0 640 130"
      className="h-auto w-full min-w-[560px]"
      role="img"
      aria-label="Gyms I've climbed at: Climber's Rock in Oakville; Boiler Room in Kingston; Bolder Climbing Community in Calgary; Urban Climb in Brisbane, Australia; and Base Camp in Toronto"
    >
      <line x1={60} y1={46} x2={580} y2={46} stroke={lineColor(3)} strokeWidth={8} strokeLinecap="round" />
      {STOPS.map((stop, i) => {
        const terminus = i === 0 || i === STOPS.length - 1;
        const labelX = stop.anchor === "start" ? stop.x - 4 : stop.anchor === "end" ? stop.x + 4 : stop.x;
        return (
          <g key={stop.name}>
            {terminus ? (
              <rect x={stop.x - 4.5} y={34} width={9} height={24} rx={3} className="fill-card stroke-foreground" strokeWidth={2.75} />
            ) : (
              <line x1={stop.x} y1={46} x2={stop.x} y2={60} stroke={lineColor(3)} strokeWidth={4} />
            )}
            <text x={labelX} y={84} textAnchor={stop.anchor} className="fill-foreground text-[13px] font-bold">
              {stop.name}
            </text>
            <text x={labelX} y={101} textAnchor={stop.anchor} className="fill-muted-foreground text-[11.5px]">
              {stop.detail.map((line, j) => (
                <tspan key={line} x={labelX} dy={j === 0 ? 0 : 14}>
                  {line}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  </div>
);
