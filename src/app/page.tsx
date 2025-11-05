import Footer from "../components/footer";
import HeroSection from "./_components/hero-section";
import LetsConnectSection from "./_components/lets-connect-section";
import MyLatestProjectSection from "./_components/my-latest-project-section";
import QuoteSection from "./_components/quote-section";
import TechStackSection from "./_components/tech-stack-section";

export const metadata = {
  title: "Home - Portfolio",
  description: "Deri Kurniawan Portfolio",
};

export default function Home() {
  return (
    <div className="dk-safe-layout">
      <HeroSection />
      <TechStackSection />
      <MyLatestProjectSection />
      <LetsConnectSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}
