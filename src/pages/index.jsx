import * as React from "react";
import "../styles/global.css";
import Layout from "../components/layout";
import CardPreview from "../components/cardpreview";

import { graphql } from "gatsby";
const IndexPage = ({ data }) => {
  return (
    <Layout titulo="jolis">
      {/* x grid o por flex?? de ser grid el ultimo elem impar? */}
      < div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <CardPreview data={node} key={node.fields.slug} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
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
