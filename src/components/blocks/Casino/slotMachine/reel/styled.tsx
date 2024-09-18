import styled, { css, keyframes } from "styled-components";
import { slots } from "@/components/blocks/Casino/slotMachine/reel/index";

const createSpinAnimation = (result: number) => keyframes`
    0% {
        transform: rotateX(0deg);
    }
    100% {
        transform: rotateX(${360 * 3 - result * (360 / slots.length)}deg);
    }
`;

export const ReelContainer = styled.div`
  width: 120px;
  height: 180px;
  margin: 0 10px;
  perspective: 1000px; /* Перспектива для барабана */
  position: relative;
  overflow: hidden;
`;

export const ReelCylinder = styled.div<{ spinning: boolean; result: number }>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: ${({ spinning, result }) =>
    spinning
      ? "rotateX(0deg)"
      : `rotateX(-${result * (360 / slots.length)}deg)`}; /* Положение при остановке */
  transition: transform 1s ease-out;

  ${({ spinning, result }) =>
    spinning &&
    css`
      animation: ${createSpinAnimation(result)} 3s
        cubic-bezier(0.33, 1, 0.68, 1) forwards;
    `}
`;

export const ReelItem = styled.div<{ $index: number }>`
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  transform: rotateX(${({ $index }) => $index * (360 / slots.length)}deg)
    translateZ(106px); /* Создание цилиндра */
`;
