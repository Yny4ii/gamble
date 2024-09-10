"use client";
import React from "react";
import Image from "next/image";
import MainButton from "@/components/ui/buttons/MainButton";
import {
  ImageBlock,
  JoinCommunityContainer,
  WelcomeBlockContainer,
} from "@/components/blocks/WelcomeBlock/styled";
import Gamble from "@/icons/Gamble";

const WelcomeBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <WelcomeBlockContainer>
      {children}
      <ImageBlock>
        <Image
          src={"/welcome.png"}
          alt={"background"}
          width={815}
          height={449}
        />
      </ImageBlock>
      <JoinCommunityContainer>
        <h1>
          HI, I&apos;M GAMBLE
          <br /> INSPIRED BY AH GAMBLE, HERE TO BRING SMILES AND SWAY INTO YOUR
          HEARTS!
          <br /> I AM JUST A SWINGIN&apos; ORANGUTAN!
        </h1>
        <MainButton isBig={true}>JOIN COMMUNITY</MainButton>
      </JoinCommunityContainer>
      <Gamble />
    </WelcomeBlockContainer>
  );
};

export default WelcomeBlock;
