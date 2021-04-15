import React from "react";
import styled from "styled-components";
import { WrappersStyle } from "../Theme/GlobalStyles";

const SectionWrapper = styled.section`
  ${WrappersStyle}
`;

const HeaderH2 = styled.h2`
  color: rgb(30, 30, 30);
  font-size: 2.5rem;
  padding: 5% 0 0 0;
`;

const HeaderH3 = styled.h3`
  color: rgb(30, 30, 30);
  font-size: 2.2rem;
  padding: 10% 0;
`;

const DiscWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.p`
  color: rgb(30, 30, 30);
  font-size: 1.5rem;
  text-align: left;
`;

const Offert = () => {
  return (
    <SectionWrapper>
      <HeaderH2>Oferta</HeaderH2>
      <DiscWrapper>
        <HeaderH3>Diagnostyka komputerowa</HeaderH3>
        <Content>
          Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki
          opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis
          Krótki opis Krótki opis Krótki opis
        </Content>
        <HeaderH3>Mechanika samochodowa</HeaderH3>
        <Content>
          Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki
          opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis
          Krótki opis Krótki opis Krótki opis
        </Content>
        <HeaderH3>Coś jeszcze</HeaderH3>
        <Content>
          Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki
          opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis
          Krótki opis Krótki opis Krótki opis
        </Content>
      </DiscWrapper>
    </SectionWrapper>
  );
};

export default Offert;
