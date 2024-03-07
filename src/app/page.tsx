import Footer from "@/components/footer";
import SectionHero from "./_components/section-hero";
import SectionLetsConnect from "./_components/section-lets-connect";
import SectionMyLatestProject from "./_components/section-my-latest-project";
import SectionQuote from "./_components/section-quote";
import SectionTechnologyStack from "./_components/section-technology-stack";

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
