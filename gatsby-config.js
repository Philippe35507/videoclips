
module.exports = {
  siteMetadata: {
    title: `JukeBox`,
    description: `Development and Tutorials`,
    author: `Gatsby`,
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

/*
,
`gatsby-remark-responsive-iframe`
            
              
*/

/*
{
        resolve: `gatsby-remark-embed-video`,
        options: {
          width: 720,
          ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
          height: 400, // Optional: Overrides optional.ratio
          related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
          noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
          // urlOverrides: [
          //  {
           //   id: 'youtube',
              //embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
           // }
         // ] //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
        }
      }*/