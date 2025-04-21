"use client";
import React from "react";
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
  .floating {
    position: absolute;
    z-index: 100;
  }

  .planchette {
    left: -45px;
    bottom: -185px;
    animation: hover 7s ease-in-out infinite;
  }

  .ring {
    bottom: -126px;
    left: 260px;
    animation: spin 8s linear infinite;
  }

  .photo {
    top: -200px;
    right: 38px;
    animation: float 9s ease-in-out infinite;
  }

  // TITLE
  // ========================
  .hero__title {
    padding-left: 175px;
    text-indent: var(--offest);
    margin-left: 125px;
  }
  }
`;
