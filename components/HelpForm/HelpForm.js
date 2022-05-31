import React from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import {
  FormContainer,
  FormWrapper,
  HelpInput,
  HelpLabel,
  HelpRadio,
  RadioContainer,
  RadioLabel,
  SubmitButton,
  SubmitContainer,
} from "./HelpForm.elements";
import LoginWarning from "../LoginWarning/LoginWarning";

const HelpForm = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated && <LoginWarning></LoginWarning>}
      {isAuthenticated && (
        <FormWrapper>
          <FormContainer>
            <HelpLabel>¿Por cuál problema económico estás pasando? </HelpLabel>
            <HelpInput placeholder="Respuesta*"></HelpInput>
            <HelpLabel>
              En caso de recibir la ayuda, ¿está dispuesto a prestar su tiempo y
              servicio para mejorar el ambiente en el aula de clase?
            </HelpLabel>
            <RadioContainer>
              <RadioLabel htmlFor="accepted">
                <HelpRadio type={"radio"} id={"accepted"} name={"accept"} />
                Sí
              </RadioLabel>
              <RadioLabel htmlFor="rejected">
                <HelpRadio type={"radio"} id={"rejected"} name={"accept"} />
                No
              </RadioLabel>
            </RadioContainer>
            <SubmitContainer>
              <SubmitButton>Enviar</SubmitButton>
            </SubmitContainer>
          </FormContainer>
        </FormWrapper>
      )}
    </>
  );
};

export default HelpForm;
