import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: inline-block;
  transform: rotate(5deg);
  background: var(--black);
  border-radius: 50%;
  padding: 17px 30px;
  font-size: 1.2rem;
  color: var(--white);
  box-shadow: 2px 2px 0px var(--pink);
  transition: all 0.3s ease;

  &::after {
    display: none;
  }

  &:hover,
  &:focus {
    box-shadow: 5px 5px 0px var(--pink);
    transform: rotate(5deg) translate(2px, 2px);
  }

  .button-link__text {
    display: inline-block;
    transform: rotate(-5deg);
  }
`;

const StyledSeconaryButtonLink = styled(StyledLink)`
  background: var(--pink);
  color: var(--black);
  box-shadow: 2px 2px 0px var(--yellow);

  &::after {
    display: none;
  }

  &:hover,
  &:focus {
    box-shadow: 5px 5px 0px var(--yellow);
    transform: rotate(5deg) translate(2px, 2px);
    transition: all 0.3s ease;
  }

  .button-link__text {
    display: inline-block;
    transform: rotate(-5deg);
  }
`;

type ButtonLinkProps = React.ComponentProps<typeof Link> & {
  children: React.ReactNode;
  className?: string;
};

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, ...props }) => (
  <StyledLink {...props}>
    <span className="button-link__text">{children}</span>
  </StyledLink>
);

export const SeconaryButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  ...props
}) => (
  <StyledSeconaryButtonLink {...props}>
    <span className="button-link__text">{children}</span>
  </StyledSeconaryButtonLink>
);

export default ButtonLink;
