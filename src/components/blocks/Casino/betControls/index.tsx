import React from "react";
import {
  BetButtonsContainer,
  BetControlsContainer,
  TotalBetQuantityContainer,
} from "@/components/blocks/Casino/betControls/styled";
import SpinButton from "@/components/blocks/Casino/buttons/spinButton";
import MaxBetButton from "@/components/blocks/Casino/buttons/maxBetButton";
import TotalWin from "@/components/blocks/Casino/totalWin";
import ChangeBetButton from "@/components/blocks/Casino/buttons/changeBetButton";
import PlusBetButtonIcon from "@/components/blocks/Casino/buttons/changeBetButton/icons/PlusBetButtonIcon";
import MinusBetButtonIcon from "@/components/blocks/Casino/buttons/changeBetButton/icons/MinusBetButtonIcon";
import AllInBetButtonIcon from "@/components/blocks/Casino/buttons/changeBetButton/icons/AllInBetButtonIcon";
import useCasinoStore from "@/stores/casino/casinoStore";
import { getFormattedNumber } from "@/lib/utils";

interface BetControlsProps {
  handleSpinButton: () => void;
}

const BetControls = ({ handleSpinButton }: BetControlsProps) => {
  const { increaseBet, decreaseBet, maxBet, totalBet } = useCasinoStore();
  return (
    <BetControlsContainer>
      <ChangeBetButton
        onClick={() => {}}
        bgColor={"#420000"}
        buttonIcon={<AllInBetButtonIcon />}
      />
      <BetButtonsContainer>
        <ChangeBetButton
          onClick={decreaseBet}
          bgColor={"#001430"}
          buttonIcon={<MinusBetButtonIcon />}
        />
        <TotalBetQuantityContainer>
          {getFormattedNumber(totalBet)}
        </TotalBetQuantityContainer>
        <ChangeBetButton
          onClick={increaseBet}
          bgColor={"#001430"}
          buttonIcon={<PlusBetButtonIcon />}
        />
      </BetButtonsContainer>
      <TotalWin />
      <MaxBetButton onClick={maxBet} />
      <SpinButton onClick={handleSpinButton} />
    </BetControlsContainer>
  );
};

export default BetControls;
