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
        <div style={{ display: "block", position: "sticky", top: "5.5rem" }}>
          <NewsLetter />
          <Community />
          <Footer />
        </div>
      </RightColumnWrapper>
    </ThemeProvider>
  );
};

const RightColumnWrapper = styled.div`
  @media ${({ theme }) => theme.devices.tablet} {
    display: none;
  }
`;

export default RightColumn;
