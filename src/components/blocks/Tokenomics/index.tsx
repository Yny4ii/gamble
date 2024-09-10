"use client";
import React from "react";
import {
  ChartContainer,
  TokenomicsContainer,
} from "@/components/blocks/Tokenomics/styled";
import Article from "@/components/typography/article";
import Allocation from "@/components/blocks/Tokenomics/allocation";
import ChartIcon from "@/components/blocks/Tokenomics/icons/ChartIcon";

const Tokenomics = () => {
  return (
    <TokenomicsContainer id={"tokenomics"}>
      <Article text={"TOKENOMICS"} />
      <ChartContainer>
        <ChartIcon />
        <Allocation />
      </ChartContainer>
    </TokenomicsContainer>
  );
};

export default Tokenomics;
