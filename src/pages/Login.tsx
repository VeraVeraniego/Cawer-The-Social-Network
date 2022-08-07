import styled from "styled-components";
import { GlobalStyle } from "../theme/global-styles";
import palette from "../theme/global-styles";
import { Navigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { IUser } from "../interfaces/IUser";
import { JSONPLACEHOLDERS_API } from "../utils/constants";
const LoginForm = styled.form`
  width: 100vw;
  height: 100vh;
  padding-top: 33vh;
  background: ${palette.green};
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: flex-start;
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
const ButtonAndValidation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginButton = styled.button`
  position: relative;
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
  :disabled {
    background-color: ${palette.gray};
  }
`;
const ValidationText = styled.p`
  color: #fff;
  margin-top: 16px;
`;
export function Login() {
  const currentlyAuthed: boolean | null =
    localStorage.getItem("userAuth") === null ? null : true;
  const [email, setEmail] = useState<string>("");
  const [fetchingData, setFetchingData] = useState<boolean>(false);
  const [loginDisabled, setLoginDisabled] = useState<boolean>(false);
  const [emailValidationMessage, setEmailValidationMessage] =
    useState<string>("");
  const [authenticated, setAuthenticated] = useState<boolean | null>(
    currentlyAuthed
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailValidationMessage("");
    setLoginDisabled(false);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginDisabled(true);

    if (!isValidEmail(email)) {
      let validationMessage: string;
      if (email === "") validationMessage = "Please enter an email";
      else validationMessage = "Wrong email format";
      setEmailValidationMessage(validationMessage);
      setAuthenticated(false);
      return;
    }

    try {
      setFetchingData(true);
      const response = await axios.get(JSONPLACEHOLDERS_API.USERS);
      setFetchingData(false);
      if (!authenticateEmailOnAPI(response.data))
        setEmailValidationMessage("User was not found!");
    } catch (err: unknown) {
      setAuthenticated(false);
      setFetchingData(false);
      if (err instanceof Error) setEmailValidationMessage(err.message);
      else console.error(err);
    }
  };
  return (
    <>
      {authenticated && <Navigate to="/" />}
      <GlobalStyle />
      <LoginForm onSubmit={handleSubmit} noValidate>
        <Title>WELCOME</Title>
        <EmailInput
          type="email"
          placeholder="user@ravn.co"
          onChange={handleChange}
        ></EmailInput>
        <ButtonAndValidation>
          <LoginButton disabled={loginDisabled}>
            {fetchingData ? "LOADING" : "LOGIN"}
          </LoginButton>
          {authenticated === false && (
            <ValidationText>
              {!loginDisabled ? "" : emailValidationMessage}
            </ValidationText>
          )}
        </ButtonAndValidation>
      </LoginForm>
    </>
  );
  function isValidEmail(email: string) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }
  function authenticateEmailOnAPI(usersAllowed: Array<IUser>) {
    const validationResult: boolean = usersAllowed.some((element: IUser) => {
      if (element.email.toLocaleLowerCase() === email.toLocaleLowerCase()) {
        localStorage.setItem("userAuth", JSON.stringify(element));
        setEmailValidationMessage("");
        setAuthenticated(true);
        return true;
      }
      setAuthenticated(false);
      return false;
    });
    return validationResult;
  }
}
