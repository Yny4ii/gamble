"use client";
import React from "react";
import {
  MarketsContainer,
  SpinBlockContainer,
  SpinContainer,
} from "@/components/blocks/SpinBlock/styled";
import Article from "@/components/typography/article";
import { MarketLink } from "@/components/ui/buttons/MarketButton/styled";
import RaydiumIcon from "@/icons/RaydiumIcon";
import OkxIcon from "@/icons/OkxIcon";
import ByBitIcon from "@/icons/ByBitIcon";
import Gamble2 from "@/icons/Gamble2";
import Gamble3 from "@/icons/Gamble3";

const marketsLinks = [
  {
    icon: <OkxIcon />,
    link: "#",
  },
  {
    icon: <ByBitIcon />,
    link: "#",
  },
  {
    icon: <RaydiumIcon />,
    link: "#",
  },
];
const SpinBlock = () => {
  return (
    <SpinBlockContainer>
      <Gamble2 />
      <SpinContainer />
      <Article small={true} text={"Available on"} />
      <MarketsContainer>
        {marketsLinks.map((e, index) => (
          <MarketLink key={index} href={e.link}>
            {e.icon}
          </MarketLink>
        ))}
      </MarketsContainer>
      <Gamble3 />
    </SpinBlockContainer>
  );
};

export default SpinBlock;
