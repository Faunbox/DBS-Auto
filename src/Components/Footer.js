import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  width: 100%;
  height: auto;
  background-color: rgb(30, 30, 30);
  text-align: center;
`;

const Content = styled.p`
  padding: 10% 0;
  color: rgb(220, 210, 220);
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Content>Created by Filip Sojecki</Content>
    </FooterWrapper>
  );
};

export default Footer;
