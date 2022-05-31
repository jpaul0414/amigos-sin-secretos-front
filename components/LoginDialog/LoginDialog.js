import React, { useContext } from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import { Dialog } from "evergreen-ui";
import AuthContext from "../../contexts/Auth/AuthContext";
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
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    login({
      identifier: e.target.identifier.value,
      password: e.target.password.value,
      remember: e.target.remember.checked,
    });
  };

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
      <LoginWrapper onSubmit={handleLogin}>
        <LoginTitle>Inicia Sesión</LoginTitle>
        <FormTitle>Tu cuenta</FormTitle>
        <Input
          type={"text"}
          placeholder={"Usuario"}
          name={"identifier"}
          id={"identifier"}
          autoComplete={"username"}
          required={true}
        ></Input>
        <Input
          type={"password"}
          placeholder={"Contraseña"}
          name={"password"}
          id={"password"}
          autoComplete={"current-password"}
          required={true}
        ></Input>
        <CheckboxLabel htmlFor="Recordar">
          <InputCheckbox type={"checkbox"} name={"remember"} id={"remember"} />
          Recuérdame
        </CheckboxLabel>
        <LoginButton
          type={"submit"}
          // onClick={() => {
          //   setShowLogin(!showLogin);
          // }}
        >
          Iniciar sesión
        </LoginButton>
      </LoginWrapper>
    </Dialog>
  );
};

export default LoginDialog;
