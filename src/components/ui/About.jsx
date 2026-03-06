import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <User className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">About <span className="text-gradient">Me</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4 text-secondary-foreground/80 leading-relaxed">
              <p>
                I'm a motivated IT undergraduate at Aditya University with a strong passion for backend and full-stack development. I specialize in building practical applications using C++, Python, and JavaScript with the MERN stack, focusing on scalable and efficient solutions.
              </p>
              <p>
                I'm actively strengthening core computer science concepts through hands-on projects and problem-solving. Eager to gain real-world industry exposure, collaborate with experienced engineers, and contribute to high-impact software products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "University", value: "Aditya University" },
                { label: "Degree", value: "B.Tech IT" },
                { label: "CGPA", value: "9.50/10" },
                { label: "Location", value: "Rajahmundry, AP" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-xl p-4">
                  <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
