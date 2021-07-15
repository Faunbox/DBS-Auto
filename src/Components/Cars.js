import React, { lazy } from "react";
import styled from "styled-components";
import Progress from "../Components/Progress";
// import Card from "./Card";
import { WrappersStyle } from "../Theme/GlobalStyles";

import { useData } from "../context/DataContext";
import { Suspense } from "react";


const CardComponent = lazy(() => import('./Card'))

const CarsWrapper = styled.section`
  ${WrappersStyle}
`;

const H1 = styled.h1`
  font-size: 3rem;
`;

const CardWrapper = styled.div`
  display: flex;
  /* flex-direction: row; */
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
  const { carsData } = useData();
  return (
    <CarsWrapper>
      <H1>Samochody w ofercie</H1>
      <CardWrapper>
      <Suspense fallback={<Progress />}>
        {carsData.map((car) => (
          <CardComponent key={car.id} car={car} />
        ))}
      </Suspense>
      </CardWrapper>
    </CarsWrapper>
  );
};

export default Cars;
