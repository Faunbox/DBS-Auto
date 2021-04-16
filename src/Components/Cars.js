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
  flex-direction: row;
  max-width: 1400px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 5%;

  @media (min-width: 973px) {
    justify-content: space-between;
  }
`;

const Cars = () => {
  return (
    <CarsWrapper>
      <H1>Samochody w ofercie</H1>
      <CardWrapper>
        <Card />
        <Card />
        <Card />
      </CardWrapper>
    </CarsWrapper>
  );
};

export default Cars;
