import Landing from "../components/Landing/Landing";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Amigos sin Secretos</title>
        <meta name="description" content="Amigos sin secretos"></meta>
        <meta name="theme-color" content="#0070B8"></meta>
      </Head>
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
    </>
  );
}
