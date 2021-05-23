import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5vh;
  background-color: rgb(30, 30, 30);
  overflow: hidden;
`;

const Content = styled.p`
  padding: 10px 0;
  color: rgb(220, 210, 220);
  font-size: 0.8rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Content>Created by Filip Sojecki</Content>
    </FooterWrapper>
  );
};

export default Footer;
