import styled from "styled-components";
import Link from "next/link";

export const MarketLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 12px;
  padding: 20px 40px;
  width: 300px;
  height: 85px;
  box-shadow:
    inset 2px 2px 4px 0 rgba(255, 255, 255, 0.3),
    inset -2px -2px 8px 0 rgba(255, 255, 255, 0.29);
  background: linear-gradient(180deg, #5d19b9 0%, #2e1562 57.12%);
`;
