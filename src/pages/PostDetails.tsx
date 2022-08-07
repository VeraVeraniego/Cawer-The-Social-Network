import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Comment } from "../components/Comment";
import { PostHeaderAndAuthorInfo } from "../components/PostHeaderAndAuthorInfo";
import { IComment } from "../interfaces/IComment";
import { GlobalStyle } from "../theme/global-styles";
import { getPostComments } from "../utils/api";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const PostsAndCommentsContainer = styled.article`
  margin: 97px 193px 97px 596px;
`;

const CommentsContainer = styled.div`
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export function PostDetails() {
  const [comments, setComments] = useState<Array<IComment>>();
  const { id } = useParams();
  useEffect(() => {
    async function getData() {
      const commentData = await getPostComments(id);
      setComments(commentData.data);
    }
    getData();
  }, [id]);

  return (
    <PageContainer>
      <GlobalStyle />
      <PostsAndCommentsContainer>
        <PostHeaderAndAuthorInfo />
        <CommentsContainer>
          {comments?.map((ele) => {
            return (
              <Comment
                key={ele.id}
                name={ele.name}
                body={ele.body}
                email={ele.email}
              />
            );
          })}
        </CommentsContainer>
      </PostsAndCommentsContainer>
    </PageContainer>
  );
}
