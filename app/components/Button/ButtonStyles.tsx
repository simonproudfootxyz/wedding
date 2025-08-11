"use client";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  &:hover,
  &:focus {
    box-shadow: 5px 5px 0px #d8cc34;
    transform: rotate(5deg) translate(2px, 2px);
    transition: all 0.3s ease;
  }
`;

export const StyledButton = styled.button`
  font-size: 20px;
  padding: 20px 35px;
  transform: rotate(5deg);
  background: var(--yellow);
  border-radius: 50%;
  box-shadow: 2px 3px 0px var(--pink);

  .button__text {
    display: inline-block;
    rotate: -5deg;
    color: var(--black);
    transition: all 0.3s ease;
  }

  &:hover,
  &:focus {
    box-shadow: 4px 5px 0px var(--pink);
    transform: rotate(5deg) translate(2px, 2px);
  }

  &:disabled {
    background: var(--off-white);
    color: var(--black);
    cursor: not-allowed;
    box-shadow: none;

    span {
      color: var(--grey);
    }
  }
`;
