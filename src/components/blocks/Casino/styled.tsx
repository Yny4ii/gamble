"use client";
import styled from "styled-components";

export const CasinoContainer = styled.div`
  padding-top: 60px;
  border: 2px solid #fff;
  border-radius: 24px;
  width: 1200px;
  height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 170px;
`;

export const CasinoBackground = styled.div`
  border-radius: 24px;
  background-image: url("/Slot_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 696px;
`;

export const CoinsContainer = styled.div`
  background-image: url("/Gold.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 238px;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;
