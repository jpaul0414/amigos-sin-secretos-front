import React from "react";
import Landing from "../components/Landing/Landing";
import Head from "next/head";
import HelpForm from "../components/HelpForm/HelpForm";

const prestamista = () => {
  return (
    <>
      <Head>
        <title>Amigo Prestamista</title>
        <meta name="description" content="Página amigo prestamista"></meta>
        <meta name="theme-color" content="#0070B8"></meta>
      </Head>
      <Landing
        titleText={"Una ayuda de peso"}
        descriptionText={
          "A veces hay problemas que no se solucionan simplemente con buena actitud, por lo tanto necesitamos que nos den otro tipo de ayudas para enfrentar los problemas. Con este sistema de Crowdfunding vas a poder recibir una ayuda económica (10.000 COP max) para resolver problemas económicos. Úsalo solo en caso de emergencias y si recibes ayuda, deberás devolver el favor a la comunidad estudiantil que te ayudó."
        }
        btnLink={"/"}
        btnText="Saber más"
        imageLink={"/img/AmigoPrestamistaCompressed.webp"}
        imageWidth={900}
        imageHeight={800}
        bgColor={"#F8DBED"}
        orderInLine={1}
        hasShadow={true}
      ></Landing>
      <HelpForm></HelpForm>
    </>
  );
};

export default prestamista;
