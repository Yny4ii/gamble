import React from "react";
import { SocialsContainer } from "./styled";
import TelegramIcon from "../../../../icons/TelegramIcon";
import TwitterIcon from "../../../../icons/TwitterIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import Social from "@/components/ui/social";

const socialsLinks = [
  {
    icon: <TelegramIcon />,
    link: "#",
  },
  {
    icon: <TwitterIcon />,
    link: "#",
  },

  {
    icon: <InstagramIcon />,
    link: "#",
  },
];

const Socials = () => {
  return (
    <SocialsContainer>
      {socialsLinks.map((e, index) => (
        <Social key={index} icon={e.icon} link={e.link} />
      ))}
    </SocialsContainer>
  );
};

export default Socials;
