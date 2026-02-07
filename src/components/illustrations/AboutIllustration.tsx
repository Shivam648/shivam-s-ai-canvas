import { motion } from "framer-motion";

const AboutIllustration = () => {
  const milestones = [
    { label: "Learn", progress: 100 },
    { label: "Build", progress: 100 },
    { label: "Scale", progress: 75 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      {/* Background glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main container */}
      <div className="relative h-full glass rounded-2xl border border-border/50 p-6 overflow-hidden">
        {/* Roadmap path */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <motion.path
            d="M 50 80 Q 100 120 150 100 T 250 140 T 350 100"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeOpacity="0.3"
            strokeDasharray="8,8"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>

        {/* Journey milestones */}
        <div className="relative z-10 flex flex-col gap-6 pt-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.label}
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {/* Node */}
              <motion.div
                className="relative w-10 h-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
              >
                <div className="w-4 h-4 rounded-full bg-primary" />
                {index < milestones.length - 1 && (
                  <motion.div
                    className="absolute top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-primary/50 to-transparent -translate-x-1/2"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: index * 0.3 + 0.2, duration: 0.5 }}
                  />
                )}
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-sm font-medium text-foreground mb-1">{milestone.label}</div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${milestone.progress}%` }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill badges */}
        <div className="absolute bottom-6 right-6 flex flex-wrap gap-2 max-w-[150px] justify-end">
          {["Angular", "AI", "Node"].map((skill, i) => (
            <motion.div
              key={skill}
              className="px-2 py-1 text-xs rounded-full glass border border-primary/20 text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-accent/10 border border-accent/20"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-6 h-6 rounded bg-accent/30" />
          </div>
        </motion.div>

        {/* Floating code snippet */}
        <motion.div
          className="absolute bottom-20 left-6 glass rounded-lg p-2 border border-border/30"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex gap-1 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
          </div>
          <div className="space-y-0.5">
            <div className="h-1 w-10 bg-primary/30 rounded" />
            <div className="h-1 w-8 bg-accent/30 rounded" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutIllustration;
