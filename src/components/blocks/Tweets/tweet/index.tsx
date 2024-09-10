import React from "react";
import { TweetContainer } from "@/components/blocks/Tweets/tweet/styled";

interface TweetProps {
  imgPath: string;
  firstColor: string;
  secondColor: string;
}

const Tweet = ({ firstColor, secondColor, imgPath }: TweetProps) => {
  return (
    <TweetContainer $firstColor={firstColor} $secondColor={secondColor}>
      <img src={imgPath} alt={"tweet"} />
    </TweetContainer>
  );
};

export default Tweet;
