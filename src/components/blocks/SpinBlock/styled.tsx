import styled from "styled-components";

export const SpinBlockContainer = styled.div`
  background-image: url("/Rectangle.png");
  height: 730px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 106px;
  position: relative;
`;

export const MarketsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`;
export const SpinContainer = styled.div`
  background-image: url("/Spin.png");
  width: 690px;
  height: 730px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translate(-50%, 50%);
`;
