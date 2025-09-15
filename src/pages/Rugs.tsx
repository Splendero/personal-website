import ImageGallery from "@/components/ImageGallery";
import doomRug from "@/assets/Rugs/doom-rug.png";
import speakerRug from "@/assets/Rugs/speaker-rug.png"
import bathroomRug from "@/assets/Rugs/bathroom-rug.png"
import MountainRug from "@/assets/Rugs/mountain-rug.png"
import strawberryRug from "@/assets/Rugs/strawberry-rug.png"
import dogRug from "@/assets/Rugs/dog-rug.png"

const Rugs = () => {
  const rugImages = [
    {
      id: "1",
      src: doomRug,
      alt: "MF DOOM logo",
      caption: "MF DOOM logo",
      dimensions: "2' x 1'",
      materials: "From MF DOOM famous logo"
    },
    {
      id: "2", 
      src: speakerRug,
      alt: "blonded speaker",
      caption: "blonded speaker",
      dimensions: "4' x 1.5'",
      materials: "Inspired by covers from blonded radio"
    },
    {
      id: "3",
      src: MountainRug,
      alt: "mountain sunset", 
      caption: "mountain sunset",
      dimensions: "3' x 3'",
      materials: "Handrawen for the homie Pe Stew"
    },
    {
      id: "4",
      src: bathroomRug, 
      alt: "okej dye",
      caption: "okej dye",
      dimensions: "2' x 3'",
      materials: "Inspired from a okej design, tuffed then dyed"
    },
    {
      id: "5",
      src: strawberryRug,
      alt: "strawberry",
      caption: "strawberry", 
      dimensions: "2' x 2'",
      materials: "Handrawen strawberry rug"
    },
    {
      id: "6",
      src: dogRug,
      alt: "dog wig",
      caption: "dog wig",
      dimensions: "3' x 2'", 
      materials: "Dog wig for the homie Daveo"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Hand Tuffed
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Rugs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each rug is tuffed using a rug tufting gun and using simple materials from the local craft store.
            Using unique patterns and design hand drawn by me from inspiration from the internet for my friends and family.
          </p>
        </div>

        {/* Gallery */}
        <ImageGallery images={rugImages} columns={3} />

        {/* Process Section */}
        <div className="mt-24 text-center bg-gradient-warm rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">My Process</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Design</h3>
              <p className="text-muted-foreground">
                Every rug begins with careful planning, drawing the design, and selecting 
                color palettes, and projecting the design onto the rug.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Materials</h3>
              <p className="text-muted-foreground">
                I use a monks clothes backing to tuft the rug into the fabric.
                Then secure with super glue, cut the excess, and finish the backing with felt.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Craftsmanship</h3>
              <p className="text-muted-foreground">
               Rugs are tufted using a rug tufting gun which can be a long and tedious process.
               Which can take tens of hours of tufting alone to complete each rug.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rugs;