"use client";
import React, { HTMLAttributes } from "react";
import { MainButtonContainer } from "./styled";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isBig?: boolean;
}

const MainButton = ({ isBig, ...props }: ButtonProps) => {
  return <MainButtonContainer $isBig={isBig} {...props}></MainButtonContainer>;
};

export default MainButton;
