import styled from "styled-components";

export const StyledRSVPLookupForm = styled.form`
  .inputs {
    display: flex;
    gap: 4rem;

    @media screen and (max-width: 780px) {
      display: block;
    }
  }

  .input-container {
    flex: 1;

    &:first-of-type {
      @media screen and (max-width: 780px) {
        padding-bottom: 1.5rem;
      }
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--off-white);
    }

    input {
      width: 100%;
      padding: 1rem;
      font-size: 1.5rem;
      font-family: var(--new-spirit);
      background: none;
      border: 2px solid var(--off-white);

      &:focus {
        border: 2px solid transparent;
      }
    }

    .error {
      margin-top: 1rem;
      color: var(--orange);
    }
  }

  .reset-link__container {
    text-align: center;
    margin-bottom: 3rem;
    margin-top: -3rem;
  }

  .reset-link__container--no-results {
    text-align: center;
    margin-bottom: 3rem;
  }

  .link--no-guests {
    font-family: inherit;
  }

  .buttons-container {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: right;
  }

  .lookup-list {
    .lookup-list__item {
      &:not(:first-child) {
        border-top: 2px solid var(--off-white);
      }
    }
  }
`;
