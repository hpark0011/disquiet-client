import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

function ProductUploadPage() {
  const [text, setText] = useState("");

  const handleSubmit = () => {};

  return (
    <Section>
      <ThemeProvider theme={theme}>
        <Container>
          <p>프로덕트 공유하기</p>
          <FormWrapper onSubmit={handleSubmit}>
            <FormLabel type="label">
              링크<Span>*</Span>
            </FormLabel>
            <FormInput
              type="text"
              placeholder="URL (예시 - https://www.disquiet.tech)"
            />
            <FormLabel type="label">
              프로덕트 이름<Span>*</Span>
            </FormLabel>
            <FormInput type="text" placeholder="예시 - 디스콰이엇" />
            <FormLabel type="label">
              프로덕트에 대한 간단한 설명<Span>*</Span>
            </FormLabel>
            <FormInput
              type="text"
              placeholder="예시 - IT프로덕트 디스커버리 사이트"
            />
            <FormLabel type="label">
              카테고리<Span>*</Span>
            </FormLabel>
            <FormInput type="text" />
            <FormLabel type="label" placeholder="">
              메이커<Span>*</Span>
            </FormLabel>
            <FormInput type="text" />
            <FormLabel type="label" placeholder="">
              추천이유<Span>*</Span>
            </FormLabel>
            <TextArea type="textarea" />
            <FormSubmitBtn type="submit" value="프로덕트 올리기" />
          </FormWrapper>
        </Container>
      </ThemeProvider>
    </Section>
  );
}

const Section = styled.div`
  display: block;
`;

const Container = styled.div`
  display: block;
  margin: auto;
  padding: 0.5rem;
  width: auto;
  height: auto;
  max-width: 1120px;
  display: block;

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 400;
    margin-bottom: 1.25rem;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 2rem 1.5rem;
  background-color: white;
  width: 37.5rem;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.gray_2};
`;

const FormLabel = styled.form`
  display: block;
  width: 100%;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray_4};
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  display: flex;
  width: 98%;
  background-color: ${({ theme }) => theme.colors.gray_1};
  border: 1px solid ${({ theme }) => theme.colors.gray_1};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  padding: 0.5rem 0.75rem;
  margin-bottom: 1.25rem;
  outline: none;
`;

const TextArea = styled.textarea`
  display: flex;
  width: 98%;
  background-color: ${({ theme }) => theme.colors.gray_1};
  border: 1px solid ${({ theme }) => theme.colors.gray_1};
  border-radius: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  padding: 0.75rem 0.875rem;
  margin-bottom: 1rem;
  height: 4rem;
  resize: none;
  outline: none;
`;

const FormSubmitBtn = styled.input`
  display: block;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  color: #fff;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Span = styled.span`
  color: #ff5c00;
`;
export default ProductUploadPage;
