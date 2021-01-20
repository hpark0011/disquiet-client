import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

const ListHeader = () => {
  return (
    <ThemeProvider theme={theme}>
      <ListHeaderWrapper>
        <p>🌕 전체</p>
        <ListSortWrapper>
          <ListSortItem>인기</ListSortItem>
          <ListSortItemDivider />
          <ListSortItem>최신</ListSortItem>
        </ListSortWrapper>
      </ListHeaderWrapper>
    </ThemeProvider>
  );
};

const ListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 1rem;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray_2};

  p {
    margin: 0;
    line-height: 1em;
  }
`;

const ListSortWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListSortItem = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray_4};
  outline: none;
  padding: 0 0.5rem;

  &:hover {
    opacity: 0.7;
  }
`;

const ListSortItemDivider = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_2};
  height: 0.75rem;
  width: 1px;
`;

export default ListHeader;
