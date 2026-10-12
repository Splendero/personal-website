import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Rug } from "@/data/site";
import { formatFeet } from "@/lib/lines";

const ICON_BUTTON = "rounded-full border border-foreground/20 p-2 transition-colors hover:bg-muted";

export const PosterWall = ({ rugs }: { rugs: Rug[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const current = openIndex === null ? null : rugs[openIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openIndex !== null && !dialog.open) dialog.showModal();
    if (openIndex === null && dialog.open) dialog.close();
  }, [openIndex]);

  const step = (direction: 1 | -1) =>
    setOpenIndex((i) => (i === null ? i : (i + direction + rugs.length) % rugs.length));

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) setOpenIndex(null);
  };

  return (
    <>
      <div className="platform-tiles rounded-xl border border-foreground/10 p-4 sm:p-8">
        <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {rugs.map((rug, i) => (
            <li key={rug.name}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group block w-full rounded-sm text-left"
                aria-label={`View ${rug.name}, ${formatFeet(rug.width, rug.height)}`}
              >
                <div className="border-[6px] border-sign bg-card p-2">
                  <img
                    src={rug.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[2/3] w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-3 rounded-sm bg-sign px-3 py-2.5 text-sign-foreground">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-bold">{rug.name}</span>
                    <span className="shrink-0 font-mono text-xs text-sign-muted">{formatFeet(rug.width, rug.height)}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-sign-muted">{rug.note}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="rug-dialog-title"
        onClose={() => setOpenIndex(null)}
        onKeyDown={onKeyDown}
        onClick={closeOnBackdrop}
        className="w-[min(48rem,calc(100vw-2rem))] rounded-xl bg-card text-foreground backdrop:bg-sign/80"
      >
        {current && (
          <div className="flex flex-col gap-5 p-4 sm:p-6">
            <img src={current.imageLarge} alt={current.name} className="mx-auto max-h-[70vh] w-auto object-contain" />
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 id="rug-dialog-title" className="text-lg font-bold">
                  {current.name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {formatFeet(current.width, current.height)} · {current.note}
                </p>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => step(-1)} aria-label="Previous rug" className={ICON_BUTTON}>
                  <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Next rug" className={ICON_BUTTON}>
                  <ChevronRight aria-hidden="true" className="h-5 w-5" />
                </button>
                <button type="button" onClick={() => setOpenIndex(null)} aria-label="Close" className={ICON_BUTTON}>
                  <X aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
};
