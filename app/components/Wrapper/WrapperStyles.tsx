"use client";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  max-width: var(--max-width);
  margin: 0 auto;
  position: relative;
  overflow: visible;
  flex-wrap: wrap;
  padding: 0 25px;

  .flex-column {
    flex: 1;
  }

  &.ouija-wrapper {
    justify-content: flex-end;
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

export default StyledWrapper;
