import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { HelpPoint } from "@/components/transit/HelpPoint";

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-sign focus:px-4 focus:py-2 focus:text-sign-foreground"
    >
      Skip to content
    </a>
    <Navigation />
    <main id="main" className="flex-1 pt-16">
      <Outlet />
    </main>
    <HelpPoint />
    <ScrollRestoration />
  </div>
);

export default Layout;
