import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FlapText } from "@/components/transit/SplitFlap";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-8 sm:py-24">
      <div className="rounded-xl bg-sign p-6 text-sign-foreground">
        <p className="font-mono text-xs tracking-[0.25em] text-sign-muted">PLATFORM 404</p>
        <p className="mt-3 text-sm sm:text-lg">
          <span className="sr-only">Not in service</span>
          <FlapText text="NOT IN SERVICE" length={14} delay={150} />
        </p>
      </div>
      <h1 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl">This station doesn't exist.</h1>
      <p className="mt-3 text-lg text-muted-foreground">
        There's no stop at <code className="font-mono text-foreground">{location.pathname}</code>. Pick a line from the
        top of the page, or head back to the start.
      </p>
      <Link
        to="/"
        viewTransition
        className="mt-6 inline-flex rounded-md bg-sign px-4 py-2.5 font-semibold text-sign-foreground transition-opacity hover:opacity-90"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
