import { GlobalStyle } from "../theme/global-styles";
import styled from "styled-components";
import palette from "../theme/global-styles";
import { Link } from "react-router-dom";
import { Post } from "../components/Post";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const NavigationBar = styled.div`
  height: 100vh;
  background-color: ${palette.green};
  width: 22vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const NavigationLinks = styled.div`
  margin-top: 83px;
  display: flex;
  flex-direction: column;
  gap: 55px;
`;
const TitleLink = styled(Link)`
  text-decoration: none;
  font-size: inherit;
  font-weight: 400;
  color: ${palette.gray};
  display: block;
  margin-bottom: 0;
`;
const UserLogged = styled.h3`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  margin-top: auto;
  cursor: default;
`;
const LogoutButton = styled.h3`
  cursor: pointer;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${palette.yellow};
  margin-bottom: 34px;
  margin-top: 24px;
`;
const PostsContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin: 97px 200px;
`;

export function Home() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <NavigationBar>
          <NavigationLinks>
            <TitleLink to="/post">My Posts</TitleLink>
            <TitleLink to="/post">All Posts</TitleLink>
          </NavigationLinks>
          <UserLogged>Logged in as: $toDo</UserLogged>
          <LogoutButton>LOGOUT</LogoutButton>
        </NavigationBar>
        <PostsContainer>
          <Post />
          <Post />
          <Post />
          <Post />
        </PostsContainer>
      </PageContainer>
    </>
  );
}
