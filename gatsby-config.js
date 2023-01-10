/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Porfolio santiago fernandez`,
    description: `porfolio pesonal orientado a programacion y arte`,
    author: `@stfg.prof`,
    siteUrl: `https://santitfg.github.io/`
  },
  plugins: ["gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap", 'gatsby-plugin-postcss','gatsby-transformer-remark' ,
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "posteos",
      "path": "./src/content/"
    },
    __key: "content"
  }
  , {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "templates",
      "path": "./src/templates/"
    },
    __key: "templates"
  }, 
]
};