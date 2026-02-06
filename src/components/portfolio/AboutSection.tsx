import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ThemeAwareImage from "@/components/ThemeAwareImage";
import aboutIllustration from "@/assets/about-illustration.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-bottom opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block text-primary font-medium mb-4"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Building the{" "}
              <span className="text-gradient">Future</span>{" "}
              of Web
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
            >
              Software Engineer with 1.8+ years of experience in AI and Full-Stack Development 
              at CGI, building secure and scalable web applications using Angular, Node.js, 
              and AI modules.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {[
                { title: "Frontend Architecture", desc: "Scalable component systems with Angular 18" },
                { title: "Reusable Design", desc: "Building design systems that scale" },
                { title: "Performance & Security", desc: "Optimized, secure applications" },
                { title: "AI Integration", desc: "LLMs, RAG, and intelligent automation" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform" />
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <img 
                src={aboutIllustration} 
                alt="Developer journey from learning to scaling" 
                className="relative rounded-2xl border border-border/50 shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
