import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import W211 from "../Images/w211.jpg";
import Oil from "../Images/AdobeStock_296204883-min.jpeg";
import Breakes from "../Images/IMG_20200903_091034(1)-min.jpg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const ImageWrapper = styled.div`
  opacity: ${(prop) => prop.opacity};
  transition: 1s ease;
  text-align: center;
`;

const ImageElement = styled.img`
  width: 100%;

  @media (min-width: 760px) {
    width: 80%;
    max-height: 500px;
    object-fit: cover;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(prop) => prop.opacity};
  text-align: center;
  font-size: 1.4rem;
  color: rgb(240, 220, 220);
  text-transform: capitalize;
  text-shadow: 3px 2px 2px black;
`;

const TextElement = styled.h1`
  width: 100%;
`;

const arrowCss = css`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  transition: 1s ease;
  filter: drop-shadow(0px 0px 1px white);
  &:hover {
    transform: translate(0, -50%) scale(1.3);
  }
`;

const LeftArrow = styled(IoIosArrowBack)`
  ${arrowCss}
  left: 2%;
`;

const RightArrow = styled(IoIosArrowForward)`
  ${arrowCss}
  right: 2%;
`;

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const sliderImagesArr = [
    { name: "W211", image: W211 },
    { name: "Wymiana oleju", image: Oil },
    { name: "Diagnostyka komputerowa", image: Breakes },
  ];
  const lenght = sliderImagesArr.length - 1;
  const time = 5000;

  const h1Text = [
    "Sprzedaż samochodów",
    "Auto kosmetyka",
    "Diagnostyka komputerowa",
  ];

  const nextSlide = () => setCurrent(current === lenght ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? lenght : current - 1);

  useEffect(() => {
    sliderImagesArr.forEach((image) => (new Image().src = image.image));
    const interval = setInterval(() => {
      setCurrent(current === lenght ? 0 : current + 1);
    }, time);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Wrapper>
        <RightArrow onClick={nextSlide} />
        <LeftArrow onClick={prevSlide} />
        {sliderImagesArr.map((data, index) => {
          const imageProp = index === current ? 1 : 0;
          return (
            <ImageWrapper opacity={imageProp} key={data.name}>
              {index === current && (
                <ImageElement
                  loading="lazy"
                  src={data.image}
                  alt="test"
                  key={index}
                />
              )}
            </ImageWrapper>
          );
        })}
        {h1Text.map((data, index) => {
          const textProp = index === current ? 1 : 0;
          return (
            <TextWrapper opacity={textProp} key={data}>
              {index === current && (
                <TextElement key={data + index}>{data}</TextElement>
              )}
            </TextWrapper>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Slider;
