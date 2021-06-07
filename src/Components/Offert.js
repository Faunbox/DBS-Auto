import React from "react";
import styled from "styled-components";
import { WrappersStyle } from "../Theme/GlobalStyles";

//images
import Detailing from "../Images/detailing.jpg";
import S from "../Images/S.jpg";

const SectionWrapper = styled.section`
  ${WrappersStyle}
`;

const HeaderH2 = styled.h2`
  color: rgb(30, 30, 30);
  font-size: 3rem;
  padding: 5% 0 2% 0;
`;

const DiscWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SegmentWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const HeaderH3 = styled.h3`
  color: rgb(30, 30, 30);
  font-size: 2.2rem;
  padding: 5% 0;
`;

const Content = styled.p`
  color: rgb(30, 30, 30);
  font-size: 1.5rem;
  text-align: left;

  @media (min-width: 1024px) {
    padding: 0 2%;
  }
`;

const ImageElement = styled.img`
  width: 100%;
  height: 100%;
  padding: 0 0 5% 0;
  margin: 0 auto;

  @media (min-width: 500px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 800px) {
    width: 65%;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const Offert = () => {
  return (
    <SectionWrapper>
      <HeaderH2>Oferta</HeaderH2>
      <DiscWrapper>
        <HeaderH3>Diagnostyka komputerowa</HeaderH3>
        <SegmentWrapper>
          <Content>
            Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki
            opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis
            Krótki opis Krótki opis Krótki opis
          </Content>
        </SegmentWrapper>

        <HeaderH3>Sprzedaż samochodów</HeaderH3>
        <SegmentWrapper>
          <ImageElement src={S} alt="Samochody używane" />
          <Content>
            Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki
            opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis
            Krótki opis Krótki opis Krótki opis
          </Content>
        </SegmentWrapper>
        <HeaderH3>Detailing</HeaderH3>
        <SegmentWrapper>
          <ImageElement loading="lazy" src={Detailing} alt="Detailing Żywiec" />
          <Content>
            Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki
            opis Krótki opis Krótki opis Krótki opis Krótki opis Krótki opis
            Krótki opis Krótki opis Krótki opis
          </Content>
        </SegmentWrapper>
      </DiscWrapper>
    </SectionWrapper>
  );
};

export default Offert;
