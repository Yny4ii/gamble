import styled from "styled-components";

export const MaxBetButtonBackground = styled.div`
  width: 120px;
  height: 113px;
  position: relative;
  background: linear-gradient(
    180deg,
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
  border-radius: 97px 93px 98px 97px;

  &:before {
    content: "";
    width: 104px;
    height: 118px;
    display: block;
    background: #220048;
    border-radius: 100%;
    position: absolute;
    top: -1px;
    left: 8px;
    transform: rotate(98deg);
  }
`;

export const MaxBetButtonContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: -20px;
  left: -8px;
  transition: transform 0.1s ease;

  &:active {
    transform: translateY(2px);
  }
`;
