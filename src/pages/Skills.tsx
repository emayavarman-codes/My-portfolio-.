import { motion } from "framer-motion";
import { Code2, Palette, Database, Globe, Smartphone, Terminal, Cpu, Cloud } from "lucide-react";
import GradientBlurs from "@/components/GradientBlurs";

const skills = [
  { name: "HTML", level: 70, icon: Code2, category: "Frontend" },
  { name: "CSS", level: 60, icon: Terminal, category: "Frontend" },
  { name: "Java", level: 85, icon: Globe, category: "Backend" },
  { name: "Spring Boot", level: 60, icon: Cpu, category: "Framework" },
  { name: "MySQL", level: 70, icon: Database, category: "Database" },
  { name: "Hibernate", level: 78, icon: Cloud, category: "Framework" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Skills = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden pt-24 pb-12 px-6">
      <GradientBlurs />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm"></span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical skills and proficiency levels across various technologies and domains.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="glass rounded-2xl p-6 group hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="p-3 rounded-xl bg-primary/10 text-primary"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <skill.icon className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                    <span className="text-xs text-muted-foreground font-mono">
                      {skill.category}
                    </span>
                  </div>
                </div>
                <motion.span
                  className="text-2xl font-bold gradient-text"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {skill.level}%
                </motion.span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <p className="text-muted-foreground mb-4">
              Always learning, always growing. Currently exploring:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["AI/ML", "Web3", "Rust", "Three.js"].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
