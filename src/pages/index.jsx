import * as React from "react";
import "../styles/global.css";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
const IndexPage = ({ data }) => {
  return (
    <Layout titulo="jolis">
      <main>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div  key={node.fields.slug} >
            <Link to={node.fields.slug} >
              <div className="hover:bg-red-400">
                <h1>{node.frontmatter.title}</h1>
              <h3>{node.frontmatter.date}</h3>
              <p>{node.excerpt}</p>
              </div>
            </Link>
          </div >
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
          }
          excerpt
        }
      }
    }
  }
`;
