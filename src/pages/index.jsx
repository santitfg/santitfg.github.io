import * as React from "react";
import "../styles/global.css";
import Layout from "../components/layout";
import CardPreview from "../components/cardpreview";

import { graphql } from "gatsby";
const IndexPage = ({ data }) => {
  return (
    <Layout >
      <main className="max-w-[100%] md:max-w-[75%]  mx-auto text-justify">
      {/* x grid o por flex?? de ser grid el ultimo elem impar? */}
      < div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-1 md:gap-4 ">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <CardPreview data={node} key={node.fields.slug} />
        ))}
      </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}})  {
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
