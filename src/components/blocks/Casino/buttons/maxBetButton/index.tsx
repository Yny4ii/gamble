import React from "react";
import {
  MaxBetButtonBackground,
  MaxBetButtonContainer,
} from "@/components/blocks/Casino/buttons/maxBetButton/styled";
import MaxBetButtonIcon from "@/components/blocks/Casino/buttons/maxBetButton/icons/MaxBetButtonIcon";

const MaxBetButton = () => {
  return (
    <MaxBetButtonBackground>
      <MaxBetButtonContainer>
        <MaxBetButtonIcon />
      </MaxBetButtonContainer>
    </MaxBetButtonBackground>
  );
};

export default MaxBetButton;
