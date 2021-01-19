import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Router from "react-router-dom";
import theme from "../../theme";
import NewsLetter from "./NewsLetter";
import Community from "./Community";
import Footer from "./Footer";

const RightColumn = () => {
  return (
    <ThemeProvider theme={theme}>
      <RightColumnWrapper>
        <NewsLetter />
        <Community />
        <Footer />
      </RightColumnWrapper>
    </ThemeProvider>
  );
};

const RightColumnWrapper = styled.div`
  display: block;
`;

export default RightColumn;
