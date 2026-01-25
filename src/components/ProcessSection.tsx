import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  Puzzle,
  Code,
  TestTube,
  Rocket,
  Wrench,
} from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Discovery & Consultation",
    description: "Understand your business goals and requirements",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Puzzle,
    title: "Planning & Design",
    description: "Architecture, UI/UX, and technical roadmap",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Development",
    description: "Frontend, backend, APIs, and database",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: TestTube,
    title: "Testing & Optimization",
    description: "Security, performance, responsiveness",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Launch and production setup",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Support & Maintenance",
    description: "Ongoing improvements and updates",
    color: "from-indigo-500 to-purple-500",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            How We <span className="text-gradient">Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Our streamlined process ensures quality delivery at every step.
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl bg-background border border-border shadow-soft hover:shadow-strong transition-all duration-300"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mt-2`}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
