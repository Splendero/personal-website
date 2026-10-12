import type { ReactNode } from "react";
import { lineColor } from "@/lib/lines";

interface ServiceNoticeProps {
  title?: string;
  children: ReactNode;
}

export const ServiceNotice = ({ title = "Service change", children }: ServiceNoticeProps) => (
  <aside
    className="flex flex-col gap-1 rounded-md border-l-[6px] bg-card px-5 py-4 sm:flex-row sm:items-baseline sm:gap-5"
    style={{ borderLeftColor: lineColor(1) }}
  >
    <p className="shrink-0 font-mono text-xs font-bold uppercase tracking-[0.2em]">{title}</p>
    <p className="text-base leading-relaxed">{children}</p>
  </aside>
);
