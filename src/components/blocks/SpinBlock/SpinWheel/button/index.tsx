import React from "react";
import SpinButtonIcon from "@/components/blocks/SpinBlock/SpinWheel/icons/SpinButtonIcon";
import { SpinButtonContainer } from "@/components/blocks/SpinBlock/SpinWheel/button/styled";

interface SpinButtonProps {
  onClick: () => void;
}

const SpinButton = ({ onClick }: SpinButtonProps) => {
  return (
    <SpinButtonContainer onClick={onClick}>
      <SpinButtonIcon />
    </SpinButtonContainer>
  );
};

export default SpinButton;
