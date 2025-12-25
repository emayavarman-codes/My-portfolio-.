import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import GradientBlurs from "@/components/GradientBlurs";

const articles = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for structuring large-scale React applications with proper state management and code splitting.",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends that will shape the future of web development in the coming years.",
    date: "Dec 15, 2024",
    readTime: "6 min read",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics and how to use them effectively for type-safe, reusable code.",
    date: "Dec 10, 2024",
    readTime: "10 min read",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
  },
  {
    title: "CSS Animation Techniques",
    excerpt: "Advanced CSS animation techniques to create smooth, performant animations without JavaScript.",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1550063873-ab792950096b?w=600&h=400&fit=crop",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const Articles = () => {
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
          <span className="text-primary font-mono text-sm">&lt;articles /&gt;</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, design, and technology.
          </p>
        </motion.div>

        {/* Articles List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              variants={itemVariants}
              className="glass rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-primary font-medium"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
