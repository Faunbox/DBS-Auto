import React from "react";
import styled, { css } from "styled-components";

import { GrMail, GrPhone, GrHome } from "react-icons/gr";
// import { IoCarSport } from "react-icons/io5";

import { WrappersStyle } from "../Theme/GlobalStyles";
import Map from "./Map";

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${WrappersStyle}
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  flex-wrap: wrap;
`;

const iconCss = css`
  font-size: 2.1rem;
  cursor: pointer;
  padding-right: 5px;
`;

const Anchor = styled.a`
  font-size: 2.1rem;
  padding: 10px;
  color: rgb(30, 30, 30);
  text-decoration: none;
`;

//Icons
const MailIcon = styled(GrMail)`
  ${iconCss}
`;

const PhoneIcon = styled(GrPhone)`
  ${iconCss}
`;

const HomeIcon = styled(GrHome)`
  ${iconCss}
`;

// const CarIcon = styled(IoCarSport)`
//   ${iconCss}
// `;

const Contact = () => {
  return (
    <ContactWrapper>
      <IconWrapper>
        {/* <Map /> */}
        <Anchor href="mailto:arcydemon@poczta.onet.pl">
          <MailIcon />
          kontakt@dbs-auto.pl
        </Anchor>
        <Anchor href="tel:608-674-158">
          <PhoneIcon />
          608-674-158
        </Anchor>
        <Anchor href="https://goo.gl/maps/swr5hRY3UATkh1XCA">
          <HomeIcon />
          34-300 Żywiec ul. Łagodna 53
        </Anchor>
        {/* <Anchor>
          <CarIcon />
          Strona otomoto
        </Anchor> */}
      </IconWrapper>
    </ContactWrapper>
  );
};

export default Contact;
