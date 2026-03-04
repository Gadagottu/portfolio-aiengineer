import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import udemyCertificate from "@/assets/UC-6610b958-c952-4ccb-81c1-7853ede5d64d.pdf";
import ibmCertificate from "@/assets/certificate.pdf";

interface Certificate {
  title: string;
  issuer: string;
  type: "course" | "achievement" | "bootcamp";
  link?: string;
}

const certificates: Certificate[] = [
  {
    title: "Complete Generative AI Course with LangChain and Hugging Face",
    issuer: "Udemy",
    type: "course",
    link: udemyCertificate,
  },
  {
    title: "Deep Learning for Developers",
    issuer: "Infosys Springboard",
    type: "course",
  },
  {
    title: "SQL and Relational Databases",
    issuer: "IBM Developer Skills Network",
    type: "course",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    type: "course",
    link: ibmCertificate,
  },
  {
    title: "Finisher of Season 8: Build and Blog Marathon on AI",
    issuer: "Google Developer Groups",
    type: "achievement",
    link: "https://www.linkedin.com/posts/chandrasekhar-gadagottu-aiengineer_googlecloud-ai-textsummarization-activity-7280839694144192512-rGZP?utm_source=share&utm_medium=member_android&rcm=ACoAAEhbs4gBTvWYwHTV9WeOrlm45fD__tKU1a0",
  },
  {
    title: "1-Day Microsoft Fabric & Power Platform Bootcamp",
    issuer: "Hyderabad Data & AI Community & India Microsoft Fabric User Group",
    type: "bootcamp",
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "course":
      return "bg-primary/10 text-primary border-primary/20";
    case "achievement":
      return "bg-accent/10 text-accent border-accent/20";
    case "bootcamp":
      return "bg-secondary text-secondary-foreground border-border";
    default:
      return "bg-secondary text-secondary-foreground border-border";
  }
};

const getTypeLabel = (type: string) => {
  switch (type) {
    case "course":
      return "Course";
    case "achievement":
      return "Achievement";
    case "bootcamp":
      return "Bootcamp";
    default:
      return "Certificate";
  }
};

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Learning</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Certificates & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, i) => {
            const CertificateCard = ({ children }: { children: React.ReactNode }) => {
              if (cert.link) {
                return (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="glass-card rounded-2xl p-6 hover:border-primary/20 transition-all group cursor-pointer block"
                  >
                    {children}
                  </motion.a>
                );
              }
              
              return (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl p-6 hover:border-primary/20 transition-all group"
                >
                  {children}
                </motion.div>
              );
            };

            return (
              <CertificateCard key={cert.title}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className={`inline-block text-xs px-2 py-1 rounded-md border font-medium mb-2 ${getTypeColor(cert.type)}`}>
                      {getTypeLabel(cert.type)}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-heading text-base font-semibold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.issuer}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">
                    {cert.link ? "View Certificate" : "Certified"}
                  </span>
                  {cert.link && (
                    <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </CertificateCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;