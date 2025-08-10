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

    @media screen and (max-width: 780px) {
      flex-basis: 100%;
    }

    h2 {
      margin-bottom: 1.5rem;
    }
  }

  &.ouija-wrapper {
    justify-content: space-between;

    @media screen and (max-width: 780px) {
      flex-direction: column-reverse;
    }

    .chair-photo {
      margin-top: 150px;

      @media screen and (max-width: 780px) {
        align-self: end;
        margin-top: 400px;
      }
    }

    .ouija-wrapper__photo {
      max-width: 100%;
      height: 100%;
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

    @media screen and (max-width: 780px) {
      flex-direction: column-reverse;
    }

    .title-wrapper {
      padding-top: 100px;

      @media screen and (max-width: 780px) {
        padding-right: 150px;
      }
    }

    h1 {
      letter-spacing: -2px;
      padding-bottom: 35px;
    }

    .image-wrapper {
      position: relative;

      @media screen and (max-width: 780px) {
        height: 320px;
      }
    }

    .devil {
      animation: hover 7s ease-in-out infinite;
      left: 0;
      bottom: -150px;

      @media screen and (max-width: 780px) {
        top: 0;
        left: unset;
        right: -30px;
        width: 200px;
        height: auto;
      }
    }

    .diablo {
      animation: float 8s linear infinite;
      top: -120px;
      right: 50px;

      @media screen and (max-width: 780px) {
        display: none;
      }
    }
  }
`;

export const StyledRSVPWrapper = styled(StyledWrapper)`
  min-height: 500px;

  @media screen and (max-width: 780px) {
    min-height: 200px;
  }
`;
export default StyledWrapper;
