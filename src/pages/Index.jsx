import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import Experience from "@/components/ui/Experience";
import Achievements from "@/components/ui/Achievements";
import Contact from "@/components/ui/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border">
        <p>© 2025 M. Bhavana Siva Sri. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
