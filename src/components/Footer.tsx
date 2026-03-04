import { Github, Linkedin, BookOpen, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Chandrasekhar Gadagottu</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              AI Engineer passionate about building intelligent systems and innovative solutions. 
              Specializing in machine learning, deep learning, and full-stack development.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={14} />
              <span>Hyderabad, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#experience" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#skills" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Let's Connect</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:chandrasekhargadagottu@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={16} />
                <span>chandrasekhargadagottu@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 mt-2">
                <a href="https://github.com/Gadagottu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/chandrasekhar-gadagottu-aiengineer/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://medium.com/@chandrasekhargadagottu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <BookOpen size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Chandrasekhar Gadagottu. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
