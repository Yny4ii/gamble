import styled from "styled-components";

export const SpinWheelInnerContainer = styled.div<{ $rotation: number }>`
  width: 695px;
  height: 695px;
  transition: transform 5s ease-in-out;
  transform: rotate(${(props) => props.$rotation}deg);
  background-image: url("/SpinWheel.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const SpinWheelOuterContainer = styled.div`
  width: 695px;
  height: 695px;
  position: relative;
`;
export const SpinWheelPositionContainer = styled.div`
  position: absolute;
  top: -95%;
  left: 50%;
  transform: translate(-50%, 50%);
`;
