import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const foundations = ["DSA", "Operating Systems", "OOPS", "DBMS", "Networks", "AI/ML"];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-primary font-medium mb-4">
            Education
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Strong <span className="text-gradient">Foundations</span>
          </h2>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-8 text-left mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  B.Tech in Computer Science
                </h3>
                <p className="text-primary">National Institute of Technology, Sikkim</p>
                <p className="text-sm text-muted-foreground">Graduated 2023</p>
              </div>
            </div>

            {/* Foundations */}
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Core Competencies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {foundations.map((foundation, index) => (
                <motion.span
                  key={foundation}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="skill-badge"
                >
                  {foundation}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
