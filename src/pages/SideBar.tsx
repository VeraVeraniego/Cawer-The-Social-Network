import styled from "styled-components";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import palette, { GlobalStyle } from "../theme/global-styles";
import { IUser } from "../interfaces/IUser";

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
const TitleLink = styled(NavLink)`
  text-decoration: none;
  font-size: inherit;
  font-weight: 400;
  color: ${palette.gray};
  display: block;
`;
const ActiveTitleLink = styled(NavLink)`
  text-decoration: none;
  font-size: inherit;
  font-weight: 400;
  color: ${palette.gray};
  display: block;
  border-bottom: 6px solid;
  padding-bottom: 6px;
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
const LogoutLink = styled(Link)`
  text-decoration: none;
`;
export function SideBar({ logout }: { logout: any }) {
  const location = useLocation().pathname;
  function handleLogout() {
    localStorage.clear();
    logout();
  }
  return (
    <>
      <NavigationBar>
        <GlobalStyle />
        <NavigationLinks>
          {location.includes("home") ? (
            <>
              <ActiveTitleLink to="home">My Posts</ActiveTitleLink>
              <TitleLink to="feed">All Posts</TitleLink>
            </>
          ) : (
            <>
              <TitleLink to="home">My Posts</TitleLink>
              <ActiveTitleLink to="feed">All Posts</ActiveTitleLink>
            </>
          )}
        </NavigationLinks>
        <UserLogged>Logged in as: {getUsername()}</UserLogged>
        <LogoutLink to="/login">
          <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
        </LogoutLink>
      </NavigationBar>
      <Outlet />
    </>
  );
  function getUsername() {
    const user: IUser = JSON.parse(localStorage.getItem("userAuth")!);
    return user.username;
  }
}
