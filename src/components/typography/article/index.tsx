import React from "react";
import {
  ArticleContainer,
  ArticleText,
  LineBreaker,
} from "@/components/typography/article/styled";

interface ArticleProps {
  text: string;
  small?: boolean;
}

const Article = ({ small, text }: ArticleProps) => {
  return (
    <ArticleContainer>
      <LineBreaker />
      <ArticleText $small={small}>{text}</ArticleText>
      <LineBreaker />
    </ArticleContainer>
  );
};

export default Article;
