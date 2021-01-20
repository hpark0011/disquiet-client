import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

const NewsLetter = () => {
  return (
    <ThemeProvider theme={theme}>
      <NewsLetterWrapper>
        <NewsLetterHeader>디스콰이엇 뉴스레터</NewsLetterHeader>
        <NewsLetterDescription>
          매일 새로운 프로덕트 트렌드를 이메일 뉴스레터로 받아보세요 📩
        </NewsLetterDescription>
        <NewsLetterFormWrapper action="">
          <NewsLetterFormField type="text" placeholder="이메일" />
          <NewsLetterSubmitBtn type="submit" value="뉴스레터 받기" />
        </NewsLetterFormWrapper>
      </NewsLetterWrapper>
    </ThemeProvider>
  );
};

const NewsLetterWrapper = styled.div`
  display: block;
  margin-bottom: 2rem;
`;

const NewsLetterHeader = styled.div`
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

const NewsLetterDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray_4};
  margin-bottom: 1rem;
  word-break: keep-all;
`;

const NewsLetterFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const NewsLetterFormField = styled.input`
  display: block;
  background-color: ${({ theme }) => theme.colors.gray_1};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 0.75rem 0.875rem;
  margin-bottom: 0.75rem;
  border-radius: 3rem;
`;

const NewsLetterSubmitBtn = styled.input`
  display: block;
  padding: 0.755rem;
  border: solid 1px ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border-radius: 10rem;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &:hover {
    opacity: 0.7;
  }
`;

export default NewsLetter;
