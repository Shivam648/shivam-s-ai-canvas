import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Brain, Server, Sparkles, Zap, Database, Globe, Cpu, Layers } from "lucide-react";

const skillClusters = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    gradient: "from-primary via-cyan-400 to-blue-500",
    bgGradient: "from-primary/20 to-cyan-400/10",
    skills: ["Angular 18", "TypeScript", "RxJS", "UI Architecture", "Design Systems", "Performance Optimization"],
    featured: true,
    stats: { years: "4+", projects: "15+" }
  },
  {
    title: "AI & Generative AI",
    icon: Brain,
    gradient: "from-accent via-pink-400 to-rose-500",
    bgGradient: "from-accent/20 to-pink-400/10",
    skills: ["LLMs", "RAG Pipelines", "LangChain", "CrewAI", "LangGraph", "AutoGen"],
    featured: true,
    stats: { years: "2+", projects: "8+" }
  },
  {
    title: "Backend & Systems",
    icon: Server,
    gradient: "from-emerald-400 via-teal-400 to-green-500",
    bgGradient: "from-emerald-400/20 to-teal-400/10",
    skills: ["Node.js", "Express", "FastAPI", "Spring Boot", "Docker", "PostgreSQL"],
    featured: false,
    stats: { years: "3+", projects: "12+" }
  }
];

const additionalSkills = [
  { name: "MySQL", icon: Database },
  { name: "Neo4j", icon: Layers },
  { name: "MongoDB", icon: Database },
  { name: "REST APIs", icon: Globe },
  { name: "JWT Auth", icon: Zap },
  { name: "Keycloak", icon: Cpu },
  { name: "Git", icon: Code2 },
  { name: "CI/CD", icon: Sparkles },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <motion.div
          className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-6"
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Skills & Expertise
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend architecture, AI engineering, and backend systems.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {skillClusters.map((cluster, clusterIndex) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.2 + clusterIndex * 0.15, duration: 0.6 }}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(cluster.title)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Glow effect */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${cluster.gradient} rounded-3xl opacity-0 blur-xl transition-opacity duration-500`}
                animate={{ opacity: hoveredSkill === cluster.title ? 0.3 : 0 }}
              />
              
              <div className={`relative h-full rounded-2xl border border-border/50 bg-gradient-to-br ${cluster.bgGradient} backdrop-blur-xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:border-primary/30`}>
                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cluster.gradient} opacity-10 blur-2xl`} />
                
                {/* Icon with animated ring */}
                <div className="relative mb-6">
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cluster.gradient} opacity-20`}
                    animate={hoveredSkill === cluster.title ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${cluster.gradient} shadow-lg`}>
                    <cluster.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title & Stats */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-xl lg:text-2xl font-bold">
                    {cluster.title}
                  </h3>
                  <div className="flex gap-3 text-xs">
                    <div className="text-center">
                      <div className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${cluster.gradient}`}>
                        {cluster.stats.years}
                      </div>
                      <div className="text-muted-foreground">Years</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${cluster.gradient}`}>
                        {cluster.stats.projects}
                      </div>
                      <div className="text-muted-foreground">Projects</div>
                    </div>
                  </div>
                </div>

                {/* Skills with staggered animation */}
                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + clusterIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-background/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Animated progress bar */}
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-1"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.6 + clusterIndex * 0.1, duration: 0.8 }}
                  style={{ transformOrigin: 'left' }}
                >
                  <div className={`h-full bg-gradient-to-r ${cluster.gradient} opacity-50`} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills - Floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-sm text-muted-foreground mb-6 text-center">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((tech, index) => (
              <motion.div 
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/30 backdrop-blur-sm hover:bg-secondary/50 hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <tech.icon className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
