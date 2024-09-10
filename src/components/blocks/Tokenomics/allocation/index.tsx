import React from "react";
import { AllocationContainer } from "@/components/blocks/Tokenomics/allocation/styled";
import AllocationItem from "@/components/blocks/Tokenomics/allocation/allocationItem";
import { LineBreaker } from "@/components/typography/article/styled";

const alloctionItemsArray = [
  {
    bg: "#B420C5",
    title: "IDO",
    quantity: "3.500.000.000",
    percent: 35,
  },
  {
    bg: "#F38824",
    title: "TREASURY",
    quantity: "2.500.000.000",
    percent: 25,
  },
  {
    bg: "#7FB020",
    title: "TEAM",
    quantity: "1.500.000.000",
    percent: 15,
  },
  {
    bg: "#6B00FB",
    title: "STAKING",
    quantity: "1.500.000.000",
    percent: 15,
  },
  {
    bg: "#2EB1FA",
    title: "AIRDROP",
    quantity: "1.500.000.000",
    percent: 10,
  },
];
const Allocation = () => {
  return (
    <AllocationContainer>
      <p>$GAMBLE TOKEN ALLOCATION:</p>
      <LineBreaker style={{ rotate: "180deg" }} />
      {alloctionItemsArray.map((e) => (
        <AllocationItem
          key={e.title}
          title={e.title}
          bg={e.bg}
          percent={e.percent}
          quantity={e.quantity}
        />
      ))}
    </AllocationContainer>
  );
};

export default Allocation;
