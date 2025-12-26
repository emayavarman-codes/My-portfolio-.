import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/emayavarman-codes", label: "GitHub", color: "hover:text-gray-300" },
  { icon: Linkedin, href: "https://linkedin.com/in/emayavarman-a-811aa6244", label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-400" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative border-t border-border/50 bg-card/30 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <motion.div
              className="flex items-center gap-2 justify-center md:justify-start mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl gradient-text">Portfolio</span>
            </motion.div>
            <p className="text-muted-foreground text-sm">
              Building digital experiences that matter.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl glass text-muted-foreground transition-colors ${social.color}`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} emayavarman. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
