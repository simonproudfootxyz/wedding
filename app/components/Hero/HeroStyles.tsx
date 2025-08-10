"use client";
import styled from "styled-components";

export const StyledHero = styled.div<{ backgroundColor?: string }>`
  padding: 90px 25px;
  background: ${(props) => props.backgroundColor || "var(--black)"};
  position: relative;
  overflow: visible;

  .hero__title {
    max-width: var(--inner-max-width);
    margin: 0 auto;
    font-size: 112px;
    font-weight: 100;
    letter-spacing: -7px;
    line-height: 1;
  }

  .wrapper {
    position: relative;
    max-width: 1100px;
    // border: 3px solid red;
    margin: 0 auto;
  }
`;

export const StyledTopHero = styled(StyledHero)`
  --offest: -125px;
  background: var(--pink);
  color: var(--black);
  padding-top: 125px;

  // FLOATING SHIT
  // ========================
  .planchette {
    left: -45px;
    bottom: -185px;
    animation: hover 7s ease-in-out infinite;

    @media screen and (max-width: 1100px) {
      bottom: -375px;
    }

    @media screen and (max-width: 780px) {
      width: 225px;
      height: auto;
      bottom: -173px;
      left: -100px;
    }
  }

  .ring {
    bottom: -126px;
    left: 260px;
    animation: spin 8s linear infinite;

    @media screen and (max-width: 1100px) {
      // positioning
    }

    @media screen and (max-width: 780px) {
      // mobile positioning
      left: 80%;
    }
  }

  .photo {
    top: -200px;
    right: 38px;
    animation: float 9s ease-in-out infinite;

    @media screen and (max-width: 1100px) {
      right: -80px;
      top: -225px;
    }

    @media screen and (max-width: 780px) {
      right: -52px;
      top: -154px;
      width: 140px;
      height: auto;
    }
  }

  // TITLE
  // ========================
  .hero__title {
    padding-left: 175px;
    text-indent: var(--offest);
    margin-left: 125px;

    @media screen and (max-width: 1100px) {
      padding-left: 0;
      text-indent: 0;
      margin-left: 0;
      text-align: center;
      padding: 0 3rem;
    }

    @media screen and (max-width: 780px) {
      font-size: 5rem;
      padding: 0;
    }
  }
`;
