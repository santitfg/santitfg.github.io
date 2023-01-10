import React from "react";

import "../styles/global.css";
import Navbar from "./navbar";
const Layout = (props) => {
  return (
    <div className="bg-[#e2e2e2] w-screen h-screen">
      <Navbar />
      <main className="container mx-auto text-justify ">
      <h1 className="bg-[#1da1f2] text-white"> {props.titulo}</h1>

      {props.children}
      </main>
    </div>
  );
};
export default Layout;
