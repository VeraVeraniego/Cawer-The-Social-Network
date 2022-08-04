import styled from "styled-components";
import { GlobalStyle } from "../theme/global-styles";
const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #2d4440;
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  width: 203px;
  height: 48px;
  color: #fff;
  font-style: normal;
  font-size: 40px;
  line-height: 48px;
  text-align: center;
`;
const EmailInput = styled.input`
  width: 530px;
  border: 0px solid;
  height: 90px;
  background-color: white;
  padding-left: 22px;
`;

const LoginButton = styled.button`
  width: 530px;
  height: 90px;
  background: #c69433;
  color: #fff;
  border: 0px solid;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  line-height: 29px;
`;
export function Login() {
  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <Title>WELCOME</Title>
        <EmailInput placeholder="user@ravn.co"></EmailInput>
        <LoginButton>LOGIN</LoginButton>
      </LoginContainer>
    </>
  );
}
