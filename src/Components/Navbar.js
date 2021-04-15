import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";

const Nav = styled.nav`
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: rgb(220, 210, 220);
  color: rgb(30, 30, 30);
  font-size: 2.5rem;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

const CompName = styled(Link)`
  display: flex;
  justify-self: flex-start;
  font-size: 2.5rem;
  color: rgb(30, 30, 30);
  text-decoration: none;
  cursor: pointer;
`;

const ToggleMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = () => {
  return (
    <Nav>
      <MenuWrapper>
        <CompName to="/">DBS Auto</CompName>
        <ToggleMenuWrapper>
          <Menu />
        </ToggleMenuWrapper>
      </MenuWrapper>
    </Nav>
  );
};

export default NavBar;
