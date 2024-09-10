"use client";
import React from "react";
import {
  Copyright,
  FollowTitle,
  FooterBackground,
  FooterContainer,
  GambleResponsibility,
  SocialsContainer,
  SocialWrapper,
} from "@/components/blocks/Footer/styled";
import InstagramIcon from "@/icons/InstagramIcon";
import TelegramIcon from "@/icons/TelegramIcon";
import TwitterIcon from "@/icons/TwitterIcon";
import YoutubeIcon from "@/icons/YoutubeIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import { SocialContainer } from "@/components/ui/social/styled";

const socialsLinks = [
  {
    icon: <TelegramIcon height={84} width={84} />,
    link: "#",
    title: "Telegram",
  },
  {
    icon: <TwitterIcon height={84} width={84} />,
    link: "#",
    title: "X",
  },

  {
    icon: <InstagramIcon height={84} width={84} />,
    link: "#",
    title: "Instagram",
  },
  {
    icon: <FacebookIcon />,
    link: "#",
    title: "Facebook",
  },
  {
    icon: <YoutubeIcon />,
    link: "#",
    title: "Youtube",
  },
];

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBackground />
      <FollowTitle>
        Follow <span>Socials</span>
      </FollowTitle>
      <SocialsContainer>
        {socialsLinks.map((e) => (
          <SocialWrapper key={e.title}>
            <SocialContainer $isBig={true} href={e.link}>
              {e.icon}
            </SocialContainer>
            {e.title}
          </SocialWrapper>
        ))}
      </SocialsContainer>
      <GambleResponsibility>
        18+ | Gamble Responsibly | Gamble. Most people gamble for fun and
        enjoyment. Do not think of gambling as a way to make money. Only gamble
        with money you can afford to lose. Set a money and time limit in
        advance. Never chase your losses. Don&apos;t use gambling to distract
        yourself from everyday problems.
      </GambleResponsibility>
      <Copyright>GAMBLE on Solana. 2024 ©</Copyright>
    </FooterContainer>
  );
};

export default Footer;
