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
`;

const Question = styled.div`
  font-family: "new-spirit", serif;
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 8px;
`;

const Answer = styled.div`
  font-family: "new-spirit", serif;
  font-size: 16px;
  font-weight: 300;
`;

export const FrequentlyAskedQuestion: React.FC<
  FrequentlyAskedQuestionProps
> = ({ question, answer, children }) => {
  return (
    <FAQContainer>
      <Question>
        <p dangerouslySetInnerHTML={{ __html: question }}></p>
      </Question>
      <Answer>
        <p dangerouslySetInnerHTML={{ __html: answer }} />
        {children}
      </Answer>
    </FAQContainer>
  );
};

export default FrequentlyAskedQuestion;
