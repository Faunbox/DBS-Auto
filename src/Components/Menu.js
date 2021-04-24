import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { WrapperMenu } from "../Theme/GlobalStyles";

import { navLinksArr } from "../Data/Data";

const Wrapper = styled.div`
  ${WrapperMenu};
  overflow: hidden;
`;

const Anchor = styled(Link)`
  margin: 0 2%;
  color: rgb(30, 30, 30);
  text-decoration: none;
  transition: 1s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 850px) {
    margin: 0 3.5%;
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      {navLinksArr.map((element, index) => {
        return (
          <Anchor to={element.href} key={index}>
            {element.name}
          </Anchor>
        );
      })}
    </Wrapper>
  );
};

export default Menu;
