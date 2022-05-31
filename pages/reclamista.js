import React from "react";
import Landing from "../components/Landing/Landing";
import Head from "next/head";
import EvaluationForm from "../components/EvaluationForm/EvaluationForm";

const reclamista = () => {
  return (
    <>
      <Head>
        <title>Amigo Prestamista</title>
        <meta name="description" content="Página amigo prestamista"></meta>
        <meta name="theme-color" content="#0070B8"></meta>
      </Head>
      <Landing
        titleText={"¡Tu opinión sí importa!"}
        descriptionText={
          "Para que una institución funcione cada una de sus partes debe estar en perfecta armonía, por lo cual tu opinión frente a los contenidos y los profesores es muy valiosa. Ayúdanos a mejorar cada día dando tu honesta opinión sobre lo que vives dentro del aula. Puedes estar tranquilo, esta calificación a tus docentes es anónima.   "
        }
        btnLink={"/"}
        btnText="Saber más"
        imageLink={"/img/AmigoReclamistaCompressed.webp"}
        imageWidth={900}
        imageHeight={800}
        bgColor={"#EC7363"}
        orderInLine={1}
        hasShadow={true}
      ></Landing>
      <EvaluationForm></EvaluationForm>
    </>
  );
};

export default reclamista;
