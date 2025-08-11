import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledCloseLink = styled(Link)`
  display: inline-block;
  background: black;
  //   background: var(--black);
  border-radius: 50%;
  padding: 0 13px 3px;
  font-size: 1.2rem;
  color: var(--white);
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  //   box-shadow: 2px 2px 6px var(--yellow);
  border: 2px solid var(--off-white);

  &::after {
    display: none;
  }

  &:hover,
  &:focus {
    transform: translate(2px, 2px);
  }

  .close-link__text {
  }
`;

type CloseLinkProps = React.ComponentProps<typeof Link> & {
  children: React.ReactNode;
  className?: string;
};

export const CloseLink: React.FC<CloseLinkProps> = ({ children, ...props }) => (
  <StyledCloseLink {...props}>
    <span className="close-link__text">{children}</span>
  </StyledCloseLink>
);
