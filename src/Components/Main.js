import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import { WrappersStyle } from "../Theme/GlobalStyles";

const MainWrapper = styled.main`
  ${WrappersStyle}
`;

const Header = styled.h1`
  color: rgb(30, 30, 30);
  font-size: 3.5rem;
`;

export const Content = styled.p`
  padding: 5% 0;
  color: rgb(30, 30, 30);
  font-size: 2rem;
`;

const Ul = styled.ul`
  padding: 15px 0;
  list-style: none;
  text-align: center;
  color: inherit;
  font-size: 2rem;
`;

const Li = styled.li``;

const Main = () => {
  return (
    <>
      <Slider />
      <MainWrapper>
        <Header>Witamy na stronie DBS Auto!</Header>
        <Content>
          Firma DBS zrodziła się z pasji do samochodów i świadczy usługi w
          zakresie:
        </Content>
        <Ul>
          <Li>- Diagnostyki komputerowej</Li>
          <Li> - Auto kosmetyki</Li>
          <Li> - Sprzedaży samochodów używanych</Li>{" "}
        </Ul>
        <Content>Zapraszamy do współpracy!</Content>
      </MainWrapper>
    </>
  );
};

export default Main;
