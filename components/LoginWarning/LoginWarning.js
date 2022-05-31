import React, { useContext } from "react";
import AuthContext from "../../contexts/Auth/AuthContext";
import {
  Container,
  WarningButton,
  WarningTitle,
} from "./LoginWarning.elements";

const LoginWarning = () => {
  const { showLogin, setShowLogin } = useContext(AuthContext);

  return (
    <Container>
      <WarningTitle>
        Debes iniciar sesión para acceder a este contenido
      </WarningTitle>
      <WarningButton
        onClick={() => {
          setShowLogin(!showLogin);
        }}
      >
        Iniciar Sesión
      </WarningButton>
    </Container>
  );
};

export default LoginWarning;
