import styled from "styled-components";
import { SideBar } from "../components/SideBar";
import { GlobalStyle } from "../theme/global-styles";

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const ErrorNotFound = styled.h1`
  margin-left: 450px;
  margin-top: 20px;
`;
export function NotFound() {
  return (
    <PageContainer>
      <GlobalStyle></GlobalStyle>
      <SideBar />
      <ErrorNotFound>Error 404: Page not found</ErrorNotFound>
    </PageContainer>
  );
}
