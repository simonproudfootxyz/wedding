import styled from "styled-components";

export const StyledRSVPForm = styled.form`
  .guest-record__item {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
    align-items: center;

    &:not(:first-child) {
      border-top: 2px solid var(--off-white);
    }
  }

  .guest-record__inputs-container {
    .error {
      margin-top: 1rem;
      color: var(--orange);
      text-align: right;
    }
  }

  .guest-record__input-container {
    display: flex;
    gap: 1.5rem;

    label {
      display: block;
      font-size: 1.2rem;
      border: 1px solid var(--off-white);
      padding: 0.75rem 2rem;
      transition: all 0.3s ease;

      &:hover,
      &:focus {
        cursor: pointer;
        background: var(--transparent-white-2);
      }
    }

    input[type="radio"] {
      display: none;
    }

    input[type="radio"]:checked + label {
      background: var(--white);
      color: var(--black);
    }
  }

  .reset-link__container {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .guest-record__dietary {
    border: 2px solid var(--off-white);
    padding: 1.5rem;
    margin-top: 4rem;
  }

  .guest-record__dietary-heading {
    margin-bottom: 2rem;
  }

  .guest-record__dietary-item:not(:first-of-type) {
    border-top: 2px solid var(--off-white);
  }

  .guest-record__dietary-input {
    width: 100%;
    padding: 1rem;
    font-size: 1.2rem;
    font-family: var(--pp-editorial);
    background: none;
    border: none;
    outline: none;

    &::placeholder {
      color: var(--off-white);
    }
  }

  .buttons-container {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: right;
  }
`;
