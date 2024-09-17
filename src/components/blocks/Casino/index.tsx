"use client";
import React from "react";
import SlotMachine from "@/components/blocks/Casino/slotMachine";
import {
  CasinoBackground,
  CasinoContainer,
  CoinsContainer,
} from "@/components/blocks/Casino/styled";
import Gamble4 from "@/icons/Gamble4";

const Casino: React.FC = () => {
  return (
    <CasinoContainer>
      <CasinoBackground />
      <Gamble4 />
      <SlotMachine />
      <CoinsContainer />
    </CasinoContainer>
  );
};
export default Casino;
