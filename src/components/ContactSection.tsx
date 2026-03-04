import { motion } from "framer-motion";
import { Mail, Github, Linkedin, BookOpen, Phone } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:chandrasekhargadagottu@gmail.com", text: "chandrasekhargadagottu@gmail.com" },
  { icon: Phone, label: "Mobile", href: "tel:+919347421419", text: "+91 9347421419" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/chandrasekhar-gadagottu-aiengineer/", text: "linkedin.com/in/chandrasekhar-gadagottu-aiengineer" },
  { icon: Github, label: "GitHub", href: "https://github.com/Gadagottu", text: "github.com/Gadagottu" },
  { icon: BookOpen, label: "Medium", href: "https://medium.com/@chandrasekhargadagottu", text: "medium.com/@chandrasekhargadagottu" },
];

const ContactSection = () => {

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Get in Touch</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-8 text-center">Reach me at</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/20 transition-all group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{s.label}</p>
                    <p className="text-xs text-muted-foreground">{s.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
