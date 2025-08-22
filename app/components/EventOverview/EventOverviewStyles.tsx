"use client";
import styled from "styled-components";

export const StyledEventOverview = styled.div`
  // .background-effect--slant {
  //   transform: skew(-0.5deg) rotate(-1deg);
  // }

  .background-effect--reverse-slant {
    transform: skew(-0.25deg) rotate(0.5deg);
  }

  .event__heading {
    padding-top: 1rem;
  }

  .grid-container {
    padding-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Two equal columns */
    min-height: 500px; /* Set the total height of the grid */
    gap: 16px; /* Optional: Add spacing between grid items */
    flex: 0 0 100%;
    color: var(--black);

    @media screen and (max-width: 780px) {
      grid-template-columns: 1fr; /* Single column on smaller screens */
      padding-top: 50px;
    }

    .event-overview__title {
      @media screen and (max-width: 780px) {
        font-size: 2rem;
      }
    }
    .event-overview__image {
      max-width: 100%;
      height: auto;
    }

    .event-overview__image--half {
      width: auto;
      max-width: 50%;
      height: auto;
    }
  }

  .full-height-item {
    grid-row: span 2; /* Spans the full height of the grid */
    background-color: var(--orange); /* Example background color */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 30px;
    text-align: center;
    flex-wrap: wrap;
    gap: 1.5rem;

    @media screen and (max-width: 780px) {
      padding: 1.5rem;
    }

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
    grid-row: span 2; /* Spans the full height of the grid */
  }

  .half-height-item {
    background-color: var(--cream); /* Example background color */
    display: flex;
    align-items: center;
    padding: 50px;
    gap: 1.5rem;
    height: 100%;

    @media screen and (max-width: 780px) {
      padding: 1.5rem;
    }

    &:first-of-type {
      background: var(--pink); /* Different color for the first half */
    }

    &:nth-of-type(2) {
      background: var(--yellow);
      transform: skew(-0.5deg) rotate(-1deg);
    }

    .column {
      flex: 1; /* Each column takes 50% width */
      height: 100%; /* Full height of the parent */
      gap: 1.5rem;

      &:nth-of-type(1) {
        flex-direction: column;
        justify-content: center;
        display: flex;
        @media screen and (max-width: 780px) {
          flex: 2;
        }
      }

      &:nth-of-type(2) {
        justify-content: space-between; /* Space between items in the second column */

        @media screen and (max-width: 780px) {
          justify-content: space-evenly; /* Space between items in the second column */
          flex: 3;
        }
      }
    }

    .star {
      animation: spin 120s linear infinite;
    }

    .chalice {
      animation: mini-float 9.5s ease-in-out infinite;
    }
  }

  // CEREMONY EVENT
  &.ceremony-event {
    .horn-hand {
      // animation: hover 5s ease-in-out infinite;
    }
  }
`;
