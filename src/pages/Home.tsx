import { GlobalStyle } from "../theme/global-styles";
import styled from "styled-components";
// import palette from "../theme/global-styles";
// import { Link } from "react-router-dom";
import { Post } from "../components/Post";
import { SideBar } from "../components/SideBar";

const PageContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

const PostsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin: 97px 193px 97px 596px;
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
