"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import {
  NavList,
  StyledNav,
  NavItem,
  NavLink,
  RSVPLink,
  RSVPLinkContainer,
  Logo,
} from "./NavStyles";
import { debounce } from "@/app/utilities/utilities";

const handleScroll = () => {
  const nav = document.getElementById("nav");
  const topHero = document.getElementById("top_hero");
  const navHeight = nav ? nav.clientHeight : 0;
  const topHeroHeight = topHero ? topHero.clientHeight : 0;
  const offsetHeight = topHeroHeight - navHeight;

  if (nav) {
    if (window.scrollY > offsetHeight) {
      nav.classList.add("background-filled");
    } else {
      nav.classList.remove("background-filled");
    }
  }
};

const Nav: React.FC = () => {
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", debounce(handleScroll, 50));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <StyledNav id="nav">
      <NavList>
        <NavItem>
          <NavLink
            href="https://maps.app.goo.gl/fUR4PK6AuuRELQHo7"
            // className={`spectral-medium`}
            target="_blank"
            rel="noopener noreferrer"
          >
            october&nbsp;31&nbsp;2025 seven&nbsp;thirty&nbsp;pm
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://maps.app.goo.gl/fUR4PK6AuuRELQHo7"
            // className={`spectral-medium`}
            target="_blank"
            rel="noopener noreferrer"
          >
            rainhard&nbsp;brewing 100&nbsp;symes&nbsp;road
          </NavLink>
        </NavItem>
      </NavList>
      <div>
        <Logo>mhairi&nbsp;and&nbsp;simon are&nbsp;getting&nbsp;married.</Logo>
      </div>
      <RSVPLinkContainer>
        <RSVPLink href="/rsvp" className={`button spectral-medium`}>
          RSVP
        </RSVPLink>
      </RSVPLinkContainer>
    </StyledNav>
  );
};

export default Nav;
