import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

const Section = styled.section`
  display: block;
  padding-top: 2rem;
`;

const Container = styled.div`
  margin: auto;
  padding: 8px;
  width: auto;
  height: auto;
  max-width: 1120px;
  display: block;
`;

export { GlobalStyles, Container, Section };
