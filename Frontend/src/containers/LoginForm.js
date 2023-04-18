import styled from "styled-components";
import { useState } from 'react';
import { Link } from "react-router-dom";

const Card = styled.div`
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 400px;
  margin: 50px auto 50px;
  box-sizing: border-box;
  text-align: center;
  @media (max-width: 767px) {
    max-width: 90%;
    margin: 50px auto 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin: 20px 0;
`;

const AdoptText = styled.span`
  color: #8B00FF;
`;

const AdoptTitle = styled.span`
  color: #FF8C00;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #8B00FF;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #FF6F00;
  }
`;

const RegisterLink = styled.span`
  font-size: 14px;
  margin-top: 20px;
  color: #008cba;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #00657b;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-bottom: 10px;
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = () => {
    fetch("http://localhost:5000/users/auth", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        const res = response.json();
        return res;
      })
      .then(response => {
        console.log(response);
        if (response.token) {
          window.location.href = "/home";
        } else {
          setError("Usuario y/o contraseña incorrectos");
        }
      })
      .catch(error => {
        console.error(error);
        setError("Usuario y/o contraseña incorrectos");
      });
  };

  return (
    <Card>
      <Container>
      <Title>¡Bienvenido a <AdoptText>Adopt<AdoptTitle>Ar</AdoptTitle></AdoptText>!</Title>
        <Text>Inicia sesión:</Text>
        {error && <ErrorText>{error}</ErrorText>}
        <Input type="text" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)}/>
        <Input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
        <Button onClick={() => handleLogin(email, password)}>Continuar</Button>
        <Link to={'/Register'}><RegisterLink>¿No tienes una cuenta?</RegisterLink></Link>
      </Container>
    </Card>
  );
};

export default LoginForm;








