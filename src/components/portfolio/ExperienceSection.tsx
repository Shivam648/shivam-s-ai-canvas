import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Layers, Lock, Zap, Monitor, Code } from "lucide-react";

const highlights = [
  { icon: Shield, text: "AI-powered Cybersecurity SaaS" },
  { icon: Layers, text: "Angular 18 frontend architecture" },
  { icon: Lock, text: "Keycloak authentication (JWT, RBAC)" },
  { icon: Monitor, text: "Real-time security dashboards" },
  { icon: Zap, text: "SSR, lazy loading, error handling" },
  { icon: Code, text: "Modern Angular patterns" },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-radial opacity-30" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary font-medium mb-4">
            Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          {/* Experience card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative pl-8 md:pl-0 md:w-1/2 md:pr-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-auto md:right-0 top-8 -translate-x-1/2 md:translate-x-1/2 timeline-dot" />

            <div className="glass rounded-2xl p-6 lg:p-8 card-lift">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    CGI
                  </h3>
                  <p className="text-primary font-medium">Software Engineer</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20">
                  Apr 2024 – Present
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Building an AI-powered Cybersecurity SaaS platform, architecting scalable 
                frontend systems with Angular 18, and implementing robust security features 
                with Keycloak authentication.
              </p>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <highlight.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{highlight.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
