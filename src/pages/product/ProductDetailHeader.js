import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

const ProductDetailHeader = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProductDetailHeaderWrapper>
        <BackLinkWrapper to="/">
          <ArrowBackIcon
            style={{ width: "1rem", height: "1.25rem", color: "#707070" }}
          />
          <p>뒤로가기</p>
        </BackLinkWrapper>
      </ProductDetailHeaderWrapper>
    </ThemeProvider>
  );
};

const ProductDetailHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 0.5rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray_2};
`;

const BackLinkWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-top: -0.25rem;
  padding: 0.25rem 0.5rem 0.25rem 0.375rem;

  p {
    color: ${({ theme }) => theme.colors.gray_4};
    line-height: 1em;
    margin: 0;
    margin-left: 0.25rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_1};
    border-radius: 2rem;
  }
`;

export default ProductDetailHeader;
