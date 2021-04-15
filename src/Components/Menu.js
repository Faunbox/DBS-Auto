import React, { useState } from "react";

import { Link } from "react-router-dom";

import styled, { css } from "styled-components";
import { GrMenu, GrClose } from "react-icons/gr";

const Wrapper = styled.div`
  display: flex;
  transition: 0.7s ease;
`;
const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 40%;
  z-index: 100;
  height: 100vh;
  background-color: rgb(220, 210, 220);
  transform: ${({ state }) =>
    state === true ? "translate(0, 0)" : "translate(-100%, 0)"};
  transition: 0.8s ease;
  color: "white";
`;
const A = styled(Link)`
  padding: 15px;
  color: rgb(30, 30, 30);
  font-size: 1.5rem;
  &:hover {
    font-weight: bold;
  }
`;

const TransparentBg = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ state }) =>
    state === true ? "rgba(0, 0, 0, 0.8)" : "transparent"};
  z-index: 1;
  transform: ${({ state }) =>
    state === true ? "translate(0, 0)" : "translate(100%, 0)"};
  transition: 0.8s ease;
`;

const MenuButtonsCss = css`
  font-size: 3rem;
  padding-left: 10%;

  path {
    stroke: rgb(30, 30, 30);
  }
`;

const MenuButton = styled(GrMenu)`
  ${MenuButtonsCss}
`;

const CloseButton = styled(GrClose)`
  ${MenuButtonsCss}
`;

const Menu = () => {
  //State
  const [click, setClick] = useState(false);

  const navLinksArr = [
    { name: "Strona główna", href: "/" },
    { name: "Oferta", href: "/oferta" },
    { name: "Samochody", href: "/samochody" },
    { name: "Kontakt", href: "/kontakt" },
  ];
  const handleMenuClick = () => {
    setClick((click) => !click);
  };

  const handleAwayClick = () => {
    click && setClick(false);
  };

  return (
    <>
      <Wrapper onClick={handleAwayClick} state={click}>
        <Nav state={click}>
          {navLinksArr.map((navLink, id) => (
            <A to={navLink.href} key={id}>
              {navLink.name}
            </A>
          ))}
        </Nav>
        <TransparentBg state={click}></TransparentBg>
        {click ? (
          <CloseButton onClick={handleMenuClick} />
        ) : (
          <MenuButton onClick={handleMenuClick} />
        )}
      </Wrapper>
    </>
  );
};

export default Menu;
