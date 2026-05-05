import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave";
import WhySection from "@/components/WhySection";
import StepsSection from "@/components/StepsSection";
import TechSection from "@/components/TechSection";
import AudienceSection from "@/components/AudienceSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Wave fromColor="#F7F2EC" toColor="#ffffff" />
      <WhySection />
      <Wave fromColor="#ffffff" toColor="#F7F2EC" />
      <StepsSection />
      <Wave fromColor="#F7F2EC" toColor="#1C1810" />
      <TechSection />
      <Wave fromColor="#1C1810" toColor="#ffffff" />
      <AudienceSection />
      <Wave fromColor="#ffffff" toColor="#1C1810" />
      <CtaSection />
      <Footer />
    </>
  );
}
