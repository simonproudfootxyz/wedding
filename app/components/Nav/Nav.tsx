"use client";
import React, { useEffect } from "react";
import {
  NavList,
  StyledNav,
  NavItem,
  NavLink,
  Logo,
  InnerNavLink,
} from "./NavStyles";
import { debounce } from "@/app/utilities/utilities";
import { CEREMONY } from "@/app/utilities/consts";
import ButtonLink from "../ButtonLink/ButtonLink";

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
      <NavList className="navigation--non-fixed">
        <NavItem>
          <NavLink href="#schedule" rel="noopener noreferrer">
            october&nbsp;31&nbsp;2025 {date}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#summary" rel="noopener noreferrer">
            rainhard&nbsp;brewing 100&nbsp;symes&nbsp;road
          </NavLink>
        </NavItem>
      </NavList>
      <div>
        <Logo>m+s get married</Logo>
      </div>
      <NavList>
        <NavList className="navigation--fixed">
          <NavItem>
            <InnerNavLink href="#summary" rel="noopener noreferrer">
              Summary
            </InnerNavLink>
          </NavItem>
          <NavItem>
            <InnerNavLink href="#schedule" rel="noopener noreferrer">
              Schedule
            </InnerNavLink>
          </NavItem>
          <NavItem>
            <InnerNavLink href="#FAQ" rel="noopener noreferrer">
              FAQs
            </InnerNavLink>
          </NavItem>
        </NavList>
      </NavList>

      <div>
        <ButtonLink href={slug ? `/rsvp/${slug}` : "/rsvp"}>rsvp</ButtonLink>
      </div>
    </StyledNav>
  );
};

export default Nav;
