import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MessageSquare,
  Send,
  MapPin,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    values: ["+91 8851454740", "+91 8860509005"],
    href: ["tel:+918851454740", "tel:+918860509005"],
  },
  {
    icon: Mail,
    label: "Email",
    values: ["web.forge2930@gmail.com"],
    href: ["mailto:web.forge2930@gmail.com"],
  },
  {
    icon: MapPin,
    label: "Location",
    values: ["India"],
    href: null,
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Contact Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Let's Build <span className="text-gradient">Something Great</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            Have a project idea or need a modern website or web application? 
            Let's discuss how WebForge can help you bring it to life.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border shadow-soft"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{info.label}</p>
                    <div className="space-y-1">
                      {info.values.map((value, idx) => (
                        info.href ? (
                          <a
                            key={idx}
                            href={info.href[idx]}
                            className="block text-muted-foreground hover:text-primary transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p key={idx} className="text-muted-foreground">{value}</p>
                        )
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 shadow-medium flex-1"
                onClick={() => window.open("tel:+918851454740")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Book a Free Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-2"
                onClick={() => {
                  const message = "Hi! I'm interested in WebForge services.";
                  window.open(`https://wa.me/918851454740?text=${encodeURIComponent(message)}`);
                }}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card border border-border shadow-soft space-y-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                Send us a message
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:opacity-90 shadow-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
