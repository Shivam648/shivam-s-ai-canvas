import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, ArrowRight, Sparkles, Activity, Shield, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "HealthSPAR",
    tagline: "Healthcare Reimagined",
    description: "Hospital appointment booking system with microservices architecture",
    problem: "Fragmented hospital appointment systems causing booking inefficiencies",
    solution: "Unified platform with real-time availability and smart scheduling",
    tech: ["Spring Boot", "Angular", "MySQL", "MongoDB"],
    gradient: "from-emerald-400 via-teal-400 to-cyan-400",
    accentColor: "emerald",
    icon: Activity,
    metrics: { users: "10K+", uptime: "99.9%" }
  },
  {
    title: "Cybersecurity Dashboard",
    tagline: "Security Intelligence",
    description: "Real-time security monitoring and threat analysis platform",
    problem: "Complex security data hard to visualize and act upon",
    solution: "Intuitive dashboards with AI-powered threat detection",
    tech: ["Angular 18", "Node.js", "PostgreSQL", "Keycloak"],
    gradient: "from-primary via-blue-400 to-indigo-500",
    accentColor: "primary",
    icon: Shield,
    metrics: { threats: "500K+", response: "<1s" }
  },
  {
    title: "AI Document Assistant",
    tagline: "Intelligent Processing",
    description: "Intelligent document processing with RAG capabilities",
    problem: "Manual document processing is time-consuming and error-prone",
    solution: "Automated extraction and Q&A with LLM integration",
    tech: ["Python", "LangChain", "FastAPI", "Vector DB"],
    gradient: "from-accent via-pink-400 to-rose-500",
    accentColor: "accent",
    icon: FileText,
    metrics: { docs: "1M+", accuracy: "98%" }
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.2, duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="perspective-1000 h-full"
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative group cursor-pointer"
      >
        {/* Glow effect */}
        <motion.div 
          className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 blur-2xl transition-opacity duration-700`}
          animate={{ opacity: isHovered ? 0.4 : 0 }}
        />
        
        <div className="relative rounded-2xl border border-border/50 bg-card/80 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-primary/30">
          {/* Top gradient bar */}
          <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
          
          {/* Content */}
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <motion.div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}
                  animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <project.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <span className={`text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                    {project.tagline}
                  </span>
                </div>
              </div>
              
              {/* Metrics */}
              <div className="hidden sm:flex gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}>
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6">
              {project.description}
            </p>

            {/* Problem/Solution with visual hierarchy */}
            <div className="space-y-4 mb-6">
              <motion.div 
                className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10"
                initial={{ x: -10, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-destructive mt-2 shrink-0" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-destructive">Challenge</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10"
                initial={{ x: -10, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Solution</span>
                  <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                </div>
              </motion.div>
            </div>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, techIndex) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 + techIndex * 0.05 }}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary/50 border border-border/50 backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Action */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isHovered ? { opacity: 1 } : { opacity: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                variant="ghost" 
                size="sm" 
                className={`group/btn gap-2 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient} hover:bg-transparent`}
              >
                <span className="text-foreground">View Case Study</span>
                <ArrowRight className="w-4 h-4 text-foreground transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="section-padding relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium mb-6"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Selected Work
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing frontend excellence and AI innovation.
          </p>
        </motion.div>

        {/* Projects Grid with 3D cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
