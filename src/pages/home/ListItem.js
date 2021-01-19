import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { productsData } from "../../data";
import Product from "./Product";

const ListItem = () => {
  const products = productsData;
  return (
    <>
      <ThemeProvider theme={theme}>
        {products.map((product) => {
          const {
            id,
            userName,
            productTitle,
            desc,
            upvote,
            category,
            comment,
            tnImage,
            avatarImage,
          } = product;
          return (
            <ListItemWrapper key={id}>
              <AvatarWrapper>
                <Avatar avatarImage={avatarImage} />
              </AvatarWrapper>
              <Product product={product} />
            </ListItemWrapper>
          );
        })}
      </ThemeProvider>
    </>
  );
};

const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
`;

const Avatar = styled.div`
  display: block;
  background-color: #e0e0e0;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export default ListItem;