import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Router, { Link } from "react-router-dom";
import theme from "../../theme";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <FooterWrapper>
        <SiteMapWrapper>
          <FooterLink>홈</FooterLink>
          <FooterDivider>•</FooterDivider>
          <FooterLink>블로그</FooterLink>
          <FooterDivider>•</FooterDivider>
          <FooterLink>커뮤니티</FooterLink>
          <FooterDivider>•</FooterDivider>
          <FooterLink>공유하기</FooterLink>
          <FooterDivider>•</FooterDivider>
          <FooterLink>페이스북</FooterLink>
          <FooterDivider>•</FooterDivider>
          <FooterLink>인스타그램</FooterLink>
          <FooterDivider>•</FooterDivider>
          <FooterLink>카카오톡</FooterLink>
        </SiteMapWrapper>
        <CompanyInfo>© 2021 Disquiet</CompanyInfo>
      </FooterWrapper>
    </ThemeProvider>
  );
};

const FooterWrapper = styled.div`
  display: block;
  border-top: 1px solid ${({ theme }) => theme.colors.gray_2};
  padding-top: 0.75rem;
`;

const SiteMapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const FooterLink = styled(Link)`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray_3};
  margin: 0.125rem 0.25rem;

  &:hover {
    opacity: 0.7;
  }
`;

const FooterDivider = styled.p`
  display: inline-block;
  font-size: 0.5rem;
  line-height: 1em;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray_3};
  margin: 0 0.125rem;
`;

const CompanyInfo = styled.p`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.gray_3};
  margin: 0.5rem 0.25rem;
`;

export default Footer;
