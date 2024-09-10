import styled from "styled-components";

export const RoadMapItemsContainer = styled.div`
  display: flex;
  gap: 40px;
  overflow-x: auto;
  white-space: nowrap; /* Запрет на перенос строк */
  margin-top: 270px;

  &::-webkit-scrollbar {
    display: none; /* Для Chrome, Safari */
  }

  scrollbar-width: none; /* Для Firefox */
`;

export const RoadMapContainer = styled.div`
  background-image: url("/bg_roadmap.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: auto;
`;
