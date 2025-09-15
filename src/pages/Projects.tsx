import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: "Bouy Detection System",
      description: "Creating a system to detect buoys in the water for Roboboat 2025, with the fast possible detection rate.",
      technologies: ["Ros2", "Python", "Linux", "Computer Vision"],
      githubUrl: "https://github.com/aQuatonomous",
      imageUrl: "src/assets/projects/right_1741317589892.jpg"
    },
    {
      title: "Neuroneck",
      description: "A real-time neck brace training system for medical use. That won a hackathon and a 2000$ prize.",
      technologies: ["Arduino", "Microcontroller", "Hackathon"],
      githubUrl: "https://github.com/Splendero/hackathon1medsim",
      imageUrl: "src/assets/projects/IMG_9137.jpg"
    },
    {
      title: "Malaria Simulation",
      description: "A simulation of malaria spread in a population, using a Loyds agents model.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS Grid"],
      githubUrl: "https://github.com/Splendero/osiris",
      imageUrl: "src/assets/projects/Picture176875.png"
    },
    {
      title: "Catan Map Generator",
      description: "Catan map generator for competitive catan, with custom rules.",
      technologies: ["Javascript", "Python"],
      liveUrl: "catan-map-maker-frontend.vercel.app",
      imageUrl: "src/assets/projects/Screenshot 2025-09-15 171401.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            My
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of web applications, tools, and creative coding projects that showcase 
            my development skills and passion for creating meaningful digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-24 text-center bg-gradient-warm rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Technologies & Skills</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Frontend</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Backend</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>Node.js</li>
                <li>Python</li>
                <li>C#</li>
                <li>C++</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Database</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
                <li>Supabase</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Tools</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Azure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;