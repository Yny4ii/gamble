import React from "react";
import {
  ChangeBetButtonBackground,
  ChangeBetButtonContainer,
} from "@/components/blocks/Casino/buttons/changeBetButton/styled";

interface ChangeBetButtonProps {
  buttonIcon: React.ReactNode;
  bgColor: string;
  onClick: () => void;
}

const ChangeBetButton = ({
  buttonIcon,
  bgColor,
  onClick,
}: ChangeBetButtonProps) => {
  return (
    <ChangeBetButtonBackground onClick={onClick} $bgColor={bgColor}>
      <ChangeBetButtonContainer>{buttonIcon}</ChangeBetButtonContainer>
    </ChangeBetButtonBackground>
  );
};

export default ChangeBetButton;
