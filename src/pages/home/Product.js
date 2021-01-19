import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

const Product = ({ product }) => {
  const { userName, productTitle, desc, comment, upvote, tnImage } = product;
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductWrapper>
          <ProductHeader>@{userName}</ProductHeader>
          <ProductBody>
            <TnImage />
            <TextContent>
              <h3>{productTitle}</h3>
              <p>{desc}</p>
              <div>footer</div>
            </TextContent>
            <UpvoteWrapper>upvote</UpvoteWrapper>
          </ProductBody>
        </ProductWrapper>
      </ThemeProvider>
    </>
  );
};

export default Product;

const ProductWrapper = styled.div`
  display: block;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const ProductHeader = styled.div`
  display: block;
  color: ${({ theme }) => theme.colors.gray_4};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: none;
  margin-bottom: 1rem;
  line-height: 1em;
`;

const ProductBody = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray_1};
  padding: 1rem;
  border-radius: 1rem;
`;

const TnImage = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 0.25rem;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  width: 100%;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 500;
    line-height: 1em;
    margin: 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.gray_4};
    line-height: 1.4em;
    margin: 0;
  }
`;

const UpvoteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
`;
