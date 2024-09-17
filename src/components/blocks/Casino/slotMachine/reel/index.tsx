import React from "react";
import AvalancheIcon from "@/components/blocks/Casino/icons/AvalancheIcon";
import BitcoinIcon from "@/components/blocks/Casino/icons/BitcoinIcon";
import FantomIcon from "@/components/blocks/Casino/icons/FantomIcon";
import {
  ReelContainer,
  ReelCylinder,
  ReelItem,
} from "@/components/blocks/Casino/slotMachine/reel/styled";

export const slots = [
  <AvalancheIcon key={"avalanche"} />,
  <BitcoinIcon key={"bitcoin"} />,
  <FantomIcon key={"fantom"} />,
];

interface ReelProps {
  spinning: boolean;
  result: number;
}

const Reel: React.FC<ReelProps> = ({ spinning, result }) => {
  return (
    <ReelContainer>
      <ReelCylinder spinning={spinning} result={result}>
        {slots.map((slot, index) => (
          <ReelItem key={index} $index={index}>
            {slot}
          </ReelItem>
        ))}
      </ReelCylinder>
    </ReelContainer>
  );
};

export default Reel;
