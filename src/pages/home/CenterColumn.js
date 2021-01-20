import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ListHeader from "./ListHeader";
import ListItem from "./ListItem";

const CenterColumn = ({ listItems }) => {
  return (
    <ThemeProvider theme={theme}>
      <CenterContainer>
        <ListHeader />
        <ListContainer>
          <List>
            <ListItem listItems={listItems}></ListItem>
          </List>
        </ListContainer>
      </CenterContainer>
    </ThemeProvider>
  );
};

const CenterContainer = styled.div`
  display: block;
`;

const ListContainer = styled.div`
  margin-top: 1.5rem;
  display: block;
`;

const List = styled.div`
  display: block;
`;

export default CenterColumn;
