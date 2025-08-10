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

  @media screen and (max-width: 780px) {
    padding: 2.5rem 0;
  }

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

  &.ouija-section {
    background-position-x: 40%;

    @media screen and (max-width: 780px) {
      display: none;
    }
  }

  &.rsvp-section {
    background-position-x: 50%;
  }
`;

export const BannerSection = styled(StyledSection)`
  padding: 30px 0;
  background: var(--yellow);

  .marquee-text {
    display: flex;
    align-items: center;
    font-size: 100px;
    color: var(--black);
    white-space: nowrap;
    font-family: var(--pp-editorial);
    font-weight: 100;
    animation: marquee 15s infinite alternate linear;

    @media screen and (max-width: 780px) {
      font-size: 4rem;
    }
  }

  .marquee-image {
    margin: 0 20px;

    @media screen and (max-width: 780px) {
      width: 100px;
      height: auto;
    }
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
