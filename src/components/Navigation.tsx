import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LineBullet } from "@/components/transit/LineBullet";
import { LINES } from "@/data/site";
import { lineColor } from "@/lib/lines";
import { cn } from "@/lib/utils";

const isTyping = (target: EventTarget | null) =>
  target instanceof HTMLElement &&
  (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

const Navigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return;
      if (document.querySelector("dialog[open]")) return;
      const path = event.key === "0" ? "/" : LINES.find((l) => String(l.line) === event.key)?.path;
      if (path) navigate(path, { viewTransition: true });
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate]);

  return (
    <header className="vt-site-nav fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/95 backdrop-blur print:hidden">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-8">
        <Link to="/" viewTransition aria-keyshortcuts="0" className="flex items-center gap-3 rounded-md">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sign font-mono text-xs font-bold text-sign-foreground">
            SO
          </span>
          <span className="hidden font-mono text-sm font-bold tracking-[0.2em] md:inline">SPENCER OSBORN</span>
          <span className="sr-only md:hidden">Spencer Osborn, home</span>
        </Link>

        <ul className="flex items-center sm:gap-1">
          {LINES.map(({ line, label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                viewTransition
                aria-keyshortcuts={String(line)}
                className={({ isActive }) =>
                  cn(
                    "flex flex-col items-center gap-1 rounded-md px-2 py-1 text-[11px] font-semibold transition-colors sm:flex-row sm:gap-2 sm:px-3 sm:text-sm",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <LineBullet line={line} size="sm" />
                    <span className="relative">
                      {label}
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full transition-opacity"
                        style={{ backgroundColor: lineColor(line), opacity: isActive ? 1 : 0 }}
                      />
                    </span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
