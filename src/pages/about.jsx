import * as React from "react";
import "../styles/global.css";
import Layout from "../components/layout";
import imgPerfil from "../assets/images/perfil.jpg";

const IndexPage = ({ data }) => {
  return (
    <Layout titulo="ABOUT">
      <main className="max-w-[50%] mx-auto text-justify">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/2 shrink-0">
            <img src={imgPerfil} alt="foto perfil" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 columns-1 md:columns-1 gap-6">
            <p>Santiago Fernandez, Artista e investigador, con formación en Artes Visuales y Maestrando en Tecnología y Estética de las Artes Electrónicas, UNTREF, donde actualmente es docente. A su vez participa del proyecto Análisis y Representación Sensible de Datos IIAC-UNTREF, conformando el colectivo AudioStellar.</p>
            <p className="mt-4">Como artista indaga los objetos tecnológicos y las sensibilidades por medio del cómputo, explorando las interacciones entre cuerpo y dispositivos, la memoria y los procesos colectivos. Su práctica se despliega en un abanico de lenguajes que va desde la programación en vivo y visuales generativas en tiempo real, hasta la performance, la escultura y las instalaciones.</p>
            <p className="mt-4">Sus obras colectivas han sido presentados en múltiples contextos, tanto en Argentina como internacionalmente: Sònar de Barcelona [ES], el Real Conservatorio de Madrid [ES], Kasko [CH], La SAT [CA], CCK, Tecnópolis, ArtLab, MUNAR, Festival NUDO [ES], FITS-CMD, entre otros espacios.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => {
  return  <>
    <title>Acerca de Santiago Fernandez</title>

    <meta
      name="description"
      content="Portfolio de Santiago Fernandez, orientado principalmente a la difusion de trabajos artisticos de ilustracion y programacion creativa"
    />

    <meta property="og:title" content="Acerca de Santiago Fernandez" />
    {/* <meta property="og:image" content={metaImg} />
    <meta property="og:url" content="https://santitfg.github.io/" />
    <meta property="og:type" content="website" /> */}
    <meta
      name="og:description"
      content="Portfolio de Santiago Fernandez, orientado principalmente a la difusion de trabajos artisticos de ilustracion y programacion creativa"
    />
  </>;
};
