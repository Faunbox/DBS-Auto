import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { WrapperMenu } from "../Theme/GlobalStyles";

import { navLinksArr } from "../Data/Data";

const Wrapper = styled.div`
  ${WrapperMenu}
`;

const Anchor = styled(Link)`
  margin: 0 2%;
  color: rgb(30, 30, 30);
  text-decoration: none;

  @media (min-width: 850px) {
    margin: 0 3.5%;
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      {navLinksArr.map((element) => {
        return <Anchor to={element.href}>{element.name}</Anchor>;
      })}
    </Wrapper>
  );
};

export default Menu;
