import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Startup Jobs Aggregator + Resume Fit Scorer",
      description: "Automated scraping of 1,000+ startup job listings with a word2vec-based resume-JD fit scoring engine. Improved candidate-job alignment by 30% through NLP similarity metrics and keyword analysis.",
      tags: ["Python", "Word2Vec", "NLP", "Web Scraping"],
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/mothieram",
    },
    {
      title: "Insurance Query Engine using Gemini",
      description: "Built an intelligent insurance query engine leveraging Gemini LLM for contextual document retrieval. Reduced manual policy lookup time by 60% through automated information extraction and response generation.",
      tags: ["Gemini LLM", "Python", "NLP", "Document Retrieval"],
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/mothieram",
    },
    {
      title: "Insurance Fraud Claim Detection",
      description: "Achieved 85% fraud detection accuracy using classification and anomaly detection models. Minimized false positives by 22% with SHAP-based explainability and integrated Streamlit dashboard with FastAPI backend.",
      tags: ["Python", "Machine Learning", "SHAP", "Streamlit", "FastAPI"],
      color: "from-orange-500 to-red-500",
      github: "https://github.com/mothieram",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-glow-pulse [animation-delay:1s]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Machine learning and NLP projects demonstrating expertise in building intelligent systems and data-driven solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card border-primary/20 hover-glow-accent transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />
              <CardHeader>
                <CardTitle className="text-2xl text-foreground group-hover:text-secondary group-hover:text-glow transition-all">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-3 py-1 rounded-full glass border-accent/30 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" className="gap-2 glass-card border-primary/30 hover-glow-primary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
