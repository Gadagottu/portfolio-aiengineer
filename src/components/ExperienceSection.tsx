import { motion } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech: string[];
}

const experiences: Experience[] = [
  {
    role: "AI & ML Traninee",
    company: "Dhanush Softech",
    duration: "Sept 2025 - Present",
    description: "Built and contributed to multiple AI-driven platforms including KNCCI Internship Portal, Shangazi AI Learning System, and KEMIS Face Recognition System to enhance digital learning and institutional automation. Developed an AI-powered internship portal with intelligent student–organization matching and a personalized AI course generator for skill-based learning paths. Implemented a chatbot using Hugging Face Transformers for conversational assistance and designed an automated WhatsApp chatbot using n8n with tool-based workflows for autonomous query handling",
    tech: ["Python", "NLP", "Hugging Face", "n8n", "ML Pipelines", "Transformers", "Predictive Analytics"],
  },
  {
    role: "AI & ML Intern",
    company: "Dhanush Softech",
    duration: "Jun 2025 – Sept 2025",
    description: "Built an AI-powered internship portal with student-organization matching feature and AI course generator for personalized learning paths. Developed chatbot using Hugging Face Transformers and designed automated WhatsApp chatbot using n8n with tool-based workflows for autonomous query handling.",
    tech: ["Python", "NLP", "Hugging Face", "n8n", "ML Pipelines", "Transformers", "Predictive Analytics"],
  },
  {
    role: "Machine Learning Intern",
    company: "Bharat Intern",
    duration: "Jan 2024 – Feb 2024",
    description: "Built machine learning models for house price prediction and Iris classification using Python, TensorFlow, and scikit-learn. Developed end-to-end ML pipelines from preprocessing to deployment and implemented neural networks gaining foundational deep-learning experience.",
    tech: ["Python", "TensorFlow", "scikit-learn", "Data Preprocessing", "Neural Networks", "ML Pipelines"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Career</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10 glow-effect" />

              {/* Card */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "" : "md:ml-auto"}`}>
                <div className="glass-card rounded-2xl p-6 hover:border-primary/20 transition-all">
                  <span className="text-xs text-primary font-heading font-medium tracking-wider uppercase">
                    {exp.duration}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
