import styled from "styled-components";
import Link from "next/link";

export const NavigationItemContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 50px 25px 25px 25px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background: rgba(217, 217, 217, 0.1);
  }
`;
