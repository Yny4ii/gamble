import React from "react";
import {
  ChangeBetButtonBackground,
  ChangeBetButtonContainer,
} from "@/components/blocks/Casino/buttons/changeBetButton/styled";
import MinusBetButtonIcon from "@/components/blocks/Casino/buttons/changeBetButton/icons/MinusBetButtonIcon";

interface ChangeBetButtonProps {
  buttonIcon: React.ReactNode;
  bgColor: string;
}

const ChangeBetButton = ({ buttonIcon, bgColor }: ChangeBetButtonProps) => {
  return (
    <ChangeBetButtonBackground $bgColor={bgColor}>
      <ChangeBetButtonContainer>{buttonIcon}</ChangeBetButtonContainer>
    </ChangeBetButtonBackground>
  );
};

export default ChangeBetButton;
