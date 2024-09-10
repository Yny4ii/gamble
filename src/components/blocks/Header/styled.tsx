import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 30px;
  position: relative;
  z-index: 1;
  color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;

    opacity: 0.4;
    pointer-events: none;
    z-index: -1;
  }
`;
