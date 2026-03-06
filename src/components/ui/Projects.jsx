import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SkillHance",
    description: "A web platform that helps engineering students learn programming foundations, explore career paths, and access curated study resources.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/LUCKYHARSHA001/SkillHance",
  },
  {
    title: "YouNique Care",
    description: "A digital platform focused on personalized skincare and wellness recommendations based on user BMI and skin tone.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/23A91A1234/YouNique-Care",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <FolderGit2 className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">My <span className="text-gradient">Projects</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="glass rounded-2xl p-6 group hover:border-primary/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-gradient transition-all">{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-primary/10 transition-colors">
                    <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary" />
                  </a>
                </div>
                <p className="text-secondary-foreground/70 text-sm mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-mono">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;