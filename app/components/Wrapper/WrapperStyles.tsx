"use client";
import styled from "styled-components";
import { WrapperProps } from "./Wrapper";

const StyledWrapper = styled.div<WrapperProps>`
  display: flex;
  max-width: var(--max-width);
  margin: 0 auto;
  position: relative;
  overflow: visible;
  flex-wrap: wrap;
  padding: 0 25px;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "left"};

  .flex-column {
    flex: 1;
  }

  &.ouija-wrapper {
    justify-content: space-between;

    .chair-photo {
      margin-top: 150px;
    }
  }

  &.event-wrapper {
    color: var(--white);

    h3 {
      color: var(--white);
    }
  }

  &.devil-wrapper {
    color: var(--black);

    .title-wrapper {
      padding-top: 100px;
    }

    h1 {
      letter-spacing: -2px;
      padding-bottom: 35px;
    }

    .image-wrapper {
      position: relative;
    }

    .floating {
      position: absolute;
    }

    .devil {
      animation: hover 7s ease-in-out infinite;
      left: 0;
      bottom: -150px;
    }

    .diablo {
      animation: float 8s linear infinite;
      top: -120px;
      right: 50px;
    }
  }
`;

export const StyledRSVPWrapper = styled(StyledWrapper)`
  justify-content: center;

  .rsvp-title {
    color: var(--yellow);
    font-size: 250px;
    letter-spacing: 40px;
    filter: drop-shadow(2px 4px 6px black);
  }

  .floating-letter {
    display: inline-block;
    filter: drop-shadow(0px 0px 5px var(--black));
  }

  .floating-R {
    animation: hover 7.1s ease-in-out infinite;
  }

  .floating-S {
    animation: reverse-hover 8.2s linear infinite;
  }

  .floating-V {
    animation: hover 5.5s ease-in-out infinite;
  }

  .floating-P {
    animation: reverse-hover 6.5s linear infinite;
  }

  .rsvp-content {
    padding-top: 100px;
    filter: drop-shadow(0px 0px 10px var(--black));
  }

  p {
    filter: drop-shadow(2px 1px 2px var(--black))
      drop-shadow(1px 1px 2px var(--black))
      drop-shadow(-1px -1px 2px var(--black));
  }
`;
export default StyledWrapper;
