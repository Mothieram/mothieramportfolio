import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming & Data",
      skills: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3B82F6" },
        { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/22D3EE" },
        { name: "PySpark", icon: "https://cdn.simpleicons.org/apachespark/A855F7" },
        { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/3B82F6" },
        { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/22D3EE" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/A855F7" },
      ],
    },
    {
      category: "ML & NLP",
      skills: [
        { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/A855F7" },
        { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface/3B82F6" },
        { name: "Scikit-learn", icon: "https://cdn.simpleicons.org/scikitlearn/22D3EE" },
        { name: "NLTK", icon: "https://cdn.simpleicons.org/python/A855F7" },
        { name: "Word2Vec", icon: "https://cdn.simpleicons.org/tensorflow/3B82F6" },
        { name: "Machine Learning Pipelines", icon: "https://cdn.simpleicons.org/googlecloud/22D3EE" },
      ],
    },
    {
      category: "Tools & Frameworks",
      skills: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/3B82F6" },
        { name: "MLflow", icon: "https://cdn.simpleicons.org/mlflow/22D3EE" },
        { name: "DagShub", icon: "https://cdn.simpleicons.org/git/A855F7" },
        { name: "Apache Airflow", icon: "https://cdn.simpleicons.org/apacheairflow/3B82F6" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git/22D3EE" },
        { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/A855F7" },
        { name: "Flask", icon: "https://cdn.simpleicons.org/flask/3B82F6" },
        { name: "React", icon: "https://cdn.simpleicons.org/react/22D3EE" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express/A855F7" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(217 91% 60% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Skills & Technologies
        </h2>
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Specialized in Machine Learning, NLP, and full-stack development with a focus on building intelligent, scalable solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-lg p-6 hover-glow-primary transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary border-b border-primary/30 pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 px-3 py-2 glass border-secondary/30 rounded-md hover:border-secondary hover:glow-secondary transition-all cursor-default group"
                  >
                    <img 
                      src={skill.icon} 
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-foreground group-hover:text-secondary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
