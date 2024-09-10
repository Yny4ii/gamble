import React from "react";
import {
  SpinButtonBackground,
  SpinButtonContainer,
} from "@/components/blocks/Casino/buttons/spinButton/styled";
import SpinButtonIcon from "@/components/blocks/Casino/buttons/spinButton/icons/SpinButtonIcon";
interface SpinButtonProps {
  onClick: () => void;
}
const SpinButton = ({ onClick }: SpinButtonProps) => {
  return (
    <SpinButtonBackground onClick={onClick}>
      <SpinButtonContainer>
        <SpinButtonIcon />
      </SpinButtonContainer>
    </SpinButtonBackground>
  );
};

export default SpinButton;
