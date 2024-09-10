import styled from "styled-components";

export const AboutContainer = styled.div`
  border: 2px solid #fff;
  border-radius: 24px;
  padding: 85px 100px;
  display: flex;
  gap: 181px;

  background-image: url("/Rectangle.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  margin-bottom: 50px;
`;

export const Shadow = styled.div`
  box-shadow:
    inset 2px 2px 4px 0 rgba(255, 255, 255, 0.3),
    inset -2px -2px 8px 0 rgba(255, 255, 255, 0.29);
  background: linear-gradient(180deg, #000 0%, #6a1917 57.12%);
  border-radius: 24px;
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
`;
export const AboutTitle = styled.h3`
  font-weight: 600;
  font-size: 36px;
  line-height: 82%;
  text-transform: uppercase;
  color: #ffc701;
`;
export const AboutText = styled.p`
  font-weight: 400;
  font-size: 22px;
  color: #fff;
`;
