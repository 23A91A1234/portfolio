import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "Java"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "React Native"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "SQL", "MySQL", "MongoDB", "Express.js"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">My <span className="text-gradient">Skills</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <h3 className="text-lg font-semibold mb-5 text-gradient">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-mono font-medium hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
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

export default Skills;
