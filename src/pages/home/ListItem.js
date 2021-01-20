import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import Product from "./Product";

const ListItem = ({ listItems }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {listItems.map((product) => {
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
                <Avatar
                  style={{
                    backgroundImage: "url(" + avatarImage + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
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
