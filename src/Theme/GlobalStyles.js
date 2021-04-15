import { createGlobalStyle, css } from "styled-components";

export const WrappersStyle = css`
  padding: 5% 10%;
  min-height: 80vh;
  font-size: 2.5rem;
  color: rgb(30, 30, 30);
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 10px;
  overflow-x: hidden;

@media (min-width: 400px) {
  font-size: 13px;
}

}
`;
