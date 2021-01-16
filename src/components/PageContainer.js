import { Container, Section } from "../GlobalStyles";
import styled from "styled-components";
// import { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   background-color: gray;
// `;

const PageContainer = ({ children }) => {
  return (
    <>
      <Section>{children}</Section>
    </>
  );
};

export default PageContainer;
