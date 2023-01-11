import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";

export default  function BlogPostTemplate({
    data, // this prop will be injected by the GraphQL query below.
  }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    var imagen = undefined;

    if (frontmatter.image) {
      //esto por ahi es un poco rebuscado y podria hacer uan ternaria pero me parece que lo vuelve poco legible
      imagen = (
        <GatsbyImage
          image={frontmatter.image.childImageSharp.gatsbyImageData}
          alt={frontmatter.title}
        />
      );
    }
    

    return (

    <Layout titulo={frontmatter.title} >
        <div>
          <h2>{frontmatter.date}</h2>
          {imagen}

          <div className="text"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
    )
  }
  ;
export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark( fields: {slug: { eq: $slug }} ) {
      html
      frontmatter {
        date
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
