import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-radial opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-primary font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Open to Frontend & AI{" "}
            <span className="text-gradient">Engineering Roles</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Let's build something meaningful together.
          </p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-8 mb-8"
          >
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Email */}
              <a 
                href="mailto:shivam.jaiswal@email.com"
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-foreground/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium text-sm">Get in touch</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/shivamjaiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-foreground/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="text-foreground font-medium text-sm">Connect</p>
                </div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/shivamjaiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-foreground/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <p className="text-foreground font-medium text-sm">View code</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            <span>India</span>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-10"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:shivam.jaiswal@email.com">
                Start a Conversation
                <ArrowUpRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
