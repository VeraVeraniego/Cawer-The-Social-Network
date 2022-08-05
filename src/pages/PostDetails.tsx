import styled from "styled-components";
import { SideBar } from "../components/SideBar";
import { GlobalStyle } from "../theme/global-styles";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const PostsAndCommentsContainer = styled.article``;
const FullPostAndAuthorInfoContainer = styled.section``;
const FullPost = styled.section``;
const AuthorInfo = styled.section``;
const CommentsContainer = styled.div``;
const Comment = styled.div``;
export function PostDetails() {
  return (
    <PageContainer>
      <GlobalStyle />
      <SideBar />
      <PostsAndCommentsContainer>
        <FullPostAndAuthorInfoContainer>
          <FullPost></FullPost>
          <AuthorInfo></AuthorInfo>
        </FullPostAndAuthorInfoContainer>
        <CommentsContainer>
          <Comment />
        </CommentsContainer>
      </PostsAndCommentsContainer>
    </PageContainer>
  );
}