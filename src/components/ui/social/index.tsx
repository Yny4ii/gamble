import React from "react";
import { SocialContainer } from "@/components/ui/social/styled";

interface SocialProps {
  icon: React.ReactNode;
  link: string;
}

const Social = ({ icon, link }: SocialProps) => {
  return <SocialContainer href={link}>{icon}</SocialContainer>;
};

export default Social;
