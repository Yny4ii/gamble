"use client";
import React from "react";
import {
  TweetsBlockContainer,
  TweetsContainer,
  TweetsRowContainer,
} from "@/components/blocks/Tweets/styled";
import Article from "@/components/typography/article";
import Tweet from "@/components/blocks/Tweets/tweet";

const imagesArray = [
  [
    {
      imgPath: "/1.Tweet.png",
      firstColor: "#5d19b9",
      secondColor: "#101e32",
    },
    {
      imgPath: "/2.Tweet.png",
      firstColor: "#3794c9",
      secondColor: "#031329",
    },
    {
      imgPath: "/3.Tweet.png",
      firstColor: "#5e8016",
      secondColor: "#031329",
    },
  ],
  [
    {
      imgPath: "/4.Tweet.png",
      firstColor: "#3794c9",
      secondColor: "#031329",
    },
    {
      imgPath: "/5.Tweet.png",
      firstColor: "#a46225",
      secondColor: "#031329",
    },
    {
      imgPath: "/6.Tweet.png",
      firstColor: "#5d19b9",
      secondColor: "#101e32",
    },
  ],
  [
    {
      imgPath: "/7.Tweet.png",
      firstColor: "#932c95",
      secondColor: "#031329",
    },
    {
      imgPath: "/8.Tweet.png",
      firstColor: "#5d19b9",
      secondColor: "#101e32",
    },
    {
      imgPath: "/9.Tweet.png",
      firstColor: "#3794c9",
      secondColor: "#031329",
    },
  ],
];

const Tweets = () => {
  return (
    <TweetsBlockContainer>
      <Article text={"Where the narrative is coming from"} small={true} />
      <TweetsContainer>
        {imagesArray.map((e, index) => (
          <TweetsRowContainer key={index}>
            {e.map((e, index) => (
              <Tweet
                key={index}
                firstColor={e.firstColor}
                secondColor={e.secondColor}
                imgPath={e.imgPath}
              ></Tweet>
            ))}
          </TweetsRowContainer>
        ))}
      </TweetsContainer>
    </TweetsBlockContainer>
  );
};

export default Tweets;
