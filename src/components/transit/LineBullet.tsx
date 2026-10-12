import { cn } from "@/lib/utils";
import { lineColor, lineInk, type LineId } from "@/lib/lines";

const SIZES = {
  sm: "h-5 w-5 text-[11px]",
  md: "h-7 w-7 text-sm",
  lg: "h-11 w-11 text-xl",
};

interface LineBulletProps {
  line: LineId;
  size?: keyof typeof SIZES;
  className?: string;
}

export const LineBullet = ({ line, size = "md", className }: LineBulletProps) => (
  <span
    aria-hidden="true"
    className={cn(
      "inline-flex shrink-0 items-center justify-center rounded-full font-mono font-bold leading-none",
      SIZES[size],
      className,
    )}
    style={{ backgroundColor: lineColor(line), color: lineInk(line) }}
  >
    {line}
  </span>
);
