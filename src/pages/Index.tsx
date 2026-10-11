import portrait from "@/assets/front-image.jpg?w=900&format=webp";
import { DepartureBoard } from "@/components/transit/DepartureBoard";
import { ServiceNotice } from "@/components/transit/ServiceNotice";
import { NOW_LINE, SERVICE_NOTICE } from "@/data/site";

const Index = () => (
  <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-8 sm:pt-16">
    <section className="grid items-end gap-8 md:grid-cols-[1fr_auto] md:gap-12">
      <div>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">Spencer Osborn</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Creating cool things, just for fun.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Welcome to my personal website, where I show off some cool stuff I've made.
        </p>
        <p className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-base">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Now</span>
          {NOW_LINE}
        </p>
      </div>
      <figure className="w-44 sm:w-56 md:w-64">
        <div className="overflow-hidden rounded-lg border-[6px] border-sign">
          <img
            src={portrait}
            alt="Portrait of Spencer Osborn on the Kingston waterfront"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <figcaption className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Kingston, ON
        </figcaption>
      </figure>
    </section>

    <div className="mt-10 sm:mt-14">
      <DepartureBoard />
    </div>
    <div className="mt-6">
      <ServiceNotice>{SERVICE_NOTICE}</ServiceNotice>
    </div>
  </div>
);

export default Index;
