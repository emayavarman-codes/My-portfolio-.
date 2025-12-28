import { motion } from "framer-motion";
import { FileDown, Eye, ExternalLink } from "lucide-react";
import GradientBlurs from "@/components/GradientBlurs";

const Resume = () => {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden pt-24 pb-12 px-6">
      <GradientBlurs />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm">&lt;resume /&gt;</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my resume or view it online to learn more about my experience and qualifications.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          {/* Preview Image */}
          <motion.div
            className="aspect-[8.5/11] bg-secondary rounded-2xl mb-8 overflow-hidden relative group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FileDown className="w-10 h-10 text-primary-foreground" />
                </motion.div>
                <p className="text-muted-foreground font-medium">Resume Preview</p>
              </div>
            </div>
            
            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <motion.button
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5" />
                View Full Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="pdf/resume1.pdf"
              download
              className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FileDown className="w-6 h-6" />
              </motion.div>
              Download PDF
            </motion.a>
            <motion.a
              href="pdf/resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-6 py-4 rounded-xl glass border border-primary/30 font-semibold text-lg flex items-center justify-center gap-3 hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-6 h-6" />
              View Online
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Years Exp.", value: "5+" },
            { label: "Companies", value: "4" },
            { label: "Projects", value: "50+" },
            { label: "Technologies", value: "20+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
