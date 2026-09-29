import HeroSection from "@/components/glass-hero";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import GitHubSection from "@/components/sections/GitHubSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificatesSection />
      <AchievementsSection />
      <GitHubSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
