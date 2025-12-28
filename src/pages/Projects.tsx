import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import GradientBlurs from "@/components/GradientBlurs";

const projects = [
  {
    title: "A Robust event management system for efficient planning and execution",
    description: " Developed a web-based event management system to streamline event planning, registration, and execution. Deployed the system online using PHP and MySQL on a web hosting platform.",
    tags: ["PHP", "SQL"],
    image: "src/Img/event.png",
    github: "https://github.com/emayavarman-codes/EVENT_MANAGEMENT_SYSTEM_PROJECT/tree/master",
    live: "http://localhost/royal_event/index.php",
  },
  {
    title: " College Website Project",
    description: " Designed a responsive and modern college website UI with clean layout and professional styling",
    tags: ["HTML", "CSS"],
    image: "src/Img/clg.png",
    github: "https://github.com/emayavarman-codes/college_website",
    live: "https://emayavarman.neocities.org/college%20website/#contact",
  },
  {
    title: " Online Food Ordering System (OOPS- Based):",
    description: " Developed an online food ordering system using Object-Oriented Programming principles in Java. Implemented features such as menu browsing, order placement, and payment processing.",
    tags: ["HTML", "CSS", "Java", "MySQL"],
    image: "src/Img/food.png",
    github: "https://github.com/emayavarman-codes/Online-food-order-.",
    live: "https://online-food-order-omega.vercel.app/",
  },
 
 
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Projects = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden pt-24 pb-12 px-6">
      <GradientBlurs />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm"></span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Project <span className="gradient-text">Work</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in design, development, and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="glass rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  
                  {/* Overlay Links */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/80 hover:bg-background transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-background/80 hover:bg-background transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Folder className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono rounded-md bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
