import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Youtube, Instagram, ArrowDown } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Scene3D from "@/components/Scene3D";
import GradientBlurs from "@/components/GradientBlurs";

const socialLinks = [
  { icon: Github, href: "https://github.com/emayavarman-codes", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/emayavarman-a-811aa6244", label: "LinkedIn" },

  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

const achievements = [
  { number: "3+", label: "Projects Completed" },
  { number: "0+", label: "Years Experience" },
  { number: "5+", label: "Certifications courses" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      <ParticlesBackground />
      <Scene3D />
      <GradientBlurs />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto z-10"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text glow-text">EMAYAVARMAN</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Aspiring Java Software Developer <br></br>
            <span className="text-primary"> Learning, building, and growing as a developer.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Link to="/contact">
              <motion.button
                className="relative px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Hire Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
            <Link to="/projects">
              <motion.button
                className="px-8 py-4 rounded-2xl glass border border-primary/30 font-semibold text-lg hover:border-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:bg-primary/10 transition-colors group"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          {/* About Text */}
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-primary font-mono text-sm"
            >
            
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              About
              <span className="gradient-text"> me</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
             I am an MCA graduate with a solid foundation in Java, HTML, CSS, databases, and basic software engineering principles. I have hands-on experience through academic projects like an Event Management System, where I worked on design, development, and database integration.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              I am passionate about writing efficient code, learning new technologies, and improving my problem-solving abilities through continuous practice. As a fresher, I am eager to start my career in a collaborative environment where I can apply my skills, gain industry exposure, and grow as a software professional.
            </motion.p>
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="/pdf/resume1.pdf" download>
                <motion.button
                  className="px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/80 font-medium flex items-center gap-2 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                  <ArrowDown className="w-4 h-4" />
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center group hover:bg-primary/5 transition-colors"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {achievement.number}
                </motion.div>
                <div className="text-muted-foreground text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
