import React, { useState, useEffect } from "react";
import { Section, Container } from "../../GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { productsData } from "../../data";
import LeftColumn from "../home/LeftColumn";
import ProductDetailWrapper from "./ProductDetailWrapper";
import RightColumn from "../home/RightColumn";
import PageContainer from "../../components/PageContainer";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const [productDetails, setProductDetails] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const clickedProduct = productsData.find(
      (product) => product.id === parseInt(id)
    );
    setProductDetails(clickedProduct);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <MainContainer>
          <LeftColumn />
          <ProductDetailWrapper productDetails={productDetails} />
          <RightColumn />
        </MainContainer>
      </PageContainer>
    </ThemeProvider>
  );
}

const MainContainer = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 7fr 3fr;
  position: relative;
  z-index: 0;
  gap: 32px;

  @media ${({ theme }) => theme.devices.tablet} {
    grid-template-columns: 2fr 7fr;
  }
`;

export default ProductDetailPage;
