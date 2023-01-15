// import { StaticImage } from "gatsby-plugin-image";
import {  Link  } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const CardPreview = (props) => {
  const { data } = props;
  var imagen = undefined;

  if (data.frontmatter.image) {
    //esto por ahi es un poco rebuscado y podria hacer uan ternaria pero me parece que lo vuelve poco legible
    imagen = (
      <GatsbyImage className=""
        image={data.frontmatter.image.childImageSharp.gatsbyImageData}
        alt={data.frontmatter.title}
      />
    );
  }

  return (
        <div className=" bg-gray-800  hover:bg-red-400 inline-block m-2">
        <Link to={data.fields.slug} className=" ">

          <h1 className="text-xl text-white font-bold">
            {data.frontmatter.title}
          </h1>
          {imagen}
          <h3>{data.frontmatter.date}</h3>
          {/* <p className="mt-2 text-sm text-gray-300">{data.excerpt}</p> */}
          </Link>

        </div>
  );
};

export default CardPreview;
