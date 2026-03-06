import { motion } from "framer-motion";
import { Award } from "lucide-react";

const achievements = [
  "Solved 400+ Data Structures and Algorithms problems on LeetCode.",
  "Completed Red Hat Operating Systems Certification by Red Hat.",
  "Completed Java DBMS Certification by Oracle.",
  "Completed Red Hat System Administrator Certification by Red Hat.",
  "Completed HTML & CSS Certification by IT Specialist.",
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Award className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">My <span className="text-gradient">Achievements</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-6 flex gap-4 items-start hover:border-primary/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Award size={20} className="text-primary-foreground" />
                </div>
                <p className="text-secondary-foreground/80 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;