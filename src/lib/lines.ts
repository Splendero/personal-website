export type LineId = 1 | 2 | 3 | 4;

export const lineColor = (line: LineId) => `hsl(var(--line-${line}))`;

export const lineInk = (line: LineId) => `hsl(var(--line-${line}-ink))`;

export const formatFeet = (width: number, height: number) => `${width}′ × ${height}′`;

/** Width of a split-flap run of `cells` characters, in the parent's font size (matches .flap-cell). */
export const flapWidth = (cells: number) => `calc(${cells} * 1.05em + ${cells - 1} * 2px)`;

export const formatClock = (date: Date) =>
  `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
