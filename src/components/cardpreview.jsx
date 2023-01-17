// import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const CardPreview = (props) => {
  const { data } = props;
  var imagen = undefined;

  if (data.frontmatter.image) {
    //esto por ahi es un poco rebuscado y podria hacer uan ternaria pero me parece que lo vuelve poco legible

    imagen = (
      // <div      className="relative object-cover pb-1/2 ">
        <GatsbyImage
          className="  w-full h-full object-cover rounded-3xl "
          image={data.frontmatter.image.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title}
        />
      //  </div> 
    );
  }

  return (
    <div className="relative inline-block  rounded-3xl  hover:bg-red-400 ">
      <Link to={data.fields.slug} className=" ">
        {/* lo que esta fallando en limiat esta tarjeta es la forma de anidar el link y el absoluto, a su vez se pierde la href al modificar el orden de anidado  */}
        <div className="absolute  z-10  opacity-0 hover:opacity-100 inset-0  w-full h-full  ">
          <div className=" absolute text-xl rounded-b-3xl text-txt-principal text-center font-bold inset-x-0 bottom-0 p-12 gradiente-principal ">
            {/* <h1></h1> <h2></h2>*/}
            {data.frontmatter.title}
          </div>
        </div>
        {imagen}

        {/* <h3>{data.frontmatter.date}</h3> */}
        {/* <p className="mt-2 text-sm text-gray-300">{data.excerpt}</p> */}
      </Link>
    </div>
  );
};

export default CardPreview;
