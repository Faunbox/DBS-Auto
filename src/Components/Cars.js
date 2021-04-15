import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { WrappersStyle } from "../Theme/GlobalStyles";

const CarsWrapper = styled.section`
  ${WrappersStyle}
`;

const H1 = styled.h1`
  font-size: 3rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10% 0;
`;

const Cars = () => {
  return (
    <CarsWrapper>
      <H1>Samochody w ofercie</H1>
      <CardWrapper>
        <Card />
      </CardWrapper>
    </CarsWrapper>
  );
};

export default Cars;
