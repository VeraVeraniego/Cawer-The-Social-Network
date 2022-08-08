import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Comment } from "../components/Comment";
import { PostHeaderAndAuthorInfo } from "../components/PostHeaderAndAuthorInfo";
import { IComment } from "../interfaces/IComment";
import { GlobalStyle } from "../theme/global-styles";
import { getPostCommentsByPostId } from "../utils/api";
import { PHOTOS_API } from "../utils/constants";

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
  const { id } = useParams();
  const [comments, setComments] = useState<Array<IComment>>();

  useEffect(() => {
    async function getData() {
      const commentData = await getPostCommentsByPostId(id);
      setComments(commentData.data);
    }
    getData();
  }, [id]);

  return (
    <PageContainer>
      <GlobalStyle />
      <PostsAndCommentsContainer>
        <PostHeaderAndAuthorInfo
        // title={`${post.title} la tit`}
        // body={`${post.body} la desc`}
        // img={PHOTOS_API.PHOTOS(id)}
        ></PostHeaderAndAuthorInfo>
        <CommentsContainer>
          {comments?.map((ele) => {
            return (
              <Comment
                key={ele.id}
                name={ele.name}
                body={ele.body}
                email={ele.email}
                image={PHOTOS_API.USER_PHOTOS(ele.id)}
              />
            );
          })}
        </CommentsContainer>
      </PostsAndCommentsContainer>
    </PageContainer>
  );
}
