import styled from "styled-components";

export const TweetsBlockContainer = styled.div`
  padding: 0 120px;
  margin-bottom: 130px;
`;

export const TweetsContainer = styled.div`
  margin-top: 65px;
  margin-bottom: 210px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const TweetsRowContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  width: 100%;
  gap: 24px;
`;
