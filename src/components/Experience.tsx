import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Syncner",
      role: "Machine Learning Intern",
      duration: "Jul 2025 - Present",
      type: "Hybrid",
      achievements: [
        "Boosted model efficiency by 35% by engineering and deploying NLP pipelines using Hugging Face and PyTorch",
        "Enhanced meeting experience with a real-time translation and TTS system integrated into live sessions",
        "Accelerated product release by automating dataset preprocessing and evaluation workflows",
      ],
    },
    {
      company: "Ceeras Software Solution",
      role: "Frontend Development Intern",
      duration: "Nov 2024 - Jan 2025",
      type: "Remote",
      achievements: [
        "Achieved a 45% improvement in UI responsiveness by developing and styling five key React components",
        "Reduced user bounce rate through visually appealing, accessible, and mobile-first web pages",
        "Collaborated in agile sprints to enhance product usability and design consistency across the platform",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/30 rounded-full blur-3xl animate-float [animation-delay:1.5s]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Work Experience
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Professional experience in machine learning, NLP, and full-stack development across innovative startups.
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-card border-primary/20 hover-glow-primary transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-1 bg-gradient-accent" />
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-gradient-accent glow-primary">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-foreground">{exp.role}</CardTitle>
                      <p className="text-lg font-semibold bg-gradient-accent bg-clip-text text-transparent">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{exp.duration}</span>
                    </div>
                    <span className="text-xs glass border-secondary/30 px-3 py-1 rounded-full text-secondary">
                      {exp.type}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex gap-3 text-muted-foreground">
                      <span className="text-secondary mt-1.5 flex-shrink-0">▪</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
