import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, shopping cart, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that provides detailed forecasts, interactive maps, and personalized weather alerts for multiple locations.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS Grid"],
      githubUrl: "https://github.com",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with modern web technologies, featuring smooth animations and optimized performance.",
      technologies: ["React", "TypeScript", "Framer Motion", "Vite"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Blog CMS",
      description: "A content management system for bloggers with markdown support, SEO optimization, and social media integration.",
      technologies: ["Next.js", "Sanity", "GraphQL", "Vercel"],
      githubUrl: "https://github.com",
      imageUrl: "/placeholder.svg"
    },
    {
      title: "Data Visualization Tool",
      description: "An interactive data visualization platform that transforms complex datasets into beautiful, interactive charts and graphs.",
      technologies: ["D3.js", "Python", "Flask", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      imageUrl: "/placeholder.svg"
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
                <li>React / Vue.js</li>
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
                <li>Express</li>
                <li>GraphQL</li>
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
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;