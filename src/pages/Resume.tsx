import { Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import resumePdf from '@/assets/Resume_2025_v1.pdf';


const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'spencer_osborn_resume.pdf';
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
              <h2 className="text-3xl font-bold text-foreground mb-2">Spencer Osborn</h2>
              <p className="text-xl text-muted-foreground">Applied Math & Engineering Student</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <div className="flex items-center">
                <Mail size={18} className="mr-2" />
                <span>spencer.osborn@queensu.ca</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2" />
                <span>289 681 0801</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Oakville, Ontario</span>
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
              Eager full-stack software engineer student on a year long internship doing medical AI solutions for hospital E-Referrals.
              Where I study mathematics and engineering, which is a unique program that cover all major math and computer engineering topics in the department of engineering.
              Always looking to build, create, and work on cool projects using my math, software, and computer engineering experience.
            </p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <Card className="bg-gradient-warm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Artificial Intelligence Software Engineering Intern</h3>
                <p className="text-primary font-medium">Novari Health • May 2025 - May 2026</p>
                <ul className="mt-2 text-muted-foreground space-y-1">
                  <li>• Contributed to the development of Intelligent Document Processing (IDP) and Auto-Protocolling tools, using Azure and open-source frameworks to integrate AI capabilities into Novari Health’s software suite.</li>
                  <li>• Built and maintained internal metrics and monitoring tools for real time performance analysis of IDP and Auto-Protocolling systems, with outage and under performance alerting.</li>
                  <li>• Led the launch of IDP v3, redesigning the system to reduce dependencies and cut cloud costs by 82%, leveraging open-source frameworks such as OpenCV and Tesseract.</li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-xl font-semibold text-foreground">Software Engineering Intern</h3>
                <p className="text-primary font-medium">Limestone Analytics • Nov 2024 - May 2025</p>
                <ul className="mt-2 text-muted-foreground space-y-1">
                  <li>• Built Python scripts to efficiently filter, sort, analyze, and update millions of rows of data, streamlining workflows and enabling timely, data-driven insights, using google sheets workflows</li>
                  <li>• Developed a lightweight repository system to organize and manage data analysis tools, enabling better software reuse and version control</li>
                </ul>
              </div>
              <Separator />
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
                  <h3 className="text-xl font-semibold text-foreground">Bachelors of Applied Science</h3>
                  <p className="text-primary font-medium">Queen's University • 2022 - 2026</p>
                  <p className="text-muted-foreground">Mathematics and Engineering (Communications and Computing)</p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Design Teams & Activites</h3>
                  <ul className="mt-2 text-muted-foreground space-y-1">
                    <li>• aQuatonomous</li>
                    <li>• Clark Hall Pub</li>
                    <li>• Smith Engineering Hyperloop Design Team</li>
                    <li>• Englinks Tutoring</li>
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
                  <h4 className="font-semibold text-foreground mb-2">Languages</h4>
                  <p className="text-muted-foreground">Java, Python, C, C++, C#, HTML, Javascript, PHP, MATLAB, LaTeX.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Libraries</h4>
                  <p className="text-muted-foreground"> Numpy, OpenCV, Pandas, TensorFlow, Tesseract</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tools</h4>
                  <p className="text-muted-foreground">Azure, MS Office, Git, Docker, Linux, AutoCAD, SOLIDWORKS, SLAM, Arduino, ROS2</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Courses</h4>
                  <p className="text-muted-foreground">Real Analysis II, Algorithms, Control System, Probability II, Engineering Design & Practice III, Object Oriented Programming, Complex Analysis, Linear Algebra II</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;