import React, { useState } from "react";
import styled from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";
import { GrMenu } from "react-icons/gr";

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

const CompName = styled.p`
  display: flex;
  justify-self: flex-start;
  font-size: 2.5rem;
`;

const ToggleMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled(GrMenu)`
  font-size: 3.5rem;
  padding-left: 10%;

  path {
    stroke: rgb(30, 30, 30);
  }
`;

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <Nav>
      <MenuWrapper>
        <CompName>DBS Auto</CompName>
        <ToggleMenuWrapper>
          {/* <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={"6rem"}
          /> */}
          <Menu />
        </ToggleMenuWrapper>
      </MenuWrapper>
    </Nav>
  );
};

export default NavBar;
