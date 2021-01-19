import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import commentIcn from "../../assets/ic-comment.svg";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
const Product = ({ product }) => {
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
            <UpvoteWrapper>
              <ArrowUpwardBorder>
                <ArrowUpwardIcon
                  style={{ color: "#8e8e8e", width: "20px", height: "20px" }}
                />
              </ArrowUpwardBorder>
              <UpvoteCount>{upvote}</UpvoteCount>
            </UpvoteWrapper>
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

const UpvoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
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

const ArrowUpwardBorder = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.gray_2};
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const UpvoteCount = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray_4};
`;
