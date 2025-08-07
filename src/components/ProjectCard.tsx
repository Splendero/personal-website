import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  githubUrl, 
  liveUrl, 
  imageUrl 
}: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-gallery transition-all duration-500 bg-gradient-warm border-border/50 hover:border-primary/20">
      {imageUrl && (
        <div className="relative overflow-hidden h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="secondary" 
              className="bg-secondary/60 text-secondary-foreground hover:bg-secondary transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 pt-2">
          {githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-2" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button
              size="sm"
              asChild
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;