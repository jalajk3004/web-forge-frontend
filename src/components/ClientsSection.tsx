import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket,
  Lightbulb,
  Building2,
  User,
  Users,
  Globe,
} from "lucide-react";

const clientTypes = [
  {
    icon: Rocket,
    title: "Startups",
    description: "Early-stage companies building their first product",
  },
  {
    icon: Lightbulb,
    title: "Founders",
    description: "Entrepreneurs with big ideas needing technical execution",
  },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    description: "Companies looking to establish or enhance their digital presence",
  },
  {
    icon: User,
    title: "Personal Brands",
    description: "Professionals building their online portfolio and identity",
  },
  {
    icon: Users,
    title: "Agencies",
    description: "Digital agencies needing development partners",
  },
  {
    icon: Globe,
    title: "Companies Going Digital",
    description: "Traditional businesses transforming to digital",
  },
];

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Our Clients
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Who We <span className="text-gradient">Work With</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            We partner with businesses and individuals at every stage of their 
            digital journey.
          </motion.p>
        </div>

        {/* Clients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-strong transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <client.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {client.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {client.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
