import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-image: url("/Rectangle.png");
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 810px;
  position: relative;
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding-bottom: 60px;
  margin-bottom: 68px;
  overflow: hidden;
`;

export const GambleResponsibility = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #fff;
  max-width: 600px;
  opacity: 0.5;
  z-index: 2;
`;

export const FollowTitle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  z-index: 2;

  span {
    font-weight: 600;
    font-size: 40px;
    letter-spacing: 0.03em;
    color: #ffc701;
  }
`;
export const SocialsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  z-index: 2;
`;

export const Copyright = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
`;

export const FooterBackground = styled.div`
  height: 810px;
  width: 100%;
  background-image: url("/BgFooter.png");
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  z-index: 2;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  max-width: 160px;
`;
