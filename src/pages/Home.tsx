import AboutSection from "../sections/AboutSection";
import AchievementsSection from "../sections/AchievementsSection";
import HeroSection from "../sections/HeroSection";
import ProfileSection from "../sections/ProfileSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProfileSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
    </>
  );
}
