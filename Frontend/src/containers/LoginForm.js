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

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 30px;
  margin: 0 10px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background-color: #ccc;
    margin: 0 10px;
  }

  span {
    font-size: 14px;
    color: #ccc;
    text-transform: uppercase;
  }
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

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch("http://localhost:5000/api/user/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then(response => {
        const res = response.json();
        return res;
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const handleGmailClick = (e) => {
    e.preventDefault();
    const width = 600;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      e.target.parentElement.href,
      "popup",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  const handleFacebookClick = (e) => {
    e.preventDefault();
    const width = 600;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    window.open(
      e.target.parentElement.href,
      "popup",
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  return (
    <Card>
      <Container>
      <Title>¡Bienvenido a <AdoptText>Adopt<AdoptTitle>Ar</AdoptTitle></AdoptText>!</Title>
        <Text>Inicia sesión con:</Text>
        <LogoContainer>
          <Link to={"https://accounts.google.com/o/oauth2/auth?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email"} >
            <Logo
              src="https://cdn.icon-icons.com/icons2/2631/PNG/512/gmail_new_logo_icon_159149.png"
              alt="Gmail"
              onClick={handleGmailClick}
            />
          </Link>
          <Link to={"https://www.facebook.com/v12.0/dialog/oauth?client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=email"}>
            <Logo
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
              alt="Facebook"
              onClick={handleFacebookClick}
            />
          </Link>
        </LogoContainer>
        <Divider>
          <span>O</span>
        </Divider>
        <Input type="text" placeholder="Correo electrónico" value={email} onChange={e => setEmail(e.target.value)}/>
        <Input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
        <Button onClick={() => handleLogin(email, password)}>Continuar</Button>
        <Link to={'/Register'}><RegisterLink>¿No tienes una cuenta? Regístrate</RegisterLink></Link>
      </Container>
    </Card>
  );
};

export default LoginForm;








