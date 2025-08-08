"use client";
import styled from "styled-components";
import Link from "next/link";

export const StyledNav = styled.nav<{ isNearTopOfPage?: boolean }>`
  padding: 1rem 2rem;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;

  .navigation--fixed {
    display: none;
  }

  h2 {
    color: transparent;
    transition: all 0.3s ease;
  }

  // BACKGROUND-FILLED
  // ========================
  &.background-filled {
    background: var(--canvas);
    border-bottom: 2px solid var(--70s-green);

    h2 {
      color: var(--black);
    }

    .navigation--non-fixed {
      display: none;
    }

    .navigation--fixed {
      display: flex;
    }
  }
`;

export const NavList = styled.div`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavItem = styled.li`
  margin: 0;
  padding-right: 40px;
  max-width: 180px;
  line-height: 0.9;
`;

export const NavLink = styled.a`
  text-decoration: none;
  transition: all 0.3s ease;
  color: var(--black);
  font-size: 14px;
  font-weight: 600;

  &:hover,
  &:focus {
    // border-bottom: 3px solid var(--black);
    // filter: drop-shadow(10px 10px 0px var(--black));
    // box-shadow: 3px 3px 0 var(--black);
  }

  &::after {
    display: none;
  }
`;

export const InnerNavLink = styled.a`
  text-decoration: none;
  transition: all 0.3s ease;
  color: var(--black);
  font-size: 20px;

  &:hover,
  &:focus {
    &::after {
      background: var(--orange);
    }
  }

  &::after {
    background: transparent;
  }
`;

export const Logo = styled.h2`
  line-height: 0.9;
  font-size: 2.4rem;
  letter-spacing: -2px;
`;

export const RSVPLink = styled(Link)`
  transform: rotate(5deg);
  background: var(--black);
  border-radius: 50%;
  box-shadow: 2px 2px 0px var(--pink);

  &:hover,
  &:focus {
    box-shadow: 5px 5px 0px var(--pink);
    transform: rotate(5deg) translate(2px, 2px);
    transition: all 0.3s ease;
  }

  span {
    display: block;
    font-size: 20px;
    padding: 15px 35px;
    transform: rotate(-5deg);
    position: relative;
    z-index: 100;
  }

  &::after {
    display: none;
  }
`;
