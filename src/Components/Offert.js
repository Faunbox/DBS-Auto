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

const OffertWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 150%;
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
  height: auto;
  margin: 0 auto 5% auto;

  @media (min-width: 500px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 800px) {
    width: 65%;
  }

  @media (min-width: 1024px) {
    width: 1000px;
    height: auto;
  }
`;

const Ul = styled.ul`
  padding: 5px;
  list-style: none;
  text-align: left;
  color: inherit;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    padding: 15px 2%;
  }
`;

const Offert = () => {
  return (
    <SectionWrapper>
      <HeaderH2>Oferta</HeaderH2>
      <OffertWrapper>
        <HeaderH3>Diagnostyka komputerowa</HeaderH3>
        <SegmentWrapper>
          <ColumnWrapper>
            <Content>
              Firma DBS oferuje usługę diagnostyki komputerowej samochodów marki
              Mercedes - wszystkie modele do roku 2014. Diagnostyka wykonywana
              jest za pomocą oryginalnego urządzenia Mercedes-Benz Star
              Diagnosis (dokładnie takim jak w ASO Mercedes-Benz).
            </Content>
            <br />
            <Content>
              Możliwy dojazd po wcześniejszym uzgodnieniu - 1 PLN/km.
            </Content>
          </ColumnWrapper>
        </SegmentWrapper>

        <HeaderH3>Sprzedaż samochodów</HeaderH3>
        <SegmentWrapper>
          <ImageElement
            loading="lazy"
            src={Detailing}
            alt="Sprzedaż samochodów"
          />
          <ColumnWrapper>
            <Content>
              Wybór samochodu (zwłaszcza używanego) to skomplikowany, często
              emocjonalny proces. Nasza strona pomoże Ci w bezpieczny, wygodny i
              zrozumiały sposób wybrać samochód w sposób bezpieczny.
            </Content>
            <Content>
              Każdy oferowany przez nas samochód ma w pełni udokumentowaną
              historię i przeszedł dokładną inspekcję. Wszystkie egzemplarze
              posiadają ważne badania techniczne i są gotowe do drogi. Możesz je
              sprawdzić podczas jazdy próbnej.
            </Content>
          </ColumnWrapper>
        </SegmentWrapper>

        <HeaderH3>Auto kosmetyka</HeaderH3>
        <SegmentWrapper>
          <ImageElement loading="lazy" src={Detailing} alt="Detailing Żywiec" />
          <ColumnWrapper>
            <Content>
              Oferujemy kompleksowe czyszczenie i pielęgnację aut. Korzystamy z
              najwyższej jakości kosmetyków oraz przykładamy bardzo dużą
              staranność do każdego detalu. Oferujemy między innymi:
            </Content>
            <Ul>
              <li> - Mycie</li>
              <li>- Sprzątanie samochodu</li>
              <li>- Pranie tapicerki</li>
              <li>- Woskowanie</li>
              <li> - Korekta lakieru (polerowanie)</li>
            </Ul>
          </ColumnWrapper>
        </SegmentWrapper>
      </OffertWrapper>
    </SectionWrapper>
  );
};

export default Offert;
