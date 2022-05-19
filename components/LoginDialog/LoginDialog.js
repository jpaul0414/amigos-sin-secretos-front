import React, { useContext } from "react";
import { Dialog } from "evergreen-ui";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import Image from "next/image";
import {
  CheckboxLabel,
  FormTitle,
  Input,
  InputCheckbox,
  LoginButton,
  LoginTitle,
  LoginWrapper,
} from "./LoginDialog.elements";

const LoginDialog = () => {
  const { showLogin, setShowLogin } = useContext(AuthContext);

  return (
    <Dialog
      isShown={showLogin}
      hasFooter={false}
      onCloseComplete={() => setShowLogin(false)}
      title={
        <Image
          src="/img/LogoAmigosSinSecretos3.png"
          width={250}
          height={100}
          alt="Logo Amigos Sin Secretos"
        ></Image>
      }
      containerProps={{
        marginTop: "120px",
        display: "flex",
        flexDirection: "column",
        width: "600px",
      }}
    >
      <LoginWrapper>
        <LoginTitle>Inicia Sesión</LoginTitle>
        <FormTitle>Tu cuenta</FormTitle>
        <Input type={"text"} placeholder={"Usuario"}></Input>
        <Input type={"password"} placeholder={"Contraseña"}></Input>
        <CheckboxLabel htmlFor="Recordar">
          <InputCheckbox type={"checkbox"} id={"Recordar"} />
          Recuérdame
        </CheckboxLabel>
        <LoginButton
          onClick={() => {
            setShowLogin(!showLogin);
          }}
        >
          Iniciar sesión
        </LoginButton>
      </LoginWrapper>
    </Dialog>
  );
};

export default LoginDialog;
