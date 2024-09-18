import React from "react";
import {
  TotalWinContainer,
  TotalWinQuantityContainer,
} from "@/components/blocks/Casino/totalWin/styled";
import useCasinoStore from "@/stores/casino/casinoStore";

const TotalWin = () => {
  const { totalWin } = useCasinoStore();
  return (
    <TotalWinContainer>
      <TotalWinQuantityContainer>{totalWin}</TotalWinQuantityContainer>
    </TotalWinContainer>
  );
};

export default TotalWin;
