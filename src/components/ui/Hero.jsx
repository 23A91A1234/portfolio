import { motion } from "framer-motion";
import profilePhoto from "../../assets/profile-photo.jpeg";
import { Github, Linkedin, Mail, Download, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              M. Bhavana{" "}
              <span className="text-gradient">Siva Sri</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-2 font-medium">
              Frontend & Full Stack Developer
            </p>
            <p className="text-muted-foreground flex items-center justify-center lg:justify-start gap-1 mb-6">
              <MapPin size={16} /> Rajahmundry, Andhra Pradesh
            </p>
            <p className="text-secondary-foreground/80 max-w-lg mb-8 leading-relaxed text-sm sm:text-base">
              Motivated IT undergraduate with a passion for building scalable applications using the MERN stack. Eager to contribute to high-impact software products.
            </p>

            <div className="flex items-center gap-4 justify-center lg:justify-start flex-wrap">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity shadow-glow"
              >
                <Download size={18} /> Download Resume
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/23A91A1234" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass hover:border-primary/50 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/bhavana-siva-sri-2a9168291/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg glass hover:border-primary/50 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:bhavanasivasrimalireddy@gmail.com" className="p-3 rounded-lg glass hover:border-primary/50 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-30 scale-110" />
              <img
                src={profilePhoto}
                alt="M. Bhavana Siva Sri"
                className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/30 shadow-glow"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
