import styled from "styled-components";
import { GlobalStyle } from "../theme/global-styles";
import palette from "../theme/global-styles";
import { Link, Navigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "axios";
import { IUser } from "../interfaces/IUser";
import { JSONPLACEHOLDERS_API } from "../utils/constants";
const LoginForm = styled.form`
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
  // const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  // localStorage.setItem("authd", "true");
  // const [authenticated, setAuthenticated] = useState<boolean>(
  //   localStorage.getItem("authd") === "true" ? true : false
  // );
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.get(JSONPLACEHOLDERS_API.USERS);
      const usersArray: Array<IUser> = response.data;
      const emailsArray: Array<string> = usersArray.map((element) =>
        element?.email.toLowerCase()
      );
      const isValidEmail: boolean = emailsArray.some(
        (element) => element === email.toLocaleLowerCase()
      );
      if (isValidEmail) {
      }
    } catch (err) {}
  };
  return (
    <>
      <GlobalStyle />
      <LoginForm onSubmit={handleSubmit}>
        <Title>WELCOME</Title>
        <EmailInput
          type="email"
          placeholder="user@ravn.co"
          onChange={handleChange}
        ></EmailInput>
        <LoginButton>LOGIN</LoginButton>
      </LoginForm>
    </>
  );
  // function includesEmail(inputEmail, emailList) {}
}
