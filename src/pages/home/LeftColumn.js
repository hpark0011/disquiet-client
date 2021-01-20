import React, { useState } from "react";
import { categoriesData } from "../../data";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import { NavLink } from "react-router-dom";

const LeftColumn = ({ filterItems }) => {
  const categories = categoriesData;
  return (
    <ThemeProvider theme={theme}>
      <LeftContainer>
        <div style={{ display: "block", position: "sticky", top: "5.5rem" }}>
          <p>TOPIC</p>
          <CategoriesWrapper>
            {categories.map((category) => {
              const { id, name } = category;
              return (
                <div key={id}>
                  <CategoryBtn
                    onClick={() => {
                      filterItems(name);
                    }}
                  >
                    {name}
                  </CategoryBtn>
                </div>
              );
            })}
          </CategoriesWrapper>
          {/* <Divider /> */}
        </div>
      </LeftContainer>
    </ThemeProvider>
  );
};

const CategoriesWrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 400;
  color: black;
`;

const activeClassName = "nav-item-active";

const CategoryBtn = styled.button`
  display: block;
  color: ${({ theme }) => theme.colors.gray_4};
  padding: 0.25rem;
  padding-left: 0.5rem;
  border: none;
  background-color: transparent;
  width: 100%;
  text-align: left;
  outline: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_1};
    border-radius: 0.75rem;
  }

  &.${activeClassName} {
    background-color: ${({ theme }) => theme.colors.gray_1};
    border-radius: 0.75rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  color: ${({ theme }) => theme.colors.gray_4};
  text-decoration: none;
  padding: 0.25rem;
  padding-left: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray_1};
    border-radius: 0.75rem;
  }

  &.${activeClassName} {
    background-color: ${({ theme }) => theme.colors.gray_1};
    border-radius: 0.75rem;
  }
`;

const LeftContainer = styled.div`
  margin-bottom: 2rem;

  p {
    display: block;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    line-height: 1em;
    margin-top: 0;
    margin-left: 0.5rem;
    margin-bottom: 0.75rem;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: auto;
  background-color: ${({ theme }) => theme.colors.gray_2};
  margin: 1rem 0;
`;

export default LeftColumn;
