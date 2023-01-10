import * as React from "react";
import "../styles/global.css";
import Layout from "../components/layout";
const IndexPage = ({ data }) => {
  return (
    <Layout titulo="ABOUT">
      <main>
       <div>
        <p>ESTO EXPLICA ALGO</p>
       </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>About</title>;

