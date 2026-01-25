import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Users,
  BarChart3,
  Zap,
  Settings,
  Layout,
  Database,
} from "lucide-react";

const projects = [
  {
    title: "BizCommand",
    subtitle: "Business Dashboard & Admin Panel",
    description:
      "A full-stack business dashboard and admin panel designed to help businesses monitor performance, manage users, and control internal operations from a single interface.",
    features: [
      { icon: Shield, text: "Secure Authentication" },
      { icon: Users, text: "Role-Based Access" },
      { icon: BarChart3, text: "Business Analytics" },
      { icon: Zap, text: "Real-Time Updates" },
      { icon: Settings, text: "User Management" },
      { icon: Layout, text: "Responsive UI" },
      { icon: Database, text: "Scalable Backend" },
    ],
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
    gradient: "from-blue-600 to-cyan-500",
    image: null, // Placeholder for project image
  },
  {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Online Store",
    description:
      "A complete e-commerce solution with product management, cart functionality, secure checkout, and order tracking for modern online businesses.",
    features: [
      { icon: Shield, text: "Secure Payments" },
      { icon: Users, text: "User Accounts" },
      { icon: BarChart3, text: "Sales Analytics" },
      { icon: Zap, text: "Fast Performance" },
      { icon: Settings, text: "Admin Dashboard" },
      { icon: Layout, text: "Mobile-First Design" },
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-purple-600 to-pink-500",
    image: null,
  },
  {
    title: "Real-Time Chat App",
    subtitle: "WebSocket-Powered Communication",
    description:
      "A real-time messaging application with instant message delivery, typing indicators, online status, and group chat functionality.",
    features: [
      { icon: Zap, text: "Instant Messaging" },
      { icon: Users, text: "Group Chats" },
      { icon: Shield, text: "End-to-End Security" },
      { icon: Layout, text: "Modern Interface" },
    ],
    techStack: ["React", "Socket.io", "Node.js", "MongoDB"],
    gradient: "from-green-600 to-teal-500",
    image: null,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Our Projects
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Real-World Applications <span className="text-gradient">We've Built</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Explore our portfolio of production-grade web applications and dashboards.
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="h-full p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-strong transition-all duration-300"
                  >
                    {/* Project Image Placeholder */}
                    <div
                      className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                      <span className="text-4xl font-bold text-white relative z-10">
                        {project.title.charAt(0)}
                      </span>
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 blur-xl" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-primary font-medium">{project.subtitle}</p>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.slice(0, 6).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <feature.icon className="w-4 h-4 text-primary" />
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-muted text-muted-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border shadow-medium hover:bg-muted" />
            <CarouselNext className="hidden md:flex -right-4 bg-card border-border shadow-medium hover:bg-muted" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
