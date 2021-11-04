import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuBurger from "./MenuBurger";
import Menu from "./Menu";

const Nav = styled.nav`
  position: ${({ position }) => position};
  width: 100%;
  max-width: 1400px;
  height: auto;
  padding: 10px;
  background-color: rgba(220, 210, 220, 0.6);
  color: rgb(30, 30, 30);
  font-size: 2.5rem;
  z-index: 1;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

const CompName = styled(Link)`
  width: auto;
  font-size: 2.5rem;
  color: rgb(30, 30, 30);
  text-decoration: none;
  cursor: pointer;
  font-weight: bold;
`;

const NavBar = () => {
  const NavbarRef = useRef(null);
  const [posistion, setPosistion] = useState("");

  useEffect(() => {
    function getNavbarHeight() {
      const navbar = document.querySelector("nav");
      let pageOffsetY = window.pageYOffset;
      let navbarHeight = navbar.offsetHeight;
      let navPosition = pageOffsetY > navbarHeight ? "fixed" : "none";
      setPosistion(navPosition);
      return getNavbarHeight;
    }
    window.addEventListener("scroll", getNavbarHeight);
    return getNavbarHeight();
  }, [NavbarRef]);

  return (
    <Nav ref={NavbarRef} position={posistion}>
      <MenuWrapper>
        <CompName to="/">
          DB<span style={{ color: "red" }}>S</span> Auto
        </CompName>
        <MenuBurger />
        <Menu />
      </MenuWrapper>
    </Nav>
  );
};

export default NavBar;
