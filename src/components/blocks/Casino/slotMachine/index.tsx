import Dollar1 from "@/components/blocks/Casino/icons/Dollar1";
import React, { useState } from "react";
import BetControls from "@/components/blocks/Casino/betControls";
import {
  DollarContainer,
  ReelsContainer,
  SlotMachineContainer,
} from "@/components/blocks/Casino/slotMachine/styled";
import Dollar2 from "@/components/blocks/Casino/icons/Dollar2";
import Dollar3 from "@/components/blocks/Casino/icons/Dollar3";
import Dollar4 from "@/components/blocks/Casino/icons/Dollar4";
import Reel, { slots } from "@/components/blocks/Casino/slotMachine/reel";
import useCasinoStore from "@/stores/casino/casinoStore";

const dollarsArray = [
  {
    icon: <Dollar1 />,
    x: -70,
    y: 500,
  },
  {
    icon: <Dollar2 />,
    x: 620,
    y: 460,
  },
  {
    icon: <Dollar3 />,
    x: -70,
    y: 250,
  },
  {
    icon: <Dollar4 />,
    x: 670,
    y: 280,
  },
];

const SlotMachine: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [results, setResults] = useState<number[]>([0, 1, 2]);
  const [isWin, setIsWin] = useState(false);
  const { minusBalance, balance, changeTotalWin, plusBalance, totalBet } =
    useCasinoStore();

  const handleSpin = () => {
    if (!spinning && balance > 0) {
      setSpinning(true);

      const newResults = [
        Math.floor(Math.random() * slots.length),
        Math.floor(Math.random() * slots.length),
        Math.floor(Math.random() * slots.length),
      ];
      setResults(newResults);
      setTimeout(() => {
        setSpinning(false);
        if (
          newResults[0] === newResults[1] &&
          newResults[1] === newResults[2]
        ) {
          setIsWin(true);
          plusBalance(totalBet * 5);
          changeTotalWin(totalBet * 5);
          setTimeout(() => setIsWin(false), 1500);
        } else {
          minusBalance(totalBet);
          changeTotalWin(0);
        }
      }, 3000);
    }
  };

  return (
    <SlotMachineContainer>
      <ReelsContainer>
        <Reel spinning={spinning} result={results[0]} />
        <Reel spinning={spinning} result={results[1]} />
        <Reel spinning={spinning} result={results[2]} />
      </ReelsContainer>
      <BetControls handleSpinButton={handleSpin} />
      {dollarsArray.map((e, i) => (
        <DollarContainer key={i} $y={e.y} $x={e.x} $animate={isWin}>
          {e.icon}
        </DollarContainer>
      ))}
    </SlotMachineContainer>
  );
};

export default SlotMachine;
