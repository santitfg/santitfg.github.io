/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Porfolio santiago fernandez`,
    description: `porfolio pesonal orientado a programacion y arte`,
    author: `@stfg.prof`,
    siteUrl: `https://santitfg.github.io/`,
  },
  plugins: [
    // "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    // "gatsby-plugin-mdx",
    // "gatsby-transformer-remark",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content/",
      },
      __key: "content",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "content-images",
    //     path: "./src/content/img",
    //   },
    //   __key: "content-img",
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "templates",
        path: "./src/templates/",
      },
      __key: "templates",
    },
  ],
};
