"use client";
import styled from "styled-components";

interface StyledSectionProps {
  backgroundColor?: string;
  backgroundImage?: string;
  textColor?: string;
}

export const StyledSection = styled.section<StyledSectionProps>`
  padding: 100px 0;
  background: ${({ backgroundColor, backgroundImage }) => {
    return backgroundImage
      ? `url(${backgroundImage})`
      : backgroundColor || "var(--black)";
  }};
  color: ${({ textColor }) => {
    return textColor ? textColor : "var(--white)";
  }};
  background-size: cover;

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

export const BannerSection = styled(StyledSection)`
  padding: 30px 0;
  background: var(--yellow);

  p {
    display: flex;
    align-items: center;
    font-size: 100px;
    color: var(--black);
    white-space: nowrap;
    font-family: var(--pp-editorial);
    font-weight: 100;
    animation: marquee 15s infinite alternate linear;
  }

  img {
    margin: 0 20px;
  }

  @keyframes marquee {
    to {
      transform: translateX(-100%);
    }
  }
`;

export const FooterSection = styled(StyledSection)`
  padding: 30px 0;
  border-top: 4px solid var(--transparent-white);

  h3 {
    color: var(--white);
    letter-spacing: -2px;
  }

  .footer__content-box {
    display: flex;
    align-items: center;
  }
`;
