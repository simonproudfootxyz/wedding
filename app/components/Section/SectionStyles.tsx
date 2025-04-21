"use client";
import styled from "styled-components";

interface StyledSectionProps {
  backgroundColor?: string;
  backgroundImage?: string;
}

export const StyledSection = styled.section<StyledSectionProps>`
  padding: 100px 0;
  background: ${({ backgroundColor, backgroundImage }) => {
    console.log({ backgroundImage });
    return backgroundImage
      ? `url(${backgroundImage})`
      : backgroundColor || "var(--black)";
  }};
  color: var(--white);

  .grid-container {
    padding-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    min-height: 500px; /* Set the total height of the grid */
    gap: 16px; /* Optional: Add spacing between grid items */
  }

  .full-height-item {
    grid-row: span 2; /* Spans the full height of the grid */
    background-color: var(--orange); /* Example background color */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .split-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Evenly space the sub-components */
    gap: 20px;
  }

  .half-height-item {
    border: 1px solid var(--black); /* Optional: Add a border for visibility */
    height: 250px; /* Each item takes half the height of the column */
    background-color: var(--cream); /* Example background color */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    &:first-of-type {
      background: var(--pink); /* Different color for the first half */
    }

    &:nth-of-type(2) {
      background: var(--yellow);
    }
  }
`;
