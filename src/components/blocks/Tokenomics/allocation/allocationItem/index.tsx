import React from "react";
import {
  AllocationItemContainer,
  ColorContainer,
  ItemPercent,
} from "@/components/blocks/Tokenomics/allocation/allocationItem/styled";

interface AllocationItemProps {
  bg: string;
  title: string;
  quantity: string;
  percent: number;
}

const AllocationItem = ({
  percent,
  title,
  bg,
  quantity,
}: AllocationItemProps) => {
  return (
    <AllocationItemContainer>
      <div>
        <ColorContainer style={{ background: bg }} />
        <span>{title}</span>
      </div>
      <div>
        <span>{quantity}</span>
        <ItemPercent>{percent}%</ItemPercent>
      </div>
    </AllocationItemContainer>
  );
};

export default AllocationItem;
