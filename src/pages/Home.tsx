import AboutSection from "../sections/AboutSection";
import AchievementsSection from "../sections/AchievementsSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <AboutSection />
      <AchievementsSection />
    </>
  );
}
