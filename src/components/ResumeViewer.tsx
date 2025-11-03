import { FileText, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeViewer = () => {
  const resumePath = `${import.meta.env.BASE_URL}Mothieram_resume.pdf`;
  const previewPath = `${import.meta.env.BASE_URL}resume_preview.png`;

  return (
    <section id="resume" className="py-24 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          My Resume
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Explore my professional experience, technical expertise, and recent projects.
        </p>

        {/* Resume Card */}
        <div className="mx-auto max-w-lg bg-background/40 backdrop-blur-xl rounded-2xl shadow-lg border border-border/50 p-8 transition-transform duration-300 hover:scale-[1.01]">
          <div className="flex flex-col items-center space-y-6">
            {/* Icon + Title */}
            <div className="flex flex-col items-center">
              <div className="p-4 bg-primary/10 rounded-xl mb-3">
                <FileText className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-semibold">Mothieram_resume.pdf</h3>
              <p className="text-sm text-muted-foreground">
                Updated portfolio resume with experience and skills.
              </p>
            </div>

            {/* ✅ Real Preview Image */}
            <img
              src={previewPath}
              alt="Resume Preview"
              className="rounded-lg border border-border/30 shadow-md max-w-sm w-full transition-transform duration-300 hover:scale-[1.02]"
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 w-full sm:w-auto">
              <Button
                asChild
                variant="outline"
                className="border-primary/40 hover:bg-primary/10 w-full sm:w-auto"
              >
                <a href={resumePath} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={16} />
                  View Resume
                </a>
              </Button>

              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto"
              >
                <a href={resumePath} download>
                  <Download className="mr-2" size={16} />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;
