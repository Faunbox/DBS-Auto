import { createGlobalStyle, css } from "styled-components";

export const WrappersStyle = css`
  padding: 5% 10%;
  min-height: 80vh;
  font-size: 2.5rem;
  color: rgb(30, 30, 30);
  text-align: center;
`;

export const WrapperMenu = css`
  display: none;
  justify-content: flex-end;
  align-items: center;
  width: 78%;
  font-size: 1.7rem;
  color: rgb(30, 30, 30);
  transition: 0.7s ease;

  @media (min-width: 610px) {
    display: flex;
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  font-family: 'Roboto Condensed', sans-serif;
  overflow-x: hidden;
}

html {
  font-size: 10px;
  max-width: 1400px;
}

@media (min-width: 420px) {
  html {
    font-size: 12px;
  }
}
  @media (min-width: 560px) {
  html {
    font-size: 14px;
  }
  }

  @media (min-width: 800px) {
  html {
    font-size: 16px;
  }
  }

  @media (min-width: 1023px) {
  html {
    font-size: 17px;
  }
  }

  @media (min-width: 1200px) {
  html {
    font-size: 18px;
  }
  }

  @media (min-width: 1600px) {
  html {
    font-size: 20px;
    margin: 0 auto;
  }
  }
`;
