import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import commentIcn from "../../assets/ic-comment.svg";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
const Product = ({ product }) => {
  const [click, setClick] = useState(false);

  const upvoteButtonClicked = () => {
    setClick(!click);
  };

  const {
    userName,
    productTitle,
    desc,
    comment,
    upvote,
    tnImage,
    category,
  } = product;
  return (
    <>
      <ThemeProvider theme={theme}>
        <ProductWrapper>
          <ProductHeader>@{userName}</ProductHeader>
          <ProductBody>
            <TnImage />
            <TextContent>
              <h3>{productTitle}</h3>
              <TextContentDescription>{desc}</TextContentDescription>
              <ProductFooter>
                <p>{category}</p>
                <CommentLink>
                  <img src={commentIcn} />
                  <p>댓글 {comment}개</p>
                </CommentLink>
              </ProductFooter>
            </TextContent>
            <UpvoteButtonWrapper>
              <UpvoteButton click={click} onClick={upvoteButtonClicked}>
                <ArrowUpwardIcon
                  click={click}
                  style={
                    click
                      ? { color: "#707070", width: "20px", height: "20px" }
                      : { color: "#6D55FF", width: "20px", height: "20px" }
                  }
                />
                <UpvoteCount click={click}>{upvote}</UpvoteCount>
              </UpvoteButton>
            </UpvoteButtonWrapper>
          </ProductBody>
        </ProductWrapper>
      </ThemeProvider>
    </>
  );
};

export default Product;

const ProductWrapper = styled.div`
  display: block;
  margin-bottom: 1.5rem;
  width: 100%;
`;

const ProductHeader = styled.div`
  display: block;
  color: ${({ theme }) => theme.colors.gray_4};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: none;
  margin-bottom: 1rem;
  line-height: 1em;
`;

const ProductBody = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.gray_1};
  padding: 1rem;
  border-radius: 0.75rem;
`;

const TnImage = styled.div`
  display: block;
  min-width: 80px;
  min-height: 80px;
  background-color: #fff;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1rem;
  width: 100%;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 500;
    line-height: 1em;
    margin: 0;
  }
`;

const TextContentDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray_4};
  line-height: 1.4em;
  margin: 0;
`;

const ProductFooter = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin: 0;
  p {
    margin-top: 0;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.gray_4};
  }
`;

const CommentLink = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  p {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0.25rem;
  }
`;

const UpvoteButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UpvoteButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ click }) => (click ? "#fff" : "#6D55FF")};
  background-color: #fff;
  border-radius: 3rem;
  cursor: pointer;
  outline: none;
  padding: 0.75rem 0.75rem 0.875rem 0.75rem;

  &:hover {
    background-color: #fafafa;
  }
`;

const UpvoteCount = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ click }) => (click ? "#707070" : "#6D55FF")};
`;
