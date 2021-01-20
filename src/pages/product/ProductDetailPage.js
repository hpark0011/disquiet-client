import { Section, Container } from "../../GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";

function ProductDetailPage() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Container>Product deets</Container>
      </div>
    </ThemeProvider>
  );
}

export default ProductDetailPage;
