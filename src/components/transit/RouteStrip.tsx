import { lineColor, type LineId } from "@/lib/lines";

interface RouteStripProps {
  stops: string[];
  line: LineId;
  label: string;
}

const GAP = 118;
const PAD = 64;
const Y = 46;

export const RouteStrip = ({ stops, line, label }: RouteStripProps) => {
  const width = PAD * 2 + GAP * (stops.length - 1);
  return (
    <>
      <ol aria-label={label} className="ml-1.5 space-y-2 border-l-4 py-1 pl-4 sm:hidden" style={{ borderColor: lineColor(line) }}>
        {stops.map((stop) => (
          <li key={stop} className="relative text-sm">
            <span aria-hidden="true" className="absolute -left-6 top-1 h-3 w-3 rounded-full border-2 border-foreground bg-card" />
            {stop}
          </li>
        ))}
      </ol>

      <div className="hidden overflow-x-auto sm:block">
        <svg
          viewBox={`0 0 ${width} 92`}
          className="h-auto w-full min-w-[400px]"
          style={{ maxWidth: width }}
          role="img"
          aria-label={`${label}: ${stops.join(", then ")}`}
        >
          <line x1={PAD} y1={Y} x2={width - PAD} y2={Y} stroke={lineColor(line)} strokeWidth={6} strokeLinecap="round" />
          {stops.map((stop, i) => {
            const x = PAD + i * GAP;
            return (
              <g key={stop}>
                <circle cx={x} cy={Y} r={6.5} className="fill-card stroke-foreground" strokeWidth={2.5} />
                <text x={x} y={i % 2 === 0 ? Y - 16 : Y + 27} textAnchor="middle" className="fill-foreground text-[12px]">
                  {stop}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </>
  );
};
