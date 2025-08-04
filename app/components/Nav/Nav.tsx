"use client";
import React, { useEffect } from "react";
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
import { CEREMONY } from "@/app/utilities/consts";

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
interface NavProps {
  slug?: string;
}

const Nav: React.FC<NavProps> = ({ slug }) => {
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", debounce(handleScroll, 50));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reservationType = localStorage.getItem("reservationType");
  const isCeremonyInvite = reservationType === CEREMONY;
  const date = isCeremonyInvite ? "three pm" : "seven thirty pm";

  return (
    <StyledNav id="nav">
      <NavList>
        <NavItem>
          <NavLink
            href="https://maps.app.goo.gl/fUR4PK6AuuRELQHo7"
            target="_blank"
            rel="noopener noreferrer"
          >
            october&nbsp;31&nbsp;2025 {date}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="https://maps.app.goo.gl/fUR4PK6AuuRELQHo7"
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
        <RSVPLink href={slug ? `/rsvp/${slug}` : "/rsvp"} className={`button`}>
          rsvp
        </RSVPLink>
      </RSVPLinkContainer>
    </StyledNav>
  );
};

export default Nav;
