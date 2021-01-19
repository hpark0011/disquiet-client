import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Router from "react-router-dom";
import theme from "../../theme";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <div>
          <a href="">홈</a>
          <a href="">블로그</a>
          <a href="">커뮤니티</a>
          <a href="">공유하기</a>
          <a href="">페이스북</a>
          <a href="">인스타그램</a>
          <a href="">카카오톡</a>
          <p>© 2021 Disquiet</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Footer;
