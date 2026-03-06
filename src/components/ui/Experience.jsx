import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Work <span className="text-gradient">Experience</span></h2>
          </div>

          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-primary" />
            <motion.div
              className="glass rounded-2xl p-6 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                <h3 className="text-lg font-bold">Frontend Developer</h3>
                <span className="text-primary font-mono text-sm">May 2025 – Present</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">Technical Hub, Aditya University</p>
              <ul className="space-y-2 text-secondary-foreground/80 text-sm">
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Developed SkillHance, a web platform guiding engineering students with coding resources and career pathways.</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Implemented interactive modules including quizzes, subject overviews, and study-abroad guidance.</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Built responsive UI using React, HTML, and CSS.</li>
                <li className="flex gap-2"><span className="text-primary mt-1">▹</span> Collaborated with peers using Git and version control.</li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">
              <span className="text-gradient">Education</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-primary font-mono text-sm mb-2">2023 – 2027</p>
                <h4 className="text-lg font-bold mb-1">Aditya University</h4>
                <p className="text-muted-foreground text-sm mb-2">B.Tech in Information Technology</p>
                <p className="text-sm font-semibold">CGPA: 9.50/10</p>
                <p className="text-muted-foreground text-xs mt-1">Kakinada, Andhra Pradesh</p>
              </motion.div>
              <motion.div
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <p className="text-primary font-mono text-sm mb-2">2021 – 2023</p>
                <h4 className="text-lg font-bold mb-1">Prathibha Junior College</h4>
                <p className="text-muted-foreground text-sm mb-2">Intermediate (MPC)</p>
                <p className="text-sm font-semibold">Score: 96.8%</p>
                <p className="text-muted-foreground text-xs mt-1">Rajahmundry, Andhra Pradesh</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
