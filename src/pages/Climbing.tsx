import { Play, MapPin, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import batOverhang from "@/assets/Climbing-thumbnail/bat-overhang.jpg"
import redDyno from "@/assets/Climbing-thumbnail/red-dyno.jpg"
import pinkDyno from "@/assets/Climbing-thumbnail/pink-dyno.jpg"
import redSwing from "@/assets/Climbing-thumbnail/red-swing.jpg"

const Climbing = () => {
  // Sample climbing video data - replace with your actual videos
  const climbingVideos = [
    {
      id: "1",
      title: "V6 Bat Hang Project",
      location: "Climber's Rock, Oakville",
      date: "August 2024",
      style: null,
      thumbnail: batOverhang,
      videoUrl: "https://youtube.com/shorts/ZAV8beX5H6Q?feature=share", // Replace with actual video
      description: "Couldn't finish the climb, but easily my favourite move I've ever done."
    },
    {
      id: "2", 
      title: "V5 Dyno",
      location: "Boiler Room, Kingston",
      date: "June 2025",
      style: null,
      thumbnail: redDyno,
      videoUrl: "https://youtube.com/shorts/X19vW2NU_6o",
      description: "Fun first move and then exhausting finish"
    },
    {
      id: "3",
      title: "V4 Pink Dyno", 
      location: "Climber's Rock, Oakville",
      date: "August 2024",
      style: null,  
      thumbnail: pinkDyno,
      videoUrl: "https://youtube.com/shorts/fm4jfa9Vd80",
      description: "One of my first big dynos I landed",
    },
    {
      id: "4",
      title: "V4-5 Swing Dyno",
      location: "Boiler Room, Kingston", 
      date: "July 2025",
      style: null,
      thumbnail: redSwing,
      videoUrl: "https://youtube.com/shorts/M9BkvwK0nCk",
      description: "I like the corner climbing, always have fun angles"
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
            A few of my favourite climbs, from the few videos I have taken.
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
                  loading="lazy"
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
              <div className="text-3xl font-bold text-primary">V5</div>
              <div className="text-muted-foreground">Highest Boulder Grade</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5.11b</div>
              <div className="text-muted-foreground">Highest Route Grade</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">1</div>
              <div className="text-muted-foreground">Years Climbing</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">2</div>
              <div className="text-muted-foreground">Gyms Visited</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Climbing;