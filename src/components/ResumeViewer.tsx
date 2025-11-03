import { FileText, Eye, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeViewer = () => {
  const resumePath = `${import.meta.env.BASE_URL}Mothieram_resume.pdf`;

  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          My Resume
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          A quick look at my professional background, education, and experience.
        </p>

        {/* Resume Card */}
        <div className="mx-auto max-w-5xl bg-background/40 backdrop-blur-xl rounded-2xl shadow-lg border border-border/50 overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">Mothieram_resume.pdf</h3>
                <p className="text-sm text-muted-foreground">Professional Resume</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button asChild variant="outline" className="border-primary/40 hover:bg-primary/10">
                <a href={resumePath} target="_blank" rel="noopener noreferrer">
                  <Eye className="mr-2" size={16} />
                  View
                </a>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <a href={resumePath} download>
                  <Download className="mr-2" size={16} />
                  Download
                </a>
              </Button>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="relative bg-background">
            <iframe
              src={resumePath}
              className="w-full h-[900px]"
              title="Resume Preview"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;
