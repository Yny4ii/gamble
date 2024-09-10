import styled from "styled-components";

export const RoadmapItemContainer = styled.div`
  position: relative;
  min-width: 300px;
  height: 250px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  border-radius: 6px;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
  box-shadow:
    inset 2px 2px 4px 0 rgba(255, 255, 255, 0.3),
    inset -2px -2px 8px 0 rgba(255, 255, 255, 0.29);

  ul {
    padding-left: 30px;
  }
`;

export const RoadmapItemTitle = styled.p`
  font-weight: 600;
  font-size: 36px;
  line-height: 82%;
  text-transform: uppercase;
  color: #ffc701;
`;

export const RoadmapItemWrapper = styled.div`
    min-width: 650px;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;

    svg {
        position: absolute;
    }

,
&: nth-child(1) {
    div {
        background: linear-gradient(180deg, #5d19b9 0%, #101e32 57.12%);
    }

,
svg {

    left: 66px;
    bottom: 36px;,
}
},
&: nth-child(2) {
    div {
        background: linear-gradient(180deg, #94319d 0%, #101e32 57.12%);
    }

,
svg {
    left: -1px;
    bottom: 39px;
}
},
&: nth-child(3) {
    div {
        background: linear-gradient(180deg, #31969d 0%, #101e32 57.12%);

    }

,
svg {
    left: 20px;
    bottom: 24px;
}
},
&: nth-child(4) {
    div {
        background: linear-gradient(180deg, #9d7e31 0%, #101e32 57.12%);

    }

,
svg {
    left: 54px;
    bottom: -1px;
}
}

`;
