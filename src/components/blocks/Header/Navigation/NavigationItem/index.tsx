import React from "react";
import { NavigationItemContainer } from "@/components/blocks/Header/Navigation/NavigationItem/styled";

interface NavigationItemProps {
  icon: React.ReactNode;
  title: string;
  link: string;
}

const NavigationItem = ({ icon, title, link }: NavigationItemProps) => {
  return (
    <NavigationItemContainer href={link} scroll={true}>
      {icon}
      {title}
    </NavigationItemContainer>
  );
};

export default NavigationItem;
