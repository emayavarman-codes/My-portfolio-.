import { motion } from "framer-motion";
import { ExternalLink, Code, Trophy, Star, GitBranch } from "lucide-react";
import GradientBlurs from "@/components/GradientBlurs";

const profiles = [
  {
    name: "GitHub",
    username: "@yourusername",
    stats: "500+ contributions",
    description: "Open source contributions and personal projects",
    icon: GitBranch,
    color: "from-gray-600 to-gray-800",
    link: "https://github.com",
    bgColor: "bg-gray-800/50",
  },
  {
    name: "LeetCode",
    username: "@yourusername",
    stats: "300+ problems solved",
    description: "Algorithm and data structure challenges",
    icon: Code,
    color: "from-yellow-500 to-orange-500",
    link: "https://leetcode.com",
    bgColor: "bg-yellow-900/20",
  },
  {
    name: "SkillRack",
    username: "@yourusername",
    stats: "Gold Badge",
    description: "Programming skill assessments and certifications",
    icon: Trophy,
    color: "from-purple-500 to-pink-500",
    link: "https://skillrack.com",
    bgColor: "bg-purple-900/20",
  },
  {
    name: "HackerRank",
    username: "@yourusername",
    stats: "5-star rated",
    description: "Technical challenges and competitions",
    icon: Star,
    color: "from-green-500 to-emerald-500",
    link: "https://hackerrank.com",
    bgColor: "bg-green-900/20",
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
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Profiles = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden pt-24 pb-12 px-6">
      <GradientBlurs />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">&lt;profiles /&gt;</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Coding <span className="gradient-text">Profiles</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Check out my coding journey across various competitive programming and development platforms.
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group block"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className={`glass rounded-2xl p-8 h-full ${profile.bgColor} border border-transparent hover:border-primary/30 transition-all`}>
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${profile.color}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <profile.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <motion.div
                    className="p-2 rounded-xl bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.2 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{profile.name}</h3>
                <p className="text-muted-foreground font-mono text-sm mb-3">
                  {profile.username}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {profile.description}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary font-medium text-sm">
                  <Trophy className="w-4 h-4" />
                  {profile.stats}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Profiles;
