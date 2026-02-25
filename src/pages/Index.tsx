
import { PortfolioLayout } from "@/components/portfolio/PortfolioLayout";
import { AboutSection } from "@/components/portfolio/sections/AboutSection";
import { CertificationsSection } from "@/components/portfolio/sections/CertificationsSection";
import { ContactSection } from "@/components/portfolio/sections/ContactSection";
import { ExperienceSection } from "@/components/portfolio/sections/ExperienceSection";
import { HeroSection } from "@/components/portfolio/sections/HeroSection";
import { ProjectsSection } from "@/components/portfolio/sections/ProjectsSection";
import { SkillsSection } from "@/components/portfolio/sections/SkillsSection";
import { EducationSection } from "@/components/portfolio/sections/EducationSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "projects") {
      setTimeout(() => {
        const element = document.getElementById("projects");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location]);

  return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection /> {/* MUST HAVE id="projects" */}
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </PortfolioLayout>
  );
};

export default Index;