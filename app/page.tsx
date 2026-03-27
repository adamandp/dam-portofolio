import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import SkillSection from "@/components/skill-section";
import ProjectSection from "@/components/project-section";
import ContactSection from "@/components/contact-section";
import MarqueeSection from "@/components/marquee-section";

export default function App() {
  return (
    <div
      className={`min-h-screen bg-[#FDFBF7] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-lime-400 selection:text-black transition-colors duration-300`}
    >
      <Navbar />

      <div>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
}
