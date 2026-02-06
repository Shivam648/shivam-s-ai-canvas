import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Server } from "lucide-react";

const skillClusters = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    color: "from-primary to-cyan-400",
    skills: ["Angular 18", "TypeScript", "RxJS", "UI Architecture", "Design Systems", "Performance Optimization"]
  },
  {
    title: "AI & Generative AI",
    icon: Brain,
    color: "from-accent to-pink-400",
    skills: ["LLMs", "RAG Pipelines", "LangChain", "CrewAI", "LangGraph", "AutoGen"]
  },
  {
    title: "Backend & Systems",
    icon: Server,
    color: "from-emerald-400 to-teal-400",
    skills: ["Node.js", "Express", "FastAPI", "Spring Boot", "Docker", "PostgreSQL"]
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
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
            Skills & Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend architecture, AI engineering, and backend systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillClusters.map((cluster, clusterIndex) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + clusterIndex * 0.15, duration: 0.6 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cluster.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity duration-500`} />
              
              <div className="relative glass rounded-2xl p-6 lg:p-8 h-full card-lift">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${cluster.color} mb-6`}>
                  <cluster.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-semibold mb-6">
                  {cluster.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + clusterIndex * 0.1 + skillIndex * 0.05 }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tech tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["MySQL", "Neo4j", "MongoDB", "REST APIs", "JWT Auth", "Keycloak", "Git", "CI/CD"].map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground border border-border/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
