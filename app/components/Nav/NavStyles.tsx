"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

export const StyledNav = styled.nav<{ isNearTopOfPage?: boolean }>`
  padding: 25px 40px;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: transparent;
    transition: all 0.3s ease;
  }

  // BACKGROUND-FILLED
  // ========================
  &.background-filled {
    background: var(--pink);
    box-shadow: 0 0 5px var(--black);

    h2 {
      color: var(--black);
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

export const Logo = styled.h2`
  max-width: 250px;
  margin-left: -50px;
  text-indent: -50px;
  line-height: 0.9;
  font-size: 24px;
`;

export const RSVPLinkContainer = styled.div`
  transform: rotate(5deg);
  background: var(--black);
  border-radius: 50%;
  box-shadow: 2px 2px 0px #d8cc34;

  &:hover,
  &:focus {
    box-shadow: 5px 5px 0px #d8cc34;
    transform: rotate(5deg) translate(2px, 2px);
    transition: all 0.3s ease;
  }
`;

export const RSVPLink = styled(Link)`
  display: block;
  font-size: 20px;
  padding: 15px 35px;
  transform: rotate(-5deg);
  position: relative;
  z-index: 100;
`;
