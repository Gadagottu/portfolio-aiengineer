import { motion } from "framer-motion";
import { Sparkles, Brain, Code, Zap } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const highlights = [
  { icon: Brain, label: "AI & ML Expert" },
  { icon: Code, label: "Full-Stack AI" },
  { icon: Zap, label: "Automation" },
  { icon: Sparkles, label: "NLP Systems" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-3">About Me</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Passionate about <span className="gradient-text">Intelligent Systems</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5"
          >
            <div className="glass-card rounded-2xl p-2 glow-effect">
              <img
                src={profilePhoto}
                alt="About me"
                className="rounded-xl w-full aspect-square object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-3/5"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm an AI Engineer with deep expertise in building intelligent systems that bridge the gap between cutting-edge research and real-world applications. My work spans machine learning, natural language processing, voice AI, and end-to-end automation pipelines.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I specialize in designing robust AI architectures — from RAG-powered chatbots and recommendation engines to voice assistants and enterprise automation workflows. I'm passionate about leveraging AI to create solutions that are scalable, impactful, and production-ready.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/20 transition-all group"
                >
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs font-medium text-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
