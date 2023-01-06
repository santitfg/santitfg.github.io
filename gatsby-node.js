const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "posteos" });
    createNodeField({ node, value: slug, name: "slug" });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const templateFile = path.resolve('src/templates/template.jsx');
  return graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter{
              layout
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
          path: node.fields.slug,
          component:path.resolve(`./src/templates/${node.frontmatter.layout || 'template'}.jsx`),
          context: {
            slug: node.fields.slug,
          },
      });
    });
  });
};
