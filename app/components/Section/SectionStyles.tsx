"use client";
import styled from "styled-components";

interface StyledSectionProps {
  backgroundColor?: string;
  backgroundImage?: string;
}

export const StyledSection = styled.section<StyledSectionProps>`
  padding: 100px 0;
  background: ${({ backgroundColor, backgroundImage }) => {
    return backgroundImage
      ? `url(${backgroundImage})`
      : backgroundColor || "var(--black)";
  }};
  color: var(--white);

  &.event-section {
    & + &.event-section {
      border-top: 4px solid var(--transparent-white);
    }
  }

  &.cream-section {
    & + &.cream-section {
      border-top: 4px solid var(--70s-green);
    }

    h2 {
      color: var(--70s-brown);
    }
  }
`;

export const FooterSection = styled(StyledSection)`
  padding: 30px 0;
  border-top: 4px solid var(--transparent-white);

  .ballsack {
    border: 10px solid red;
  }
`;
