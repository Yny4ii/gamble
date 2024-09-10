"use client";
import React from "react";
import SlotMachine from "@/components/blocks/Casino/slotMachine";
import {
  CasinoBackground,
  CasinoContainer,
  CoinsContainer,
} from "@/components/blocks/Casino/styled";
import Dollar1 from "@/components/blocks/Casino/icons/Dollar1";
import Dollar2 from "@/components/blocks/Casino/icons/Dollar2";
import Dollar3 from "@/components/blocks/Casino/icons/Dollar3";
import Dollar4 from "@/components/blocks/Casino/icons/Dollar4";
import Coins from "@/components/blocks/Casino/icons/Coins";
import BetControls from "@/components/blocks/Casino/betControls";
import Gamble4 from "@/icons/Gamble4";

const Casino: React.FC = () => {
  return (
    <CasinoContainer>
      <CasinoBackground />
      <Dollar1 />
      <Dollar2 />
      <Dollar3 />
      <Dollar4 />
      <Gamble4 />
      <SlotMachine />
      <CoinsContainer></CoinsContainer>
    </CasinoContainer>
  );
};
export default Casino;
