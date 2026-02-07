import { motion } from "framer-motion";

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Central orb */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating code blocks */}
      <motion.div
        className="absolute top-1/4 left-1/4 glass rounded-lg p-3 border border-primary/20"
        animate={{ y: [0, -15, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-destructive/80" />
          <div className="w-2 h-2 rounded-full bg-accent/80" />
          <div className="w-2 h-2 rounded-full bg-primary/80" />
        </div>
        <div className="space-y-1">
          <div className="h-1.5 w-16 bg-primary/40 rounded" />
          <div className="h-1.5 w-12 bg-accent/40 rounded" />
          <div className="h-1.5 w-20 bg-muted-foreground/30 rounded" />
        </div>
      </motion.div>

      {/* UI Component card */}
      <motion.div
        className="absolute top-1/3 right-1/4 glass rounded-xl p-4 border border-accent/20"
        animate={{ y: [0, 10, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-20 h-3 bg-primary/50 rounded mb-2" />
        <div className="w-16 h-2 bg-muted-foreground/30 rounded mb-3" />
        <div className="w-14 h-6 bg-primary/30 rounded-md" />
      </motion.div>

      {/* AI Brain node */}
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-16 h-16 rounded-full glass border border-primary/30 flex items-center justify-center"
        animate={{ scale: [1, 1.1, 1], boxShadow: ["0 0 20px hsl(var(--primary)/0.2)", "0 0 40px hsl(var(--primary)/0.4)", "0 0 20px hsl(var(--primary)/0.2)"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-full h-full rounded-full bg-background/50 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>
        </motion.div>
      </motion.div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
        <motion.line
          x1="30%" y1="35%" x2="45%" y2="50%"
          stroke="hsl(var(--primary))" strokeWidth="1" strokeOpacity="0.3"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.line
          x1="70%" y1="40%" x2="55%" y2="55%"
          stroke="hsl(var(--accent))" strokeWidth="1" strokeOpacity="0.3"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
      </svg>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/40"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 15}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Data flow indicators */}
      <motion.div
        className="absolute bottom-1/4 right-1/3 flex gap-1"
        animate={{ x: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-4 rounded-full bg-accent/50"
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default HeroIllustration;
