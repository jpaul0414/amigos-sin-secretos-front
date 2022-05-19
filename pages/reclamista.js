import React from "react";
import Landing from "../components/Landing/Landing";

const reclamista = () => {
  return (
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
    ></Landing>
  );
};

export default reclamista;
