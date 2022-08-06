import styled from "styled-components";
import { GlobalStyle } from "../theme/global-styles";
import palette from "../theme/global-styles";
import { Link } from "react-router-dom";
import React, { useState } from "react";
const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${palette.green};
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
  background-color: #fff;
  padding-left: 22px;
`;

const LoginButton = styled.button`
  font-size: 24px;
  line-height: 29px;
  width: 530px;
  height: 90px;
  background: ${palette.yellow};
  color: #fff;
  border: 0px solid;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  line-height: 29px;
  cursor: pointer;
`;
export function Login() {
  const [email, setEmail] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <Title>WELCOME</Title>
        <EmailInput
          placeholder="user@ravn.co"
          onChange={handleChange}
        ></EmailInput>
        <Link to="/">
          <LoginButton>LOGIN</LoginButton>
        </Link>
      </LoginContainer>
    </>
  );
}
