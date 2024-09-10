import React from "react";
import {
  RoadmapItemContainer,
  RoadmapItemTitle,
  RoadmapItemWrapper,
} from "@/components/blocks/Roadmap/roadMapItem/styled";

interface RoadMapItemProps {
  icon: React.ReactNode;
}

const RoadMapItem = ({ icon }: RoadMapItemProps) => {
  return (
    <RoadmapItemWrapper>
      {icon}
      <RoadmapItemContainer>
        <RoadmapItemTitle>2024 q3</RoadmapItemTitle>
        <ul>
          <li>Welcome to the world</li>
          <li>of GAMBLE Inspired</li>
          <li>by the legendary</li>
          <li>orangutan Ah GAMBLE, who</li>
        </ul>
      </RoadmapItemContainer>
    </RoadmapItemWrapper>
  );
};

export default RoadMapItem;
