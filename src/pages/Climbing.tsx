import { Play, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Climbing = () => {
  // Sample climbing video data - replace with your actual videos
  const climbingVideos = [
    {
      id: "1",
      title: "V6 Overhang Project",
      location: "Local Climbing Gym",
      date: "March 2024",
      style: "Bouldering",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video
      description: "Working through a challenging overhang problem with dynamic moves and precise footwork."
    },
    {
      id: "2", 
      title: "Outdoor Lead Climb",
      location: "Red Rock Canyon, NV",
      date: "February 2024",
      style: "Sport Climbing",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Beautiful 5.10a route with stunning desert views and technical face climbing."
    },
    {
      id: "3",
      title: "Competition Finals", 
      location: "Regional Bouldering Comp",
      date: "January 2024",
      style: "Competition",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Finals round of the regional bouldering competition, attempting a tricky coordination problem."
    },
    {
      id: "4",
      title: "First Flash V5",
      location: "Local Climbing Gym", 
      date: "December 2023",
      style: "Bouldering",
      thumbnail: "/placeholder.svg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Successfully flashing my first V5 boulder problem after months of training."
    }
  ];

  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Climbing
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Adventures</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Follow my climbing journey from indoor bouldering to outdoor adventures. 
            Watch videos of sends, attempts, and the progression through different grades and styles.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {climbingVideos.map((video) => (
            <Card 
              key={video.id} 
              className="group overflow-hidden hover:shadow-gallery transition-all duration-500 bg-gradient-warm border-border/50 hover:border-primary/20 cursor-pointer"
              onClick={() => handleVideoClick(video.videoUrl)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
                  >
                    <Play className="mr-2" size={20} />
                    Watch Video
                  </Button>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-medium">
                  {video.style}
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin size={16} className="mr-2" />
                    {video.location}
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar size={16} className="mr-2" />
                    {video.date}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Climbing Stats */}
        <div className="bg-gradient-warm rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Climbing Stats</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">V6</div>
              <div className="text-muted-foreground">Highest Boulder Grade</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5.11a</div>
              <div className="text-muted-foreground">Highest Route Grade</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-muted-foreground">Years Climbing</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">12</div>
              <div className="text-muted-foreground">Outdoor Trips</div>
            </div>
          </div>
        </div>

        {/* Climbing Philosophy */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why I Climb</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Climbing is more than just a physical challenge—it's a mental puzzle that requires 
            problem-solving, perseverance, and trust in yourself. Every route teaches patience, 
            every fall builds resilience, and every send brings pure joy. Whether it's the 
            meditative focus of bouldering or the sustained effort of sport climbing, 
            each style offers its own rewards and lessons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Climbing;