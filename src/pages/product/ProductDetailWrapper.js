import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ProductDetailBody from "./ProductDetailBody";
import ProductDetailHeader from "./ProductDetailHeader";
import Comment from "./Comment";

const ProductDetailWrapper = ({ productDetails }) => {
  return (
    <ThemeProvider theme={theme}>
      <ProductContainer>
        <ProductDetailHeader />
        <ProductDetailContainer>
          <ProductDetailBody productDetails={productDetails} />
        </ProductDetailContainer>
        <Comment productDetails={productDetails} />
      </ProductContainer>
    </ThemeProvider>
  );
};

const ProductContainer = styled.div`
  display: block;
`;

const ProductDetailContainer = styled.div`
  margin-top: 1.5rem;
  display: block;
`;

export default ProductDetailWrapper;
