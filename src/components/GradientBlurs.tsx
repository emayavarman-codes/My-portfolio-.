import { motion } from "framer-motion";

const GradientBlurs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Primary glow - top left */}
      <motion.div
        className="gradient-blur w-[600px] h-[600px] bg-primary/30 -top-48 -left-48"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Accent glow - bottom right */}
      <motion.div
        className="gradient-blur w-[500px] h-[500px] bg-accent/25 -bottom-32 -right-32"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary glow - center */}
      <motion.div
        className="gradient-blur w-[400px] h-[400px] bg-primary/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GradientBlurs;
