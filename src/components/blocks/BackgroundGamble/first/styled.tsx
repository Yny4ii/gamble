import styled from "styled-components";

export const FirstBackgroundGambleContainer = styled.div`
  background-image: url("/1.BgGamble.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  max-width: 1438px;
  margin: 0 auto 82px;
  width: 100%;
  height: 800px;

  position: relative;
`;

export const SmoothTransitionBlock = styled.div`
  position: absolute;
  top: -34px;
  left: 0;
  min-width: 1440px;
  height: 80px;
  background-image: radial-gradient(
    50.16% 38.46% at 49.19% 38.59%,
    rgb(45 10 8) 26.34%,
    rgb(89 32 171 / 0%) 100%
  );
  pointer-events: none;
`;
