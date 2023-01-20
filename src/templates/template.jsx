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
      <main className="container mx-auto text-justify ">
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
  // ESTO FALLA POR ALGUN MOTIVO De no resolverse agregar react Helmet?
  <>
  <title>{data.markdownRemark.frontmatter.title}</title>
  </>
};

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        title
      }
    }
  }
`;
