import PageContainer from "../../components/PageContainer";
import { Container } from "../../GlobalStyles";
import styled from "styled-components";
import LeftColumn from "./LeftColumn";
import CenterColumn from "./CenterColumn";
import RightColumn from "./RightColumn";

function HomePage() {
  return (
    <PageContainer>
      <MainContainer>
        <LeftColumn />
        <CenterColumn />
        <RightColumn />
      </MainContainer>
    </PageContainer>
  );
}

const MainContainer = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 7fr 3fr;
  position: relative;
  z-index: 0;
  gap: 32px;
`;

export default HomePage;
