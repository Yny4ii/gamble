import React from "react";
import {
  BetButtonsContainer,
  BetControlsContainer,
} from "@/components/blocks/Casino/betControls/styled";
import SpinButton from "@/components/blocks/Casino/buttons/spinButton";
import MaxBetButton from "@/components/blocks/Casino/buttons/maxBetButton";
import TotalWin from "@/components/blocks/Casino/totalWin";
import ChangeBetButton from "@/components/blocks/Casino/buttons/changeBetButton";
import PlusBetButtonIcon from "@/components/blocks/Casino/buttons/changeBetButton/icons/PlusBetButtonIcon";
import MinusBetButtonIcon from "@/components/blocks/Casino/buttons/changeBetButton/icons/MinusBetButtonIcon";
import AllInBetButtonIcon from "@/components/blocks/Casino/buttons/changeBetButton/icons/AllInBetButtonIcon";

interface BetControlsProps {
  handleSpinButton: () => void;
}

const BetControls = ({ handleSpinButton }: BetControlsProps) => {
  return (
    <BetControlsContainer>
      <ChangeBetButton
        bgColor={"#420000"}
        buttonIcon={<AllInBetButtonIcon />}
      />
      <BetButtonsContainer>
        <ChangeBetButton
          bgColor={"#001430"}
          buttonIcon={<PlusBetButtonIcon />}
        />
        <ChangeBetButton
          bgColor={"#001430"}
          buttonIcon={<MinusBetButtonIcon />}
        />
      </BetButtonsContainer>

      <TotalWin />
      <MaxBetButton />
      <SpinButton onClick={handleSpinButton} />
    </BetControlsContainer>
  );
};

export default BetControls;
