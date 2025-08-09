import { Link } from "react-router-dom";
import { ArrowRight, Palette, Code, Mountain, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/front-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Crafting with
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> passion</span>,
                  coding with purpose
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Welcome to my creative space where handcrafted rugs meet innovative projects. 
                  Explore my journey through fiber arts, software development, and vertical adventures.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  <Link to="/rugs">
                    View My Rugs
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/projects">Explore Projects</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-gallery">
                <img
                  src={heroImage}
                  alt="Handcrafted rugs and textiles"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Explore My Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the different facets of my creative and professional journey
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-gallery transition-all duration-500 bg-gradient-warm border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Palette className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Rug Gallery</h3>
                <p className="text-muted-foreground">Handwoven rugs and textile artworks</p>
                <Button variant="ghost" asChild className="mt-4 hover:text-primary">
                  <Link to="/rugs">View Gallery</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-gallery transition-all duration-500 bg-gradient-warm border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Code className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Projects</h3>
                <p className="text-muted-foreground">Software development and creative coding</p>
                <Button variant="ghost" asChild className="mt-4 hover:text-primary">
                  <Link to="/projects">View Projects</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-gallery transition-all duration-500 bg-gradient-warm border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Mountain className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Climbing</h3>
                <p className="text-muted-foreground">Bouldering and climbing adventures</p>
                <Button variant="ghost" asChild className="mt-4 hover:text-primary">
                  <Link to="/climbing">Watch Videos</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-gallery transition-all duration-500 bg-gradient-warm border-border/50 hover:border-primary/20">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <FileText className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Resume</h3>
                <p className="text-muted-foreground">Professional experience and skills</p>
                <Button variant="ghost" asChild className="mt-4 hover:text-primary">
                  <Link to="/resume">View Resume</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
