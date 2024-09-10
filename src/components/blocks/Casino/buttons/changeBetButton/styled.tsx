import styled from "styled-components";

export const ChangeBetButtonBackground = styled.div<{ $bgColor: string }>`
  width: 94px;
  height: 83px;
  position: relative;
  background: linear-gradient(
    90deg,
    #765e02 14%,
    #7b6204 18%,
    #89700a 22%,
    #a28714 27%,
    #c3a823 32%,
    #f3d537 37%,
    #f4efda 56%,
    #cca800 75%,
    #c4a100 76%,
    #947500 84%,
    #715600 91%,
    #5b4300 96%,
    #543c00 100%
  );
  border-radius: 154px 145px 164px 150px;

  &:before {
    content: "";
    width: 86px;
    height: 75px;
    background: ${(props) => props.$bgColor};
    position: absolute;
    border-radius: 100%;
    transform: rotate(-18deg);
    top: 5px;
    left: 4px;
  }
`;
export const ChangeBetButtonContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: -14px;
  left: -6px;
  transition: transform 0.1s ease;

  &:active {
    transform: translateY(2px);
  }
`;
