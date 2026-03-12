import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import PortfolioSection from "@/components/portfolio/PortfolioSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
