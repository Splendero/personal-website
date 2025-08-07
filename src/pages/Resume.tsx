import { Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Resume = () => {
  const handleDownload = () => {
    // Replace with actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume PDF in the public folder
    link.download = 'Your_Name_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Professional
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Resume</span>
          </h1>
          <Button 
            onClick={handleDownload}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
          >
            <Download className="mr-2" size={20} />
            Download PDF
          </Button>
        </div>

        {/* Contact Info */}
        <Card className="mb-8 bg-gradient-warm border-border/50">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">Your Name</h2>
              <p className="text-xl text-muted-foreground">Full Stack Developer & Fiber Artist</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Your City, State</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Summary */}
        <Card className="mb-8 bg-gradient-warm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Passionate full-stack developer with 5+ years of experience creating innovative web applications 
              and digital solutions. Combines technical expertise with creative problem-solving skills developed 
              through fiber arts and craftsmanship. Experienced in modern web technologies, agile development, 
              and creating user-centered designs that balance functionality with aesthetic appeal.
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <Card className="bg-gradient-warm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Senior Frontend Developer</h3>
                <p className="text-primary font-medium">Tech Company • 2022 - Present</p>
                <ul className="mt-2 text-muted-foreground space-y-1">
                  <li>• Led development of responsive web applications using React and TypeScript</li>
                  <li>• Improved application performance by 40% through optimization techniques</li>
                  <li>• Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-xl font-semibold text-foreground">Full Stack Developer</h3>
                <p className="text-primary font-medium">Digital Agency • 2020 - 2022</p>
                <ul className="mt-2 text-muted-foreground space-y-1">
                  <li>• Built and maintained e-commerce platforms for various clients</li>
                  <li>• Integrated payment systems and third-party APIs</li>
                  <li>• Collaborated with designers to implement pixel-perfect interfaces</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-xl font-semibold text-foreground">Junior Web Developer</h3>
                <p className="text-primary font-medium">Startup Company • 2019 - 2020</p>
                <ul className="mt-2 text-muted-foreground space-y-1">
                  <li>• Developed interactive web components using JavaScript and CSS</li>
                  <li>• Assisted in database design and backend API development</li>
                  <li>• Participated in agile development processes and daily standups</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education & Skills */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="bg-gradient-warm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Bachelor of Computer Science</h3>
                  <p className="text-primary font-medium">University Name • 2015 - 2019</p>
                  <p className="text-muted-foreground">Magna Cum Laude, 3.8 GPA</p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
                  <ul className="mt-2 text-muted-foreground space-y-1">
                    <li>• AWS Certified Developer</li>
                    <li>• Google Analytics Certified</li>
                    <li>• Scrum Master Certification</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="bg-gradient-warm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
                  <p className="text-muted-foreground">React, Vue.js, TypeScript, HTML5, CSS3, Tailwind CSS, SASS</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Backend</h4>
                  <p className="text-muted-foreground">Node.js, Python, Express.js, Django, REST APIs, GraphQL</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Database</h4>
                  <p className="text-muted-foreground">PostgreSQL, MongoDB, Redis, Supabase, Firebase</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tools</h4>
                  <p className="text-muted-foreground">Git, Docker, AWS, Vercel, Figma, Webpack, Vite</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Projects & Portfolio */}
        <Card className="mt-8 bg-gradient-warm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">Featured Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Portfolio Website</h3>
                <p className="text-muted-foreground">Personal portfolio showcasing development work and fiber arts</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink size={16} className="mr-2" />
                View
              </Button>
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">E-commerce Platform</h3>
                <p className="text-muted-foreground">Full-stack application with payment integration and admin dashboard</p>
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink size={16} className="mr-2" />
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;