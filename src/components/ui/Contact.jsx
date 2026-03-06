import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "Email", value: "bhavanasivasrimalireddy@gmail.com", href: "mailto:bhavanasivasrimalireddy@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8309871922", href: "tel:+918309871922" },
  { icon: Linkedin, label: "LinkedIn", value: "Bhavana Siva Sri", href: "https://www.linkedin.com/in/bhavana-siva-sri-2a9168291/" },
  { icon: Github, label: "GitHub", value: "23A91A1234", href: "https://github.com/23A91A1234" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/10 blur-[120px]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-primary" size={28} />
            <h2 className="text-3xl font-bold">Get In <span className="text-gradient">Touch</span></h2>
          </div>
          <p className="text-muted-foreground mb-12 max-w-md">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {contactLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary transition-colors">
                  <item.icon size={18} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-muted-foreground text-xs font-mono uppercase tracking-wider">{item.label}</p>
                  <p className="text-sm font-medium truncate">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-2 text-muted-foreground text-sm">
            <MapPin size={14} /> Rajahmundry, Andhra Pradesh, India
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;