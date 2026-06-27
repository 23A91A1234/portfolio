import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certifications = [
  { name: "MongoDB Developer Certification", issuer: "MongoDB", link: "https://drive.google.com/file/d/1WciAuQgYLTXRFMnB5OSNdIjnWyYQCTsF/view" },
  { name: "GitHub Foundations", issuer: "Microsoft", link: "https://drive.google.com/file/d/1zDMdTlEi9VpkIoImr24CeBRPqG-il-c8/view" },
  { name: "Oracle Certified Foundations Associate: Java", issuer: "Oracle", link: "https://drive.google.com/file/d/1P5tNONUqDYsTAQ-lPeZOuZFUi8lAL0Zu/view" },
  { name: "Oracle Database Foundations Certification", issuer: "Oracle", link: "https://drive.google.com/file/d/1B7SJqwZk8Bt-mUgxjbnKJjZbvMyYKkRN/view" },
  { name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat", link: "https://drive.google.com/file/d/1zH37na06i4CDp6iMqmGY2Akq1mIJMbR9/view" },
  { name: "HTML & CSS IT Specialist Certification", issuer: "Certiport / Pearson", link: "https://drive.google.com/file/d/10D1FvyLQvDoo0RWljdwD3X50PBwJLgGI/view" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <BadgeCheck className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">My <span className="text-gradient">Certifications</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                className="glass rounded-2xl p-5 flex gap-4 items-start hover:border-primary/40 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <BadgeCheck size={20} className="text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm leading-snug mb-1">{cert.name}</p>
                  <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider mb-2">{cert.issuer}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink size={12} />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
