import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    title: "Frontend",
    technologies: [
      { name: "Next.js", color: "from-gray-800 to-gray-600" },
      { name: "React", color: "from-cyan-500 to-blue-500" },
      { name: "Tailwind CSS", color: "from-teal-400 to-cyan-400" },
      { name: "TypeScript", color: "from-blue-600 to-blue-400" },
      { name: "HTML/CSS", color: "from-orange-500 to-red-500" },
      { name: "JavaScript", color: "from-yellow-400 to-amber-500" },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { name: "Node.js", color: "from-green-600 to-green-400" },
      { name: "Python", color: "from-blue-500 to-yellow-400" },
      { name: "Express", color: "from-gray-700 to-gray-500" },
      { name: "FastAPI", color: "from-teal-500 to-green-500" },
      { name: "REST APIs", color: "from-purple-500 to-pink-500" },
      { name: "Socket.io", color: "from-gray-900 to-gray-700" },
    ],
  },
  {
    title: "Database",
    technologies: [
      { name: "PostgreSQL", color: "from-blue-700 to-blue-500" },
      { name: "MySQL", color: "from-orange-600 to-blue-600" },
      { name: "MongoDB", color: "from-green-500 to-green-700" },
    ],
  },
  {
    title: "Deployment & DevOps",
    technologies: [
      { name: "Vercel", color: "from-gray-900 to-gray-700" },
      { name: "GitHub", color: "from-gray-800 to-gray-600" },
      { name: "Docker", color: "from-blue-500 to-blue-400" },
      { name: "AWS", color: "from-orange-500 to-yellow-500" },
    ],
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Tech Stack
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Technologies We <span className="text-gradient">Use</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            We use a modern and reliable tech stack to ensure your product is fast, 
            secure, and scalable.
          </motion.p>
        </div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border shadow-soft"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + categoryIndex * 0.1 + techIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 rounded-xl bg-gradient-to-r ${tech.color} text-white font-medium text-sm shadow-medium cursor-default`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
