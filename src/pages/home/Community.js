import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Router, { Link } from "react-router-dom";
import theme from "../../theme";

const Community = () => {
  return (
    <ThemeProvider theme={theme}>
      <CommunityWrapper>
        <CommunityHeader>
          <p>커뮤니티</p>
        </CommunityHeader>
        <SocialBtn>카카오톡 오픈 채팅방</SocialBtn>
        <SocialBtn>페이스북 그룹</SocialBtn>
        <SocialBtn>인스타그램</SocialBtn>
      </CommunityWrapper>
    </ThemeProvider>
  );
};

const CommunityWrapper = styled.div`
  display: block;
  margin-bottom: 2rem;
`;

const CommunityHeader = styled.div`
  display: flex;
  margin-top: 0;
  line-height: 1em;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_2};
  p {
    margin: 0;
  }
`;

const SocialBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.755rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_2};
  background-color: #fff;
  color: ${({ theme }) => theme.colors.gray_4};
  border-radius: 10rem;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: none;
  margin: 0.5rem 0;

  &:hover {
    opacity: 0.7;
  }
`;

export default Community;
