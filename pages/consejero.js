import React from "react";
import Landing from "../components/Landing/Landing";

const consejero = () => {
  return (
    <Landing
      titleText={"Hablemos sin presiones"}
      descriptionText={
        "Sabemos que estudiar teniendo problemas en casa, en el barrio o en el colegio; ya sean incovenientes con la familia, los amigos o sentirse solo, es muy difícil. Por esta razón estamos aquí para escuchar tus problemas y brindarte la mejor ayuda para que puedas vivir de manera más tranquila. Además puedes hacerlo anónimamente si es algo que te cuesta compartir. "
      }
      btnLink={"/"}
      btnText="Saber más"
      imageLink={"/img/AmigoConsejeroCompressed.webp"}
      imageWidth={900}
      imageHeight={800}
      bgColor={"#FFB341"}
    ></Landing>
  );
};

export default consejero;
