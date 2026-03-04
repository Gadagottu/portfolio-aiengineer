import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import resumePDF from "@/assets/chandrasekhar@ai_enginner.pdf";

const titles = ["Machine Learning", "NLP", "AI Systems", "Voice AI", "Automation"];

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[currentTitle];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentTitle((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 mx-auto px-4 md:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 xl:gap-32">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-heading text-sm tracking-[0.2em] uppercase mb-4"
            >
              Welcome to my portfolio
            </motion.p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">chandra sekhar</span>
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              AI Engineer —{" "}
              <span className="text-primary">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Building intelligent AI systems, machine learning models, and voice-powered automation that solve real-world problems at scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-all glow-effect"
              >
                <FolderOpen size={18} />
                View Projects
              </button>
              <a
                href={resumePDF}
                download="Chandrasekhar_AI_Engineer_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm glass-card text-foreground hover:border-primary/30 transition-all gradient-border"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-110" />
              <div className="absolute inset-2 rounded-full bg-accent/10 blur-2xl" />
              
              {/* Image container with better spacing */}
              <div className="relative w-full h-full rounded-full overflow-hidden gradient-border p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={profilePhoto}
                    alt="Chandrasekhar - AI Engineer"
                    className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30 blur-sm animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-accent/20 blur-md animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
