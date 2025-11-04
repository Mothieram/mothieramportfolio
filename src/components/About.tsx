import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "ML Engineering",
      description: "Building end-to-end machine learning pipelines with MLflow, Docker, and Apache Airflow for production deployment.",
    },
    {
      icon: Palette,
      title: "NLP Expertise",
      description: "Developing natural language processing solutions using Hugging Face, PyTorch, and advanced transformer models.",
    },
    {
      icon: Zap,
      title: "Full Stack Development",
      description: "Creating responsive web applications with React, FastAPI, and modern development frameworks.",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-glow">
          About Me
        </h2>
        
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:mb-16 max-w-5xl mx-auto animate-slide-up">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0">
            <div className="relative w-full h-full group">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow-pulse" />
              <img
                src={profileImg}
                alt="Mothieram L.N - Data Science & ML Engineer"
                className="relative w-full h-full object-cover rounded-2xl glass-card border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 bg-gradient-accent bg-clip-text text-transparent animate-scale-in">
              Data Science & ML Engineer
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
              Data Science and Machine Learning enthusiast with hands-on experience developing and deploying NLP models 
              using Python, PyTorch, and Hugging Face. Proven ability to contribute to the end-to-end product lifecycle, 
              with successful projects in insurance fraud detection and LLM-based query engines. Passionate about applying 
              machine learning to solve real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              <a
                href="/Mothieram resume.pdf"
                download
                className="glass-card px-5 py-3 md:px-6 md:py-3 rounded-lg text-sm md:text-base text-primary border border-primary/30 hover:border-primary hover-glow-primary transition-all duration-300 min-h-[48px] flex items-center justify-center active:scale-95"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/mothieram"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card px-5 py-3 md:px-6 md:py-3 rounded-lg text-sm md:text-base text-secondary border border-secondary/30 hover:border-secondary hover-glow-secondary transition-all duration-300 min-h-[48px] flex items-center justify-center active:scale-95"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 px-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
            <Card
              key={index}
              className="glass-card border-primary/20 hover-glow-primary transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-5 md:p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-accent mb-3 md:mb-4 glow-primary">
                  <Icon className="text-white" size={24} />
                </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
