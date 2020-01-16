
module.exports = {
  siteMetadata: {
    title: `JukeBox`,
    description: `Development and Tutorials`,
    author: `Code Tahiche`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-sharp`,
       { 
        resolve : `gatsby-transformer-remark`,
        options: {
          plugins : [
              `gatsby-remark-relative-images`,
              {
                  resolve: `gatsby-remark-images`,
                  options: {
                      maxWidth: 750,
                      linkImagesToOriginal: false
                  }
              }
          ]
        }
      }
   ]
}

