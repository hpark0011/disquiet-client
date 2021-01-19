import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Router from "react-router-dom";
import theme from "../../theme";

const Community = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <p>커뮤니티</p>
        <button>카카오톡 오픈 채팅방</button>
        <button>페이스북 그룹</button>
        <button>인스타그램</button>
      </div>
    </ThemeProvider>
  ); 
};

export default Community;
