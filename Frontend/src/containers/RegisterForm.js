import { Link } from "react-router-dom";
import styled from "styled-components";

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

const LoginLink = styled.a`
  font-size: 14px;
  margin-top: 20px;
  color: #008cba;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #00657b;
  }
`;

const RegisterForm = () => {
  return (
    <Card>
      <Container>
        <Title>¡Bienvenido a <AdoptText>Adopt<AdoptTitle>Ar</AdoptTitle></AdoptText>!</Title>
        <Text>Regístrate:</Text>
        <Input type="text" placeholder="Nombre de usuario*"/>
        <Input type="password" placeholder="Contraseña*"/>
        <Input type="text" placeholder="Nombre*"/>
        <Input type="text" placeholder="Apellido*"/>
        <Input type="text" placeholder="Dirección*"/>
        <Input type="email" placeholder="E-mail*"/>
        <Input type="text" placeholder="Número de teléfono"/>
        <Button>Continuar</Button>
       <Link to={'/'}><LoginLink>¿Ya tienes una cuenta? ¡Inicia sesión!</LoginLink></Link>
      </Container>
    </Card>
  );
};

export default RegisterForm;


