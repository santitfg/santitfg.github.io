import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout titulo={frontmatter.title}>
      <main className=" w-9/12 md:container mx-auto text-justify ">
        {/* <h2>{frontmatter.date}</h2> */}
        <div
          className=" unreset"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </Layout>
  );
}
export const Head = ({ data,pageContext }) => {
  return <>
  <title>{data.markdownRemark.frontmatter.title}</title>

  <meta property="og:title" content={data.markdownRemark.frontmatter.title} />
  <meta property="og:image" content={data.markdownRemark.frontmatter.image.childImageSharp.gatsbyImageData} />
  <meta property="og:url" content={"https://santitfg.github.io"+data.markdownRemark.fields.slug} />
  <meta property="og:type" content="post" />
  <meta name="og:description" content={"post de santi fecha de contenido: "+data.markdownRemark.frontmatter.date} />


  </>
};

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
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
