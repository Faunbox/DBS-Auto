import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const MainWrapper = styled.main`
  padding: 5% 10%;
  text-align: center;
`;

const Header = styled.h1`
  color: rgb(30, 30, 30);
  font-size: 4rem;
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
