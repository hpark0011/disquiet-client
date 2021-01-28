import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ProductDetailBodyContent from "./ProductDetailBodyContent";

const ProductDetailBody = ({ productDetails }) => {
  return (
    <ThemeProvider theme={theme}>
      <ProductDetailBodyWrapper>
        <AvatarWrapper>
          <Avatar
            style={{
              backgroundImage: "url(" + productDetails.avatarImage + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AvatarWrapper>
        <ProductDetailBodyContent productDetails={productDetails} />
      </ProductDetailBodyWrapper>
    </ThemeProvider>
  );
};

const ProductDetailBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.75rem;
`;

const Avatar = styled.div`
  display: block;
  background-color: #e0e0e0;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

const Body = styled.div`
  display: block;
`;

export default ProductDetailBody;
