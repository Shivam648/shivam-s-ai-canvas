import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Database, Brain, MessageSquare, Workflow, Sparkles } from "lucide-react";
import aiLabIllustration from "@/assets/ai-lab-illustration.jpg";

const aiCapabilities = [
  { icon: FileText, title: "Data Ingestion", desc: "Process documents, PDFs, and structured data" },
  { icon: Database, title: "Vector Storage", desc: "Embed and store knowledge in vector DBs" },
  { icon: Brain, title: "LLM Integration", desc: "Connect to GPT, Claude, and open models" },
  { icon: MessageSquare, title: "RAG Pipelines", desc: "Retrieval-augmented generation systems" },
  { icon: Workflow, title: "AI Agents", desc: "Autonomous agents with CrewAI & LangGraph" },
  { icon: Sparkles, title: "Automation", desc: "Intelligent workflow automation" },
];

const AILabSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai-lab" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-bottom opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-primary font-medium mb-4">
              AI Lab
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Beyond the <span className="text-gradient">Buzzwords</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep understanding of AI systems, from data pipelines to production-ready agents.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl" />
                <img 
                  src={aiLabIllustration} 
                  alt="RAG pipeline and AI systems visualization" 
                  className="relative rounded-2xl border border-border/50 shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Capabilities grid */}
            <div className="grid grid-cols-2 gap-4">
              {aiCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass rounded-xl p-4 card-lift group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <capability.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-medium text-foreground text-sm mb-1">
                    {capability.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {capability.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              From prototyping with LangChain to deploying multi-agent systems — 
              I build AI that works in production.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AILabSection;
