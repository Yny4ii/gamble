import Link from "next/link";
import styled from "styled-components";

export const SocialContainer = styled(Link)<{ $isBig?: boolean }>`
  border-radius: 100%;
  background: #77041c;
  border: ${(props) => (props.$isBig ? "4px" : "2px")} solid #cca1aa;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.$isBig ? "126px" : "42px")};
  width: ${(props) => (props.$isBig ? "126px" : "42px")};
  box-shadow:
    inset 0 0 ${(props) => (props.$isBig ? "7px" : "2px")}
      ${(props) => (props.$isBig ? "11px" : "3px")} rgba(255, 255, 255, 0.25),
    0 3px 10px 0 rgba(0, 0, 0, 0.25);
`;
