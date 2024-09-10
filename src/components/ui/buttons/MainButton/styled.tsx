"use client";
import styled from "styled-components";

export const MainButtonContainer = styled.button<{ $isBig?: boolean }>`
  border: 1px solid #ffc701;
  border-radius: 2px;
  padding-right: 12px;
  padding-left: 12px;
  height: 34px;
  color: #ffc701;
  background: none;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  ${(props) =>
    props.$isBig &&
    `
      background: #131620;
      padding: 0;
      height: 56px;
      width: 220px;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0;`}
`;
