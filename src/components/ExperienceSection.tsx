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
    role: "AI Engineer",
    company: "Kriyo",
    duration: "May 2026 - Present",
    description: "Build production AI products for education and enterprise. Combine semantic retrieval and BM25 with Reciprocal Rank Fusion in hybrid RAG systems. Develop multi-tenant assistants for school enquiries and support, with isolated knowledge bases and tenant-level data isolation, plus WhatsApp integrations and ticketing workflows. Build real-time voice agents that combine speech recognition, conversational AI, and neural text-to-speech. Deploy services on AWS Lambda and with Docker, using MongoDB and S3 for storage.",
    tech: ["Advanced RAG", "Agentic AI", "Hybrid Search", "BM25", "Reciprocal Rank Fusion", "Multi-Tenant AI", "Voice AI", "Real-Time Speech Processing", "OpenAI Realtime API", "Whisper", "Kokoro TTS", "AWS Lambda"],
  },
  {
    role: "AI & ML Engineer",
    company: "Dhanush Softech",
    duration: "May 2025 - May 2026",
    description: "Built student–organization matching with NLP embeddings for the KNCCI Internship Portal and developed AI course generation for personalized, skill-based learning paths in the Shangazi AI Learning System. Contributed to KEMIS Face Recognition for institutional automation. Built conversational assistants with Hugging Face Transformers and automated WhatsApp query handling with tool-based n8n workflows.",
    tech: ["Python", "NLP Embeddings", "Semantic Matching", "AI Course Generation", "Hugging Face Transformers", "Chatbot Development", "Face Recognition", "n8n", "WhatsApp Automation"],
  },
  {
    role: "AI & ML Intern",
    company: "Dhanush Softech",
    duration: "Feb 2025 - May 2025",
    description: "Developed student–organization matching for an AI-powered internship portal and worked on a course generator that created personalized learning paths. Built a conversational chatbot with Hugging Face Transformers and designed tool-based n8n workflows to automate responses to WhatsApp queries.",
    tech: ["Python", "Natural Language Processing", "Student–Organization Matching", "AI Course Generation", "Hugging Face Transformers", "Chatbot Development", "n8n", "WhatsApp Automation"],
  },
  {
    role: "Machine Learning Intern",
    company: "Bharat Intern",
    duration: "Jan 2024 - Feb 2024",
    description: "Built regression models to predict house prices and multiclass models to classify Iris flower species using Python, TensorFlow, and scikit-learn. Developed end-to-end machine learning pipelines covering data preprocessing, model training, and deployment, and implemented neural networks to build practical deep-learning experience.",
    tech: ["Python", "TensorFlow", "scikit-learn", "Data Preprocessing", "Neural Networks", "ML Pipelines", "Regression", "Multiclass Classification"],
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
              key={`${exp.company}-${exp.duration}`}
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
