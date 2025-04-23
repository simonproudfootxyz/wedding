"use client";
import React from "react";
import styled from "styled-components";

interface FrequentlyAskedQuestionProps {
  question: string;
  answer: string;
  children?: React.ReactNode;
}

const FAQContainer = styled.div`
  color: var(--black);

  & + & {
    margin-top: 65px;
  }
`;

const Question = styled.p`
  font-family: "new-spirit", serif;
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 6px;
  letter-spacing: -1px;
`;

const Answer = styled.div`
  p,
  ul,
  li,
  span {
    font-size: 16px;
    font-family: "new-spirit", serif;
    font-weight: 300;
    letter-spacing: -1px;
    line-height: 1.25;
  }

  ul {
    padding: 30px 0;

    li {
      & + li {
        margin-top: 30px;
      }
    }
  }
`;

export const FrequentlyAskedQuestion: React.FC<
  FrequentlyAskedQuestionProps
> = ({ question, answer, children }) => {
  return (
    <FAQContainer>
      <Question dangerouslySetInnerHTML={{ __html: question }}></Question>
      <Answer>
        <p dangerouslySetInnerHTML={{ __html: answer }} />
        {children}
      </Answer>
    </FAQContainer>
  );
};

export default FrequentlyAskedQuestion;
