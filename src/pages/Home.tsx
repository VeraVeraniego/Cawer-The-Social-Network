import { GlobalStyle } from "../theme/global-styles";
import styled from "styled-components";
// import palette from "../theme/global-styles";
// import { Link } from "react-router-dom";
import { Post } from "../components/Post";
import { SideBar } from "../components/SideBar";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const PostsContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export function Home() {
  return (
    <PageContainer>
      <GlobalStyle />
      <SideBar />
      <PostsContainer>
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsContainer>
    </PageContainer>
  );
}
