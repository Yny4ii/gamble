import "./globals.css";
import SpinBlock from "../components/blocks/SpinBlock";
import About from "@/components/blocks/About";
import Roadmap from "@/components/blocks/Roadmap";
import WelcomeBlock from "@/components/blocks/WelcomeBlock/WelcomeBlock";
import Tokenomics from "@/components/blocks/Tokenomics";
import Casino from "@/components/blocks/Casino";
import BackgroundGambleFirst from "@/components/blocks/BackgroundGamble/first";
import Tweets from "@/components/blocks/Tweets";
import BackgroundGambleSecond from "@/components/blocks/BackgroundGamble/second";
import Footer from "@/components/blocks/Footer";
import Header from "@/components/blocks/Header/Header";

export default function Home() {
  return (
    <main>
      <WelcomeBlock>
        <Header />
      </WelcomeBlock>
      <SpinBlock />
      <Casino />
      <About />
      <Roadmap />
      <BackgroundGambleFirst />
      <Tweets />
      <BackgroundGambleSecond />
      <Tokenomics />
      <Footer />
    </main>
  );
}
