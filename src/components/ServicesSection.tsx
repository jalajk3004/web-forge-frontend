import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Lock,
  LayoutDashboard,
  Rocket,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    description:
      "Business websites, landing pages, portfolio websites, startup websites. SEO-friendly and fast-loading sites built to convert.",
    features: ["Business Sites", "Landing Pages", "Portfolio", "SEO Optimized"],
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Mobile-first design with tablet and desktop optimization. Cross-browser compatibility with modern UI/UX design principles.",
    features: ["Mobile-First", "Cross-Browser", "Modern UI/UX", "Retina Ready"],
  },
  {
    icon: Lock,
    title: "Authentication & User Management",
    description:
      "Secure login/signup systems with role-based access control. JWT and session-based auth with protected routes and dashboards.",
    features: ["Secure Login", "Role-Based Access", "JWT Auth", "Protected Routes"],
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications & Dashboards",
    description:
      "Business dashboards, admin panels, analytics platforms, CRM-style tools, and internal business applications.",
    features: ["Admin Panels", "Analytics", "CRM Tools", "Business Apps"],
  },
  {
    icon: Rocket,
    title: "SaaS & Startup MVP Development",
    description:
      "MVP design & development with scalable backend architecture. Database design and comprehensive API development.",
    features: ["MVP Development", "Scalable Backend", "Database Design", "API Development"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            What We <span className="text-gradient">Build</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            From simple websites to complex web applications, we deliver solutions 
            tailored to your business needs.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-strong transition-all duration-500"
            >
              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
