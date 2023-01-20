import React from "react";
import { Link } from "gatsby";
import {useState} from "react"; 
import logoGitLab from "../images/gitlab-logo-500.png";
import logoGiHub from "../images/github-mark.svg";
import icono from "../images/icon.png";


// en caso de tener scrollbar, la barra se achica, deberia hacer algun cambio para que esto no pase, pero no es prioritario en este momento
const Navbar = () => {
  // variable algo tosca para que el menu hamburguesa comience cerrado si la pantalla es sm sino estaria abierto y seria el menu comun
  //por ahi tendria que desacoplar el nabvar largo y el menu en sm
  var estadoInicial=false; 
  // if(window.innerWidth<=640)estadoInicial=true;

  const [estadoMenuHamburguesa, setMenuHamburguesa] = useState(estadoInicial);

  const toggleHamburguesa = () => {
    setMenuHamburguesa(!estadoMenuHamburguesa);
  };

  return (
    <>
      {/* justify-around  items-center justify-between flex*/}
      <nav className=" sm:flex flex-wrap  pb-4 pt-8  md:px-8 lg:px-10 justify-between">
        <div className="block sm:flex ">
          <div className="flex justify-between  ">
            <Link to="/" className="p-4  font-bold ">
              {/* <span className=" text-2xl">ICO</span> */}
              <img src={icono} alt="icono"  className="w-14 h-14"/>

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
              "p-4 text-center text-2xl font-bold sm:ml-10 " +
              (estadoMenuHamburguesa ? " hidden" : "block sm:flex")
            }
          >
            {/* <li>
              <Link
                to="/tags/arte/"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4 "
              >
                haceres
              </Link>
            </li>
            <li>
              <Link
                to="/tags/programacion"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"
              >
                programacion
              </Link>
            </li> */}
            <li>
              <Link
                to="/about"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal gradiente-link  mr-4"
              >
                Sobre mi
              </Link>
            </li>
            {/* <li>
              <Link
                to="/tags"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"
              >
                tags
              </Link>
            </li> */}
          </ul>
        </div>
        <ul
          className={
            "p-4 text-center text-2xl font-bold " +
            (estadoMenuHamburguesa ? " hidden" : "flex justify-center")
          }
        >
          <a
            href="https://gitlab.com/stfg.prof"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"
          >
            <img src={logoGitLab} alt="Gitlab" className="w-10 h-10"/>
          </a>
          <a
            href="https://github.com/santitfg"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"
          >
            <img src={logoGiHub} alt="Github"  className="w-10 h-10"/>
          </a>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
