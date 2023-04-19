import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoutOption = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #F5F5F5;
  }
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
`;

const LogoutButton = () => {
  const handleLogout = () => {
    fetch("http://localhost:5000/users/logout", {
      method: "POST",
      credentials: "include",
    })
      .then(response => {
        if (response.ok) {
          console.log("Sesión cerrada con éxito.");
        } else {
          console.log("No se pudo cerrar sesión.");
        }
      })
      .catch(error => {
        console.error("Ocurrió un error al cerrar sesión: ", error);
      });
  };

  return (
    <Link to='/' onClick={handleLogout}><LogoutOption>Salir</LogoutOption></Link>
  );
};

export default LogoutButton;


