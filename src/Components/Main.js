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

const Content = styled.p`
  padding: 5% 0;
  color: rgb(30, 30, 30);
  font-size: 2rem;
`;

const Main = () => {
  return (
    <>
      <Slider />
      <MainWrapper>
        <Header>Witamy na stronie DBS Auto!</Header>
        <Content>Firma DBS świadczy usługi w zakresie blablablablabla</Content>
        <Content>Nasza firma powstała w roku blablablablabla</Content>
        <Content>Zapraszamy do współpracy!</Content>
      </MainWrapper>
    </>
  );
};

export default Main;
