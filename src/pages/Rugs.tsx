import { JourneyPlanner } from "@/components/transit/JourneyPlanner";
import { PosterWall } from "@/components/transit/PosterWall";
import { StationSign } from "@/components/transit/StationSign";
import { RUG_PROCESS, RUGS, RUGS_INTRO } from "@/data/site";

const Rugs = () => (
  <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-8 sm:pt-14">
    <StationSign line={2} name="Hand-tufted rugs" subtitle={RUGS_INTRO} />

    <div className="mt-10">
      <PosterWall rugs={RUGS} />
    </div>

    <section aria-labelledby="process-heading" className="mt-16 flex flex-col gap-8 lg:gap-0">
      <div className="lg:max-w-sm">
        <h2 id="process-heading" className="text-2xl font-bold sm:text-3xl">
          My process
        </h2>
        <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
          Every rug makes the same trip, from blank cloth to something you can stand on.
        </p>
      </div>
      <div className="lg:-mt-6 lg:ml-auto lg:w-[60%]">
        <JourneyPlanner from="Monk's cloth" to="Finished rug" summary="3 legs · tens of hours" legs={RUG_PROCESS} />
      </div>
    </section>
  </div>
);

export default Rugs;
