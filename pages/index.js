import Landing from "../components/Landing/Landing";

export default function Home() {
  return (
    <Landing
      titleText={"Un espacio para dejar tus problemas"}
      descriptionText={
        "Amigos sin secretos es donde todos los problemas que cuestan decir en voz alta lo puedes hablar sin sentirte juzgado, y así vivir sin guardar secretos dolorosos."
      }
      btnLink={"/"}
      btnText="Saber más"
      imageLink={"/img/LandingImage1Compressed.webp"}
      imageWidth={900}
      imageHeight={800}
      hasButton={false}
    ></Landing>
  );
}
