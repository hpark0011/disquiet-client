import { Container, Section } from "../GlobalStyles";
import styled from "styled-components";
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   background-color: gray;
// `;

const PageContainer = ({ children }) => {
  return (
    <>
      <Section>
        <Container>{children}</Container>
      </Section>
    </>
  );
};



export default PageContainer;
