import styled from "styled-components";

export const WelcomeBlockContainer = styled.div`
  background-image: url("/bg.png");
  height: 810px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 410px;
  position: relative;
  overflow: hidden;
`;

export const ImageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 37px;
  margin-bottom: 25px;
`;

export const JoinCommunityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  align-items: center;

  h1 {
    font-weight: 500;
    font-size: 22px;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
  }
`;
