import styled from "styled-components";

export const SpinButtonContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: -9px;
  left: 5px;
  transition: transform 0.1s ease;

  &:active {
    transform: translateY(2px);
  }
`;

export const SpinButtonBackground = styled.div`
  height: 120px;
  width: 210px;
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
  border-radius: 74px 95px 80px 81px;
  position: relative;

  &:before {
    display: block;
    content: "";
    background: #002a00;
    width: 198px;
    height: 113px;
    border-radius: 87px 70px 80px 99px;
    position: absolute;
    top: 5px;
    left: 3px;
  }
`;
