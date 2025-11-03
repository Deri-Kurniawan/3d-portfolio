import Footer from "../components/Footer";
import SectionHero from "./_components/SectionHero";
import SectionLetsConnect from "./_components/SectionLetsConnect";
import SectionMyLatestProject from "./_components/SectionMyLatestProject";
import SectionQuote from "./_components/SectionQuote";
import SectionTechnologyStack from "./_components/SectionTechnologyStack";

export const metadata = {
  title: "Home - Portfolio",
  description: "Deri Kurniawan Portfolio",
};

export default function Home() {
  return (
    <div className="safe-layout">
      <SectionHero />
      <SectionTechnologyStack />
      <SectionMyLatestProject />
      <SectionLetsConnect />
      <SectionQuote />
      <Footer />
    </div>
  );
}
