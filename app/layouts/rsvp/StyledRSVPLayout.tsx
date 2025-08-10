import styled from "styled-components";

export const StyledRSVPLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 8rem 2rem 6rem;
  background: black;

  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  li {
    color: var(--white);
  }

  .background {
    background: var(--black);
    width: 100%;
    position: relative;
    padding-top: 12rem;
    padding-bottom: 6rem;
    max-width: var(--max-width);
  }

  .heading-box {
    max-width: var(--inner-max-width);
    text-align: center;
    margin-bottom: 3rem;
  }

  .heading-box__link {
    display: inline-block;
    margin-top: 2rem;
  }

  .floating {
    top: 30px;
    left: calc(50% - (398px / 4));
    animation: float 7.1s ease-in-out infinite;
  }
`;
