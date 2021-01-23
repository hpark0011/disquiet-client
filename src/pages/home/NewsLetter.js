import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";

const NewsLetter = () => {
  return (
    <ThemeProvider theme={theme}>
      <NewsLetterWrapper>
        <NewsLetterHeader>디스콰이엇 뉴스레터</NewsLetterHeader>
        <NewsLetterDescription>
          매일 새로운 프로덕트 트렌드를 이메일 뉴스레터로 받아보세요 📩
        </NewsLetterDescription>
        <NewsLetterFormWrapper action="">
          <NewsLetterFormField type="text" placeholder="이메일 주소" />
          <NewsLetterSubmitBtn>
            <ArrowUpwardRoundedIcon
              style={{
                width: "1.125rem",
                height: "1.125rem",
                color: "#6D55FF",
              }}
            />
          </NewsLetterSubmitBtn>
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  background-color: ${({ theme }) => theme.colors.gray_1};
  padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  border-radius: 2rem;
`;

const NewsLetterFormField = styled.input`
  display: block;
  background-color: ${({ theme }) => theme.colors.gray_1};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border-radius: 3rem;
  outline: none;
`;

const NewsLetterSubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-left: 0.5rem;
  cursor: pointer;
  outline: none;
  line-height: 1em;
  flex-shrink: 1;
  width: 1.875rem;
  height: 1.875rem;

  &:hover {
    opacity: 0.7;
  }
`;

export default NewsLetter;
