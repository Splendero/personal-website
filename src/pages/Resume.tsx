import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import resumePdf from "@/assets/Resume2026.pdf";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "SpencerOsbornResume.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-subtle pt-24 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Resume
          </h1>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Open in new tab
              </a>
            </Button>
            <Button
              onClick={handleDownload}
              size="sm"
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
        <iframe
          title="Spencer Osborn resume"
          src={resumePdf}
          className="w-full h-[calc(100dvh-11rem)] rounded-lg border border-border bg-muted/30"
        />
      </div>
    </div>
  );
};

export default Resume;
