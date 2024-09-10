"use client";
import React from "react";
import RoadMapItem from "@/components/blocks/Roadmap/roadMapItem";
import {
  RoadMapContainer,
  RoadMapItemsContainer,
} from "@/components/blocks/Roadmap/styled";
import Article from "@/components/typography/article";
import Gamble1 from "@/components/blocks/Roadmap/roadMapItem/Gamble1";
import Gamble2 from "@/components/blocks/Roadmap/roadMapItem/Gamble2";
import Gamble4 from "@/components/blocks/Roadmap/roadMapItem/Gamble4";
import Gamble3 from "@/components/blocks/Roadmap/roadMapItem/Gamble3";

const roadmapItemsArray = [
  {
    icon: <Gamble1 />,
  },
  {
    icon: <Gamble2 />,
  },
  {
    icon: <Gamble4 />,
  },
  {
    icon: <Gamble3 />,
  },
];
const Roadmap = () => {
  return (
    <RoadMapContainer>
      <Article text={"ROADMAP"} />
      <RoadMapItemsContainer id={"roadmap"}>
        {roadmapItemsArray.map((e, index) => (
          <RoadMapItem key={index} icon={e.icon} />
        ))}
      </RoadMapItemsContainer>
    </RoadMapContainer>
  );
};

export default Roadmap;
