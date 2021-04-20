import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SliderImagesArr } from "../Data/Data";

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

const arrowCss = css`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 3rem;
  color: black;
  z-index: 10;
  cursor: pointer;
  transition: 1s ease;
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

const ImagesData = SliderImagesArr;

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const lenght = ImagesData.length - 1;
  const time = 5000;

  const nextSlide = () => setCurrent(current === lenght ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? lenght : current - 1);

  useEffect(() => {
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
        {ImagesData.map((data, index) => {
          const imageProp = index === current ? 1 : 0;
          return (
            <ImageWrapper opacity={imageProp} key={index}>
              {index === current && (
                <ImageElement src={data.image} alt="test" key={index} />
              )}
            </ImageWrapper>
          );
        })}
      </Wrapper>
    </>
  );
};

export default Slider;
