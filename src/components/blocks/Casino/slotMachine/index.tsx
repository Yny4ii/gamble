import React, { useRef, useState } from "react";
import SolanaIcon from "@/components/blocks/Casino/icons/SolanaIcon";
import AvalancheIcon from "@/components/blocks/Casino/icons/AvalancheIcon";
import FantomIcon from "@/components/blocks/Casino/icons/FantomIcon";
import SlotCounter, { SlotCounterRef } from "react-slot-counter";
import {
  SlotMachineContainer,
  SlotsContainer,
} from "@/components/blocks/Casino/slotMachine/styled";
import { getRandomValueFromArray } from "@/lib/utils";
import BetControls from "@/components/blocks/Casino/betControls";

const icons = [
  <SolanaIcon key={"solana"} />,
  <AvalancheIcon key={"avalanche"} />,
  <FantomIcon key={"fantom"} />,
];

const SlotMachine = () => {
  const firstRef = useRef<SlotCounterRef>(null);
  const secondRef = useRef<SlotCounterRef>(null);
  const thirdRef = useRef<SlotCounterRef>(null);

  const [firstReel, setFirstReel] = useState(icons[0]);
  const [secondReel, setSecondReel] = useState(icons[1]);
  const [thirdReel, setThirdReel] = useState(icons[2]);

  const handleClickRoll = () => {
    setFirstReel(getRandomValueFromArray(icons));
    firstRef.current?.startAnimation({
      duration: 5,
      dummyCharacterCount: icons.length,
      direction: "top-down",
    });
    setSecondReel(getRandomValueFromArray(icons));
    secondRef.current?.startAnimation({
      duration: 6,
      dummyCharacterCount: icons.length,
      direction: "top-down",
    });
    setThirdReel(getRandomValueFromArray(icons));
    thirdRef.current?.startAnimation({
      duration: 7,
      dummyCharacterCount: icons.length,
      direction: "top-down",
    });
  };

  return (
    <SlotMachineContainer>
      <SlotsContainer>
        <SlotCounter
          key={"firstSlots"}
          ref={firstRef}
          value={[<>{firstReel}</>]}
          dummyCharacters={icons}
          dummyCharacterCount={icons.length}
          speed={10}
        />
        <SlotCounter
          key={"secondSlots"}
          ref={secondRef}
          value={[<>{secondReel}</>]}
          dummyCharacters={icons}
          dummyCharacterCount={icons.length}
          speed={10}
        />
        <SlotCounter
          key={"thirdSlots"}
          ref={thirdRef}
          value={[<>{thirdReel}</>]}
          dummyCharacters={icons}
          dummyCharacterCount={icons.length}
          speed={10}
        />
      </SlotsContainer>
      <BetControls handleSpinButton={handleClickRoll} />
    </SlotMachineContainer>
  );
};

export default SlotMachine;
