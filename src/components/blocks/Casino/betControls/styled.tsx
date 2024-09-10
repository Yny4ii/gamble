import styled from "styled-components";

export const BetControlsContainer = styled.div`
  display: flex;
  align-items: center;
  left: 50%;
  transform: translate(-50%);
  gap: 14px;
  position: absolute;
  bottom: -136px;
  z-index: 3;
`;

export const BetButtonsContainer = styled.div`
  background-image: url("/TotalBet.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 321px;
  height: 83px;
`;
