import { LineBullet } from "@/components/transit/LineBullet";
import { lineColor, type LineId } from "@/lib/lines";

interface StationSignProps {
  line: LineId;
  name: string;
  subtitle?: string;
}

export const StationSign = ({ line, name, subtitle }: StationSignProps) => (
  <header>
    <div className="vt-station-sign overflow-hidden rounded-lg bg-sign text-sign-foreground">
      <div className="flex items-center gap-4 px-5 py-4 sm:gap-5 sm:px-7 sm:py-6">
        <LineBullet line={line} size="lg" />
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{name}</h1>
        <span className="ml-auto hidden font-mono text-xs uppercase tracking-[0.25em] text-sign-muted sm:block">
          Line {line}
        </span>
      </div>
      <div className="h-2" style={{ backgroundColor: lineColor(line) }} />
    </div>
    {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
  </header>
);
