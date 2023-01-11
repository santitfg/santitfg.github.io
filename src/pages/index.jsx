import * as React from "react";
import "../styles/global.css";
import Layout from "../components/layout";
import CardPreview from "../components/cardpreview";

import { graphql } from "gatsby";
const IndexPage = ({ data }) => {
  return (
    <Layout titulo="jolis">
      <main>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <CardPreview data={node} key={node.fields.slug} />
        ))}
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            layout
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
