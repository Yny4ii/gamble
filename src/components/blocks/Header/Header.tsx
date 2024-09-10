"use client";
import React from "react";
import MainButton from "@/components/ui/buttons/MainButton";
import Socials from "./Socials";
import { HeaderContainer } from "@/components/blocks/Header/styled";
import Logo from "@/components/blocks/Header/icons/Logo";
import Navigation from "@/components/blocks/Header/Navigation";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
      <Socials />
      <MainButton>JOIN COMMUNITY</MainButton>
    </HeaderContainer>
  );
};

export default Header;
