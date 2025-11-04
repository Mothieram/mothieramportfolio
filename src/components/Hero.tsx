import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float [animation-delay:2s]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in">
          <span className="text-glow block mb-2">Mothieram L.N</span>
          <span className="bg-gradient-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto] block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Data Science & ML Engineer
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 animate-fade-in [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards] px-2 sm:px-4">
          Building intelligent systems with NLP, Machine Learning, and modern web technologies.
          Experienced in developing end-to-end ML pipelines and deploying production-ready models.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards] px-2 sm:px-4 max-w-3xl mx-auto">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="glass-card text-foreground hover-glow-primary border-primary/30 w-full sm:w-auto min-h-[52px] px-6 text-base font-medium active:scale-95 transition-transform"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="glass-card text-foreground hover-glow-secondary border-secondary/30 w-full sm:w-auto min-h-[52px] px-6 text-base font-medium active:scale-95 transition-transform"
          >
            Get In Touch
          </Button>
          <Button
            size="lg"
            asChild
            className="glass-card text-foreground hover-glow-accent border-accent/30 w-full sm:w-auto min-h-[52px] px-6 text-base font-medium"
          >
            <a href={`${import.meta.env.BASE_URL}Mothieram resume.pdf`} download className="active:scale-95 transition-transform inline-flex items-center justify-center">
              Download Resume
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce glow-secondary"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="text-secondary" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
