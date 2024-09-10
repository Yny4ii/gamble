"use client";
import React from "react";
import {
  AboutContainer,
  AboutText,
  AboutTitle,
  Shadow,
} from "@/components/blocks/About/styled";
import Gamble5 from "@/icons/Gamble5";

const About = () => {
  return (
    <Shadow id={"about"}>
      <Gamble5 />
      <AboutContainer>
        <AboutTitle>About</AboutTitle>
        <AboutText>
          Welcome to the world of GAMBLE Inspired by the legendary orangutan Ah
          GAMBLE, who captivated hearts at the Singapore Zoo, $GAMBLE is more
          than just a memecoin – it’s a celebration of charm, history, and
          community. Our mission is to bring people together through the power
          of memes, fun, and nostalgia. Join us as we swing through the treetops
          of the blockchain jungle, spreading joy and creating value along the
          way.
        </AboutText>
      </AboutContainer>
    </Shadow>
  );
};

export default About;
