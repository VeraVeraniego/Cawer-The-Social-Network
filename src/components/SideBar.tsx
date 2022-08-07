import styled from "styled-components";
import { Link } from "react-router-dom";
import palette, { GlobalStyle } from "../theme/global-styles";

const NavigationBar = styled.article`
  height: 100vh;
  background-color: ${palette.green};
  width: 22vw;
  position: fixed;
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
const LogoutButton = styled.h5`
  cursor: pointer;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: ${palette.yellow};
  margin-bottom: 34px;
  margin-top: 24px;
`;
export function SideBar() {
  function handleLogout() {
    localStorage.clear();
  }
  return (
    <NavigationBar>
      <GlobalStyle />
      <NavigationLinks>
        <TitleLink to="/post">My Posts</TitleLink>
        <TitleLink to="/post">All Posts</TitleLink>
      </NavigationLinks>
      <UserLogged>Logged in as: $toDo</UserLogged>
      <Link to="/login">
        <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
      </Link>
    </NavigationBar>
  );
}
