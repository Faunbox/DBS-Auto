import React from "react";
import styled from "styled-components";
import { Content } from "../Components/Main";

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  transition: 0.4s ease;
`;

export default function Upload({ value }) {
  return (
    <Wrapper>
      <Content>Upload: {value}%</Content>
    </Wrapper>
  );
}
