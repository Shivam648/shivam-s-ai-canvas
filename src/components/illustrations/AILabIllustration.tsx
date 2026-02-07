import { motion } from "framer-motion";

const AILabIllustration = () => {
  const pipelineSteps = [
    { label: "Data", icon: "📄" },
    { label: "Embed", icon: "🧮" },
    { label: "Store", icon: "💾" },
    { label: "Query", icon: "🔍" },
    { label: "Generate", icon: "✨" },
  ];

  return (
    <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main container */}
      <div className="relative h-full glass rounded-2xl border border-border/50 p-6 overflow-hidden">
        {/* RAG Pipeline visualization */}
        <div className="relative z-10">
          <div className="text-xs text-muted-foreground mb-4 font-medium">RAG Pipeline</div>
          
          <div className="flex items-center justify-between gap-2">
            {pipelineSteps.map((step, index) => (
              <div key={step.label} className="flex items-center">
                <motion.div
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  {/* Node */}
                  <motion.div
                    className="w-10 h-10 rounded-lg glass border border-primary/30 flex items-center justify-center text-lg"
                    whileHover={{ scale: 1.1, borderColor: "hsl(var(--primary))" }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 hsl(var(--primary)/0)",
                        "0 0 15px 2px hsl(var(--primary)/0.3)",
                        "0 0 0 0 hsl(var(--primary)/0)",
                      ],
                    }}
                    transition={{
                      boxShadow: { duration: 2, repeat: Infinity, delay: index * 0.4 },
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  <span className="text-[10px] text-muted-foreground mt-1">{step.label}</span>
                </motion.div>

                {/* Connector arrow */}
                {index < pipelineSteps.length - 1 && (
                  <motion.div
                    className="flex-1 h-0.5 bg-gradient-to-r from-primary/50 to-accent/50 mx-1 relative"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                  >
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-primary/50 rotate-45 -translate-x-0.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    />
                    {/* Data flow particle */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3, ease: "linear" }}
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Agent nodes */}
        <div className="mt-8 relative">
          <div className="text-xs text-muted-foreground mb-3 font-medium">AI Agents</div>
          <div className="flex gap-4 justify-center">
            {["Agent 1", "Agent 2", "Agent 3"].map((agent, i) => (
              <motion.div
                key={agent}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + i * 0.2 }}
              >
                <motion.div
                  className="w-14 h-14 rounded-full glass border border-accent/30 flex items-center justify-center"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/50 to-primary/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center text-xs font-medium text-foreground">
                      {i + 1}
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Connection to pipeline */}
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gradient-to-t from-accent/50 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.8 + i * 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating data particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Output indicator */}
        <motion.div
          className="absolute bottom-4 right-4 glass rounded-lg px-3 py-2 border border-primary/20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.5 }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-xs text-muted-foreground">Response Ready</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AILabIllustration;
