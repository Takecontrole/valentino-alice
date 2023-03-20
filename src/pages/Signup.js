import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

import { Link } from "react-router-dom";
import { useSignupMutation } from "../services/appApi";
const Container = styled.div`
  
  height: 100vh;
  
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //${mobile({ background: "none" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  margin-left: 45px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 45px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 2px solid black;
  min-width: 40%;
  padding: 10px;
  margin-bottom: 2px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 200px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Signup = () => {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [signup, { error, isLoading, isError }] = useSignupMutation();

    function handleSignup(e) {
        e.preventDefault();
        signup({ name, email, password });
    }

    return (
       <Container className="bg-signup">
      <Wrapper className="frame">
        <Title>РЕГИСТРАЦИЯ</Title>
        <Form
 onSubmit={handleSignup}>
        <Input
          type="text" placeholder="Ваше имя" value={name} required onChange={(e) => setName(e.target.value)}
          className="lInput"
        />
        <Input
          type="email" placeholder=" email" value={email} required onChange={(e) => setEmail(e.target.value)}
          className="lInput"
        />
        <Input
          type="password" placeholder="пароль" value={password} required onChange={(e) => setPassword(e.target.value)}
          className="lInput"
        />
        <Button type="submit" disabled={isLoading} className="lButton">
          Регистрация
        </Button>
       </Form>
      </Wrapper>
    </Container>
  );
};

export default Signup;
