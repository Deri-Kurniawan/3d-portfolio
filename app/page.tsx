import Footer from "../components/Footer";
import SectionHero from "./SectionHero";
import SectionLetsConnect from "./SectionLetsConnect";
import SectionMyLatestProject from "./SectionMyLatestProject";
import SectionQuote from "./SectionQuote";
import SectionTechnologyStack from "./SectionTechnologyStack";

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
  )
}
