"use client";
import styled from "styled-components";

export const StyledEventOverview = styled.div`
  .background-effect--slant {
    transform: skew(-0.5deg) rotate(-1deg);
  }

  .background-effect--reverse-slant {
    transform: skew(-0.25deg) rotate(0.5deg);
  }

  .grid-container {
    padding-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    min-height: 500px; /* Set the total height of the grid */
    gap: 16px; /* Optional: Add spacing between grid items */
    flex: 0 0 100%;
    color: var(--black);
  }

  .full-height-item {
    grid-row: span 2; /* Spans the full height of the grid */
    background-color: var(--orange); /* Example background color */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px;
    text-align: center;
    flex-wrap: wrap;

    .skeleton-dance {
      animation: hover 7s ease-in-out infinite;
    }

    .demon-dance {
      animation: reverse-hover 8s linear infinite;
    }
  }

  .split-column {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Evenly space the sub-components */
    gap: 20px;
  }

  .half-height-item {
    background-color: var(--cream); /* Example background color */
    display: flex;
    align-items: center;
    padding: 50px;

    &:first-of-type {
      background: var(--pink); /* Different color for the first half */
    }

    &:nth-of-type(2) {
      background: var(--yellow);
    }

    .column {
      flex: 1; /* Each column takes 50% width */
      height: 100%; /* Full height of the parent */
    }

    .star {
      animation: spin 240s linear infinite;
    }

    .chalice {
      animation: float 9.5s ease-in-out infinite;
    }
  }
`;
