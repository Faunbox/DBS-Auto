import React from "react";

import { CircularProgress } from "@material-ui/core";

import styled from "styled-components";

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 10%;
`;

const Progress = () => {
  return (
    <ProgressWrapper>
      <CircularProgress />
    </ProgressWrapper>
  );
};

export default Progress;
