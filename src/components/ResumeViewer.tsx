import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeViewer = () => {
  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float [animation-delay:1.5s]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-glow">
          Resume
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          View my complete professional experience, education, and skills
        </p>

        <div className="max-w-5xl mx-auto">
          <Card className="glass-card hover-glow-primary border-primary/30 overflow-hidden">
            <CardContent className="p-0">
              {/* Resume Header */}
              <div className="bg-gradient-accent p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-background/20 flex items-center justify-center flex-shrink-0">
                    <FileText className="text-foreground" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">Mothieram_resume.pdf</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Professional Resume</p>
                  </div>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="glass-card text-primary hover-glow-primary border-primary/30 w-full sm:w-auto"
                >
                  <a href="/Mothieram_resume.pdf" download>
                    <Download className="mr-2" size={16} />
                    Download PDF
                  </a>
                </Button>
              </div>

              {/* Resume Preview - Works on all devices */}
              <div className="relative w-full bg-background/30" style={{ height: "800px" }}>
                <iframe
                  src="/Mothieram_resume.pdf"
                  className="w-full h-full"
                  title="Resume Preview"
                  style={{ border: "none" }}
                />
              </div>

              {/* Additional download button for mobile */}
              <div className="md:hidden p-4 text-center border-t border-border bg-background/50">
                <Button
                  asChild
                  size="lg"
                  className="glass-card text-primary hover-glow-primary border-primary/30 w-full"
                >
                  <a href="/Mothieram_resume.pdf" download>
                    <Download className="mr-2" size={18} />
                    Download Resume
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;
