import * as React from "react";
import "../styles/global.css";
import Layout from "../components/layout";
const IndexPage = ({ data }) => {
  return (
    <Layout titulo="ABOUT">
      <main className="max-w-[75%] mx-auto text-justify">
       <div>
        <p>ESTO EXPLICA ALGO</p>
        <p><span className="font-chivo">con una fuente</span> sin la fuente</p>
        <p className="font-leluja">From his early Liverpool days, through the historic
decade of The Beatles, to Wings and his long solo career,
The Lyrics pairs the definitive texts of 154 Paul McCartney
songs with first-person commentaries on his life and
music. Spanning two alphabetically arranged volumes,
these commentaries reveal how the songs came to be and
the people who inspired them: his devoted parents, Mary
and Jim; his songwriting partner, John; his “Golden Earth
Girl” Linda Eastman; his wife, Nancy McCartney; and
even Queen Elizabeth, among many others. </p>
       </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>About</title>;

