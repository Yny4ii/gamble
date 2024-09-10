import React from "react";
import ShineIcon from "@/components/blocks/Header/Navigation/icons/ShineIcon";
import ChipsIcon from "@/components/blocks/Header/Navigation/icons/ChipsIcon";
import BreakdownIcon from "@/components/blocks/Header/Navigation/icons/BreakdownIcon";
import PieChartIcon from "@/components/blocks/Header/Navigation/icons/PieChartIcon";
import { NavigationContainer } from "@/components/blocks/Header/Navigation/styled";
import NavigationItem from "@/components/blocks/Header/Navigation/NavigationItem";

const navigationLinks = [
  {
    icon: <ShineIcon />,
    title: "HOME",
    link: "#",
  },
  {
    icon: <ChipsIcon />,
    title: "ABOUT",
    link: "#about",
  },
  {
    icon: <BreakdownIcon />,
    title: "ROADMAP",
    link: "#roadmap",
  },
  {
    icon: <PieChartIcon />,
    title: "TOKENOMICS",
    link: "#tokenomics",
  },
];
const Navigation = () => {
  return (
    <NavigationContainer>
      {navigationLinks.map((e) => (
        <NavigationItem
          link={e.link}
          key={e.title}
          icon={e.icon}
          title={e.title}
        />
      ))}
    </NavigationContainer>
  );
};

export default Navigation;
