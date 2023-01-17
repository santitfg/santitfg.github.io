import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default  function BlogPostTemplate({
    data, // this prop will be injected by the GraphQL query below.
  }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (

    <Layout titulo={frontmatter.title} >
        <div>
          {/* <h2>{frontmatter.date}</h2> */}
          <div className="text unreset"
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
      }
    }
  }
`;
