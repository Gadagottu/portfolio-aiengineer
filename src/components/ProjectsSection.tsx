import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
}

const projects: Project[] = [
  {
    title: "WhatsApp AI Automation Bot",
    description: "Intelligent automation bot for WhatsApp that handles customer queries, appointment scheduling, and CRM integration using LangChain.",
    tech: ["Python", "LangChain", "n8n", "FastAPI", "PostgreSQL"],
    github: "https://github.com/Gadagottu",
  },
  {
    title: "AI Recommendation System",
    description: "Collaborative and content-based hybrid recommendation engine for e-commerce, delivering personalized product suggestions at scale.",
    tech: ["Python", "TensorFlow", "Redis", "Docker", "FastAPI"],
    github: "https://github.com/Gadagottu",
  },
  {
    title: "RAG Chatbot",
    description: "Retrieval-Augmented Generation chatbot with vector-based document search, context-aware responses, and citation tracking.",
    tech: ["LangChain", "OpenAI", "Pinecone", "React", "FastAPI"],
    github: "https://github.com/Gadagottu",
  },
  {
    title: "Deepfake Video Detection",
    description: "RNN-based solution to detect and mitigate deepfake videos, contributing to cybersecurity and media authenticity with face detection and bounding box visualization.",
    tech: ["TensorFlow", "OpenCV", "RNN", "Python", "Computer Vision"],
    github: "https://github.com/Gadagottu",
  },
  {
    title: "Result Management System",
    description: "User-friendly web application to streamline academic result management with CRUD features for student records, enhancing efficiency in result-related tasks.",
    tech: ["HTML", "CSS", "JavaScript", "FastAPI", "Python"],
    github: "https://github.com/Gadagottu",
  },
  {
    title: "Course Generator",
    description: "AI-powered course generation platform inspired by NotebookLM, automatically creating structured educational content from documents with interactive lessons and assessments.",
    tech: ["React", "TypeScript", "OpenAI", "LangChain", "FastAPI", "PostgreSQL"],
    github: "https://github.com/Gadagottu",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Portfolio</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:border-primary/20 transition-all group"
            >
              <div>
                <div className="w-full h-36 rounded-xl bg-secondary/50 mb-5 flex items-center justify-center overflow-hidden">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="gradient-text font-heading font-bold text-xl">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href={project.github} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Github size={16} /> GitHub
                </a>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
