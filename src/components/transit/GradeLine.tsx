import type { GradeMilestone } from "@/data/site";
import { lineColor } from "@/lib/lines";
import { cn } from "@/lib/utils";

const gradeX = (grade: number) => 50 + grade * 76;
const Y = 88;
const GRADES = [0, 1, 2, 3, 4, 5, 6, 7];

interface GradeLineProps {
  milestones: GradeMilestone[];
}

export const GradeLine = ({ milestones }: GradeLineProps) => {
  const sorted = [...milestones].sort((a, b) => a.grade - b.grade);
  const color = lineColor(3);

  return (
    <div className="-mx-2 overflow-x-auto px-2">
      <svg
        viewBox="0 0 640 142"
        className="h-auto w-full min-w-[560px]"
        role="img"
        aria-label={`Grade progression on the V-scale: ${sorted.map((m) => `V${m.grade} ${m.date}`).join(", ")}`}
      >
        <line x1={gradeX(0)} y1={Y} x2={gradeX(6)} y2={Y} stroke={color} strokeWidth={8} strokeLinecap="round" />
        <line x1={gradeX(6)} y1={Y} x2={gradeX(7)} y2={Y} stroke={color} strokeWidth={8} strokeDasharray="6 7" />
        {GRADES.map((grade) => (
          <g key={grade} aria-hidden="true">
            <line x1={gradeX(grade)} y1={Y} x2={gradeX(grade)} y2={Y + 12} stroke={color} strokeWidth={3} />
            <text
              x={gradeX(grade)}
              y={Y + 29}
              textAnchor="middle"
              className={cn("font-mono text-[12px]", grade === 7 ? "fill-muted-foreground/60" : "fill-muted-foreground")}
            >
              V{grade}
            </text>
          </g>
        ))}

        {sorted.map((milestone, i) => {
          const x = gradeX(milestone.grade);
          const labelY = i % 2 === 0 ? 54 : 30;
          return (
            <g key={milestone.grade} aria-hidden="true">
              <line x1={x} y1={labelY + 6} x2={x} y2={Y - 11} className="stroke-foreground/30" strokeWidth={1} />
              <circle
                cx={x}
                cy={Y}
                r={7.5}
                className="fill-card stroke-foreground"
                strokeWidth={2.75}
                strokeDasharray={milestone.pending ? "3.5 3" : undefined}
              />
              <text
                x={x}
                y={labelY}
                textAnchor="middle"
                className={cn(
                  "text-[12.5px] font-medium",
                  milestone.pending ? "fill-muted-foreground italic" : "fill-foreground",
                )}
              >
                {milestone.date}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
