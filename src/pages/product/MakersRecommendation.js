import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const MakersRecommendation = () => {
  return (
    <ThemeProvider theme={theme}>
      <MakersRecommendationWrapper>
        <p>프로덕트 추천 이유</p>
        <MakersRecommendationText>
          <p>
            스티비는 개발자와 디자이너의 도움 없이 쉽게 이메일 뉴스레터를
            발송하고 구독자를 관리할 수 있는 솔루션을 제공하는 서비스입니다.
          </p>
        </MakersRecommendationText>
        <SiteLink>
          서비스 사용해 보러 가기
          <ArrowForwardIcon style={{ marginLeft: "0.25rem", width: "1rem" }} />
        </SiteLink>
      </MakersRecommendationWrapper>
    </ThemeProvider>
  );
};

const MakersRecommendationWrapper = styled.div`
  display: block;
  margin-top: 2rem;

  p {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
`;

const MakersRecommendationText = styled.div`
  padding-left: 0.75rem;
  border-left: 3px solid ${({ theme }) => theme.colors.gray_2};
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.6em;
    margin: 0;
    word-break: keep-all;
    font-weight: 400;
    padding-bottom: 0.25rem;
  }
`;

const SiteLink = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1.75rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem 0.5rem 1.25rem;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

export default MakersRecommendation;
