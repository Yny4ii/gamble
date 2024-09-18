import React from "react";
import {
  MaxBetButtonBackground,
  MaxBetButtonContainer,
} from "@/components/blocks/Casino/buttons/maxBetButton/styled";
import MaxBetButtonIcon from "@/components/blocks/Casino/buttons/maxBetButton/icons/MaxBetButtonIcon";

interface MaxBetButtonProps {
  onClick: () => void;
}

const MaxBetButton = ({ onClick }: MaxBetButtonProps) => {
  return (
    <MaxBetButtonBackground onClick={onClick}>
      <MaxBetButtonContainer>
        <MaxBetButtonIcon />
      </MaxBetButtonContainer>
    </MaxBetButtonBackground>
  );
};

export default MaxBetButton;
