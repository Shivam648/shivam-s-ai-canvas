import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "HealthSPAR",
    description: "Hospital appointment booking system with microservices architecture",
    problem: "Fragmented hospital appointment systems causing booking inefficiencies",
    solution: "Unified platform with real-time availability and smart scheduling",
    tech: ["Spring Boot", "Angular", "MySQL", "MongoDB"],
    color: "from-emerald-400 to-teal-400",
  },
  {
    title: "Cybersecurity Dashboard",
    description: "Real-time security monitoring and threat analysis platform",
    problem: "Complex security data hard to visualize and act upon",
    solution: "Intuitive dashboards with AI-powered threat detection",
    tech: ["Angular 18", "Node.js", "PostgreSQL", "Keycloak"],
    color: "from-primary to-cyan-400",
  },
  {
    title: "AI Document Assistant",
    description: "Intelligent document processing with RAG capabilities",
    problem: "Manual document processing is time-consuming and error-prone",
    solution: "Automated extraction and Q&A with LLM integration",
    tech: ["Python", "LangChain", "FastAPI", "Vector DB"],
    color: "from-accent to-pink-400",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">
            Selected Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing frontend excellence and AI innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`} />
              
              <div className="relative glass rounded-2xl p-6 lg:p-8 h-full flex flex-col card-lift">
                {/* Gradient accent bar */}
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.color} mb-6`} />

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6">
                  {project.description}
                </p>

                {/* Problem/Solution */}
                <div className="space-y-3 mb-6 flex-grow">
                  <div className="flex items-start gap-2">
                    <span className="text-xs uppercase tracking-wider text-destructive font-medium mt-0.5">Problem</span>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xs uppercase tracking-wider text-primary font-medium mt-0.5">Solution</span>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-secondary-foreground border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Button variant="heroGhost" size="sm" className="gap-1">
                    View Details
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
