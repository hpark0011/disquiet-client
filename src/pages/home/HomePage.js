import React, { useState } from "react";
import PageContainer from "../../components/PageContainer";
import { Container } from "../../GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import LeftColumn from "./LeftColumn";
import CenterColumn from "./CenterColumn";
import RightColumn from "./RightColumn";
import { productsData } from "../../data";

function HomePage() {
  const [listItems, setListItems] = useState(productsData);

  const filterItems = (category) => {
    if (category === "🌕 전체") {
      return setListItems(productsData);
    }

    const newListItems = productsData.filter((item) => {
      return item.category === category;
    });

    setListItems(newListItems);
  };

  return (
    <ThemeProvider theme={theme}>
      <PageContainer >
        <MainContainer>
          <LeftColumn filterItems={filterItems} />
          <CenterColumn listItems={listItems} />
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

export default HomePage;
