import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"

/**
 * @type {import('gatsby').GatsbyConfig}
 */
const config = {
  siteMetadata: {
    title: `My gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      mdxOptions: {
        remarkPlugins: [
          remarkMath
        ],
        rehypePlugins: [
          rehypeKatex, 
          { strict: 'ignore' }
        ],
      } 
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  {
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
      name: "content",
      path: "./content/"
    }
  }]
}

export default config

