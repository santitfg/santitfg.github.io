import React from "react";
import { Link } from "gatsby";
import { useState } from "react"; // import state

const Navbar = () => {
  const [estadoMenuHamburguesa, setMenuHamburguesa] = useState(false);

  const toggleHamburguesa = () => {
    setMenuHamburguesa(!estadoMenuHamburguesa);
    console.log(estadoMenuHamburguesa);
  };
  return (
    <>
      {/* justify-around  items-center justify-between flex*/}
      <nav className=" sm:flex flex-wrap  p-4 justify-between">
          <div className="block sm:flex ">
            <div className="flex justify-between self-center ">
              <Link to="/" className="p-4  font-bold ">
                <span className=" text-2xl">ICO</span>
              </Link>
              <button
                onClick={toggleHamburguesa}
                className="sm:hidden inline-block p-4"
              >
                {estadoMenuHamburguesa ? "MENU" : "X"}
              </button>
            </div>

            <ul
              className={
                "p-4 text-center text-2xl font-bold " +
                (estadoMenuHamburguesa ? " hidden" : "block sm:flex")
              }
            >
              <li>
                <Link
                  to="/tags/arte/"
                  className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4 "
                >
                  arte
                </Link>
              </li>
              <li>
                <Link
                  to="/tags/programacion"
                  className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4"
                >
                  programacion
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  to="/tags"
                  className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4"
                >
                  tags
                </Link>
              </li>
            </ul>
          </div>
          <ul
            className={
              "p-4 text-center text-2xl font-bold " +
              (estadoMenuHamburguesa ? " hidden" : "flex justify-center")
            }
          >
            <Link
              to="/tags"
              className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4"
            >
              GIT
            </Link>
            <Link
              to="/tags"
              className="block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-white mr-4"
            >
              GIT
            </Link>
          </ul>
      </nav>
    </>
  );
};
export default Navbar;
