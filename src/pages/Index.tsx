import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import MagicBackground from "@/components/MagicBackground";
import FloatingSparkles from "@/components/FloatingSparkles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <MagicBackground />
      <FloatingSparkles />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />

      <footer className="relative z-10 text-center py-8 text-muted-foreground/40 text-sm border-t border-gold/10">
        <span className="font-fantasy">© 2026 Atharva</span>
        <span className="mx-2">·</span>
        <span className="text-gold/30">Built with passion ✦</span>
      </footer>
    </div>
  );
};

export default Index;
