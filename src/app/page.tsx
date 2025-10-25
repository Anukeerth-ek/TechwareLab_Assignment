import styles from "./page.module.scss";
import HeroSection from "./components/HeroSection";
import TextSection from "./components/TextSection";
import GridSection from "./components/GridSection";
import MarqueeSection from "./components/MarqueeSection";
import Footer from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TextSection />
      <GridSection />
      <MarqueeSection />
      <Footer/>
    </>
    
  );
}
