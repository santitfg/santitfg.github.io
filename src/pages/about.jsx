import * as React from "react";
import "../styles/global.css";
import Layout from "../components/layout";
const IndexPage = ({ data }) => {
  return (
    <Layout titulo="ABOUT">
      <main className="max-w-[75%] mx-auto text-justify">
       <div>
        <h2>Santiago Fernandez</h2>
        <p className="">Soy artista visual, programador e ilustrador, maestrando de Artes Electrónicas en la UNTREF. Actualmente estoy en vías de desarrollo de una tesis de investigación relacionada a la creación de  herramientas y lenguajes computacionales que involucren el uso del cuerpo.

Me he desarrollado como visualista ( VJ ) en diversos eventos como parte de colectivos, entre ellos “AudioStellar”, en Tecnópolis durante  el Festival Lupear y como integrante de “Núcleo” en La Tangente para el VII aniversario de “Structured Collective” 
Como ilustrador he participado en el taller de Monica Weiss, pudiendo ser parte de la muestra FIEYO en la Feria Internacional  del libro de Buenos Aires 2022.
Busco combinar mis saberes de programación orientados al LiveCoding con prácticas de expresión corporal, habilitando lugares de encuentro y creación colectiva.
 </p>
       </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>About</title>;

