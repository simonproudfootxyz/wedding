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
  position: relative;

  &::after {
    @media screen and (max-width: 780px) {
      content: "+";
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 50%;
      background: var(--pink);
      padding: 0px 8px 1px 9px;
      font-size: 2rem;
      line-height: 1;
      transition: all 0.3s ease;
    }
  }

  & + & {
    margin-top: 5rem;

    @media screen and (max-width: 780px) {
      margin-top: 2rem;
    }
  }

  &.expanded {
    &::after {
      @media screen and (max-width: 780px) {
        transform: rotate(45deg);
      }
    }
  }
`;

const Question = styled.p`
  font-family: "new-spirit", serif;
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 0.5rem;
  letter-spacing: -1px;

  @media screen and (max-width: 780px) {
    padding-bottom: 1rem;
    padding-right: 2.5rem;
  }

  &:hover {
    @media screen and (max-width: 780px) {
      cursor: pointer;
    }
  }
`;

const Answer = styled.div`
  @media screen and (max-width: 780px) {
    display: none;

    &.expanded {
      display: block;
    }
  }

  p,
  ul,
  li,
  span {
    font-family: var(--new-spirit);
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
  const [expanded, setExpanded] = React.useState(false);
  return (
    <FAQContainer className={`faq-container ${expanded && "expanded"}`}>
      <Question
        dangerouslySetInnerHTML={{ __html: question }}
        onClick={() => setExpanded(!expanded)}
      ></Question>
      <Answer className={`faq-answer ${expanded ? "expanded" : ""}`}>
        <p dangerouslySetInnerHTML={{ __html: answer }} />
        {children}
      </Answer>
    </FAQContainer>
  );
};

export default FrequentlyAskedQuestion;
