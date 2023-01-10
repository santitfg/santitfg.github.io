import React from "react";
import { Link } from "gatsby";
import { useState } from "react"; // import state

const Navbar = () => {
    const [estadoMenuHamburguesa,setMenuHamburguesa]= useState(false);

    const toggleHamburguesa=()=>{
        setMenuHamburguesa(!estadoMenuHamburguesa);
        console.log(estadoMenuHamburguesa);
    }
  return (
    <>
    {/* justify-around  items-center justify-between flex*/}
    <nav className=" flex flex-wrap  p-4 ">
        <div className="block lg:flex md:w-full">
            <div className="flex justify-between  ">
            <Link  to="/" className="p-4 text-2xl font-bold inline-block">
            <div >ICO</div>
            </Link>
            <button onClick={toggleHamburguesa} className="lg:hidden inline-block p-4">{(estadoMenuHamburguesa ? "MENU" : "X")}</button>
            </div>

      <ul className={"p-4 text-center text-2xl font-bold "+(estadoMenuHamburguesa ? " hidden":"block lg:flex")}>
        <li>
          <Link to="/tags/arte/" className="block mt-4 lg:inline-block lg:mt-0 text-teal hover:text-white mr-4">
          arte
          </Link>
        </li>
        <li>
          <Link to="/tags/programacion" className="block mt-4 lg:inline-block lg:mt-0 text-teal hover:text-white mr-4">
          programacion
          </Link>
        </li>
        <li>
          <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal hover:text-white mr-4">
          about
          </Link>
        </li>
        <li>
          <Link to="/tags" className="block mt-4 lg:inline-block lg:mt-0 text-teal hover:text-white mr-4">
            tags
          </Link>
        </li>
      </ul>
      </div>
    </nav>
    </>
  );
};
export default Navbar;
