"use client";
import styled from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  justify-content: center;
`;

export const ArticleText = styled.h2<{ $small: boolean | undefined }>`
  text-align: center;
  font-weight: 600;
  font-size: 80px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  background: linear-gradient(
    180deg,
    #ffe087 0%,
    #fff5d8 32.94%,
    #ffc314 60.33%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${(props) =>
    props.$small &&
    `
      font-size: 40px;
      letter-spacing: 0.03em;
      color: #ffc701;
      background: none;
      background-clip: unset;
      -webkit-background-clip: unset;
      -webkit-text-fill-color: unset;
    `}
`;

export const LineBreaker = styled.div`
  background: linear-gradient(270deg, #434b71 0%, rgba(39, 47, 72, 0) 98.2%);
  width: 100%;
  max-width: 367px;
  height: 2px;

  &:last-child {
    transform: rotate(180deg);
  }
`;
