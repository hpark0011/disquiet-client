import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import { commentsData } from "../../data";

const Comment = ({ productDetails }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(commentsData);

  const [click, setClick] = useState(true);

  const toggleButton = () => {
    setClick(!click);
  };

  const onInputChange = (event) => {
    setComment(event.target.value);
  };

  const onSubmitComment = () => {
    const newComments = comments.push(comment);
    setComments(newComments);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <CommentWrapper>
          <CommentHeader>
            <p>서비스에 대해서 의견을 공유해요~ 🧐</p>
          </CommentHeader>
          <CommentInputWrapper>
            <AvatarWrapper>
              <Avatar
                style={{
                  backgroundImage: "url(" + productDetails.avatarImage + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </AvatarWrapper>
            <div className="commentInput">
              <CommentInput
                type="text"
                placeholder="이 프로덕트에 대해서 어떻게 생각하시나요?"
                onChange={onInputChange}
              />
              <CommentInputBtn onClick={onSubmitComment}>
                <ArrowUpwardRoundedIcon
                  style={{ width: "1.125rem", height: "1.125rem" }}
                />
              </CommentInputBtn>
            </div>
          </CommentInputWrapper>
          <CommentThreadWrapper>
            <ShowCommentBtn>
              <div className="middleLine"></div>
              <button onClick={toggleButton} className="btn">
                댓글 {productDetails.comment}개 {click ? "닫기" : "펼쳐보기"}
              </button>
            </ShowCommentBtn>
            {comments.map((commentItem) => {
              const {
                id,
                userName,
                comment,
                avatarImage,
                timeStamp,
              } = commentItem;
              return (
                <CommentThread key={id} click={click}>
                  <AvatarWrapper>
                    <Avatar
                      small
                      style={{
                        backgroundImage: "url(" + avatarImage + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    />
                  </AvatarWrapper>
                  <CommentContentWrapper>
                    <CommentContentHeader>
                      <p className="id">@{userName}</p>
                      <p className="timeStamp">{timeStamp}</p>
                    </CommentContentHeader>
                    <p className="content">{comment}</p>
                  </CommentContentWrapper>
                </CommentThread>
              );
            })}
          </CommentThreadWrapper>
        </CommentWrapper>
      </div>
    </ThemeProvider>
  );
};

const CommentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  p {
    margin: 0;
  }
`;

const CommentWrapper = styled.div`
  display: block;
`;

const CommentInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .commentInput {
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray_2};
    border-radius: 2rem;
    padding: 0.25rem 0.25rem 0.25rem 0.75rem;
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0.5rem;
`;

const Avatar = styled.div`
  display: block;
  background-color: #e0e0e0;
  border-radius: 50%;
  height: ${({ small }) => (small ? "2rem" : "2.5rem")};
  width: ${({ small }) => (small ? "2rem" : "2.5rem")};
`;

const CommentInput = styled.input`
  flex-grow: 1;
  outline: none;
  width: auto;
  border: none;
  background-color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1em;
`;

const CommentInputBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #fff;
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  outline: none;
  line-height: 1em;
  flex-shrink: 1;
  width: 1.875rem;
  height: 1.875rem;

  &:hover {
    opacity: 0.7;
  }
`;

const CommentThreadWrapper = styled.div`
  display: block;
  margin-top: 2.5rem;
`;

const ShowCommentBtn = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;

  .middleLine {
    background-color: ${({ theme }) => theme.colors.gray_2};
    height: 1px;
    width: 100%;
    position: relative;
    z-index: 9;
  }

  .btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    z-index: 10;
    padding: 0.5rem 0.75rem;
    line-height: 1em;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    background-color: #fff;
    border: 1px solid ${({ theme }) => theme.colors.gray_2};
    border-radius: 2rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray_3};
    outline: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_1};
    }
  }
`;

const CommentThread = styled.div`
  display: ${({ click }) => (click ? "flex" : "none")};
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

const CommentContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .content {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin: 0;
    line-height: 1.3rem;
    padding: 0.375rem 0.875rem;
    border-radius: 1.125rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    word-break: keep-all;
  }
`;

const CommentContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1em;
  margin-bottom: 0.75rem;
  .id {
    margin: 0;
    margin-right: 0.5rem;
    padding-left: 0.125rem;
  }

  .timeStamp {
    margin: 0;
    color: ${({ theme }) => theme.colors.gray_4};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
export default Comment;
