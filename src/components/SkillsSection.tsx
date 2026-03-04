import { motion } from "framer-motion";
import {
  Code2, Database, Brain, Cpu, Layers, GitBranch,
  Terminal, Box, MessageSquare, Mic, Search, Workflow
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages & Frontend",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "JavaScript", icon: Terminal },
      
      { name: "SQL", icon: Database },
      { name: "HTML/CSS", icon: Code2 },
      { name: "React", icon: Code2 },
      { name: "Angular", icon: Code2 },
      { name: "Bootstrap", icon: Layers },
    ],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Machine Learning", icon: Brain },
      { name: "Deep Learning", icon: Cpu },
      { name: "NLP", icon: MessageSquare },
      { name: "LLMs", icon: Brain },
      { name: "RAG", icon: Search },
      { name: "Transformers", icon: Layers },
      { name: "CNN", icon: Cpu },
      { name: "RNN", icon: Cpu },
      { name: "LSTM", icon: Cpu },
      { name: "Generative AI", icon: Brain },
      { name: "Agentic AI", icon: Brain },
    ],
  },
  {
    title: "ML Frameworks",
    skills: [
      { name: "TensorFlow", icon: Cpu },
      { name: "Keras", icon: Layers },
      { name: "PyTorch", icon: Brain },
      { name: "Scikit-learn", icon: Cpu },
      { name: "Hugging Face", icon: Brain },
      { name: "LangChain", icon: Layers },
    ],
  },
  {
    title: "Data & CV Libraries",
    skills: [
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: Cpu },
      { name: "Matplotlib", icon: Layers },
      { name: "OpenCV", icon: Search },
      { name: "MediaPipe", icon: Cpu },
    ],
  },
  {
    title: "Backend & Deployment",
    skills: [
      { name: "FastAPI", icon: Workflow },
      { name: "REST APIs", icon: Terminal },
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Oracle", icon: Database },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">Expertise</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="glass-card rounded-xl p-5 flex flex-col items-center gap-3 hover:border-primary/20 transition-all cursor-default group"
                  >
                    <skill.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
