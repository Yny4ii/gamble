import styled from "styled-components";

export const TweetContainer = styled.div<{
  $firstColor: string;
  $secondColor: string;
}>`
  padding: 25px;
  border-radius: 8px;
  background: coral;
  box-shadow: inset 1px 1px 4px 0 rgba(255, 255, 255, 0.3);
  background: linear-gradient(
    180deg,
    ${(props) => props.$firstColor} 0%,
    ${(props) => props.$secondColor} 57.12%
  );
`;
