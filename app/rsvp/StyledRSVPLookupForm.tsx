import styled from "styled-components";

export const StyledRSVPLookupForm = styled.form`
  .inputs {
    display: flex;
    gap: 4rem;
  }

  .input-container {
    flex: 1;

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    input {
      width: 100%;
      padding: 1rem;
      font-size: 1.5rem;
      font-family: var(--pp-editorial);
    }

    .error {
      margin-top: 1rem;
      color: var(--orange);
    }
  }

  .reset-link__container {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
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
