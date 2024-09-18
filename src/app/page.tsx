"use client";
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
import React from "react";
import useCasinoStore from "@/stores/casino/casinoStore";

export default function Home() {
  const { balance } = useCasinoStore();
  return (
    <main>
      <WelcomeBlock>
        <Header />
      </WelcomeBlock>
      <SpinBlock />
      <h1 style={{ textAlign: "center" }}>Balance: {balance}</h1>
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
