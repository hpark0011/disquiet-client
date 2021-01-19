import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

const NewsLetter = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <p>디스콰이엇 뉴스레터</p>
        <p>매일 새로운 프로덕트 트렌드를 이메일 뉴스레터로 받아보세요 📩</p>
        <form action="">
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    </ThemeProvider>
  );
};

export default NewsLetter;
