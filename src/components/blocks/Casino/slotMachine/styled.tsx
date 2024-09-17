import styled, { css, keyframes } from "styled-components";

export const SlotMachineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //perspective: 1000px; /* Перспектива для создания 3D-эффекта */
  background-image: url("/Slot.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 659px;
  height: 480px;
  position: relative;
  overflow: visible;
`;

// Контейнер для барабанов
export const ReelsContainer = styled.div`
  display: flex;
  margin-bottom: 205px;
  gap: 6px;
`;

const dollars = keyframes`

    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    10%,
    20% {
        -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    }

    30%,
    50%,
    70%,
    90% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%,
    60%,
    80% {
        -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
`;
export const DollarContainer = styled.div<{
  $x: number;
  $y: number;
  $animate: boolean;
}>`
  width: 50px;
  height: 50px;
  z-index: 1;
  position: absolute;
  left: ${(props) => props.$x}px;
  bottom: ${(props) => props.$y}px;
  ${(props) =>
    props.$animate &&
    css`
      animation-name: ${dollars};
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    `}
`;
