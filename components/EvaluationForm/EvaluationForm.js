import React from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import {
  FormContainer,
  FormWrapper,
  QuestionLabel,
  QuestionOption,
  QuestionSelect,
  QuestionWrap,
  SectionTtitle,
  SubmitButton,
  TextInput,
} from "./EvaluationForm.elements";
import LoginWarning from "../LoginWarning/LoginWarning";

const EvaluationForm = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated && <LoginWarning></LoginWarning>}
      {isAuthenticated && (
        <FormWrapper>
          <FormContainer>
            <SectionTtitle>Saber específico</SectionTtitle>
            <QuestionWrap>
              <QuestionLabel>
                1. Conocimiento que demuestra el (la) profesor(a) de la
                asignatura
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                2. Los contenidos del curso se conectan con la realidad
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                3. Explicación de las (Reglas del juego) condiciones
                evaluativas, desarrollo del curso y material temático, al inicio
                del curso.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                4. Desarrollo de los temas propuestos en el programa.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <SectionTtitle>Metodología</SectionTtitle>
            <QuestionWrap>
              <QuestionLabel>5. Preparación de las clases. </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>6. Orientaciones bibliográficas. </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                7. Ejemplos dados en clase para facilitar la comprensión del
                tema.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                8. Estímulo a la lectura, consulta, investigación y
                participación del estudiante en clase.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>9. Estímulo al trabajo en equipo</QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                10. Incorporación de las TIC en el proceso de enseñanza
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <SectionTtitle>Evaluación</SectionTtitle>
            <QuestionWrap>
              <QuestionLabel>
                11. Plantea y utiliza rubricas cualitativas para las pruebas y
                momentos evaluativos
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                12. Los momentos evaluativos tienen en cuenta los objetivos
                propuestos en el programa.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                13. Los momentos evaluativos se refieren a lo explicado y
                tratado en clase.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                14. Claridad en la formulación de las preguntas de las pruebas y
                momentos evaluativos
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                15. Entrega personal y oportuna de los resultados de las
                evaluaciones.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                16. Utilización de los resultados de las pruebas y momentos
                evaluativos para mejorar el aprendizaje
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <SectionTtitle>Relación con los estudiantes</SectionTtitle>
            <QuestionWrap>
              <QuestionLabel>
                17. Puntualidad y cumplimiento del tiempo establecido para las
                clases.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                18. Comportamiento digno y respetuoso con los estudiantes.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                19. Interés por conocer la situación académica de los y las
                estudiantes.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                20. Atención a los estudiantes en cuanto a sus inquietudes
                académicas.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                21. Su profesor (a) estimula , contribuye y potencia la
                formación en valores.
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"5"}>Excelente</QuestionOption>
                <QuestionOption value={"4"}>Bueno</QuestionOption>
                <QuestionOption value={"3"}>Aceptable</QuestionOption>
                <QuestionOption value={"2"}>Deficiente</QuestionOption>
                <QuestionOption value={"1"}>Muy deficiente</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <SectionTtitle>
              Género e inclusión (de uso confidencial)
            </SectionTtitle>
            <QuestionWrap>
              <QuestionLabel>
                22. ¿Su profesor(a) ha realizado comentarios racistas,
                homofóbicos, misóginos u otros, que lo hayan hecho sentir
                incómodo(a)?
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"si"}>Sí</QuestionOption>
                <QuestionOption value={"no"}>No</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                23. ¿Su profesor(a) crea escenarios de participación en
                condiciones de equidad? (Se siente con igualdad de oportunidades
                en la clase)
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"si"}>Sí</QuestionOption>
                <QuestionOption value={"no"}>No</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                24. ¿Su profesor(a) le ha hecho comentarios insinuantes,
                seductores, provocadores, a usted o a sus compañero(a)s?
              </QuestionLabel>
              <QuestionSelect>
                <QuestionOption value={""}>--</QuestionOption>
                <QuestionOption value={"si"}>Sí</QuestionOption>
                <QuestionOption value={"no"}>No</QuestionOption>
              </QuestionSelect>
            </QuestionWrap>
            <SectionTtitle>Preguntas abiertas</SectionTtitle>
            <QuestionWrap>
              <QuestionLabel>
                25. En qué aspectos, según usted, su profesor o profesora
                presenta fortalezas?
              </QuestionLabel>
              <TextInput
                type={"text"}
                maxLength={400}
                placeholder={"Escribe tu respuesta"}
              ></TextInput>
            </QuestionWrap>
            <QuestionWrap>
              <QuestionLabel>
                26. En qué aspectos debe mejorar su profesor o profesora?
              </QuestionLabel>
              <TextInput
                type={"text"}
                maxLength={400}
                placeholder={"Escribe tu respuesta"}
              ></TextInput>
            </QuestionWrap>
            <SubmitButton>Enviar</SubmitButton>
          </FormContainer>
        </FormWrapper>
      )}
    </>
  );
};

export default EvaluationForm;
