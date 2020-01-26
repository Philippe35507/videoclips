import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Bands from "../components/bands"

import blogStyles from "../components/blog.module.scss"

/*
export const Video = ({ country, videoTitle, ...props }) => {
    return (
    <div>
       <iframe
      src={ country }
      title="titrevideo"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      width="640" 
      height="360"
    ></iframe>
     </div>
   )
    }

   */ 

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                country
                                
            }
            html
        }
    }
`
const Blog = (props) => {
    return(
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
                <div className={blogStyles.flexi} >
                    <h2 className={blogStyles.item} >{props.data.markdownRemark.frontmatter.title}</h2>
                    <p className={blogStyles.item} >{props.data.markdownRemark.frontmatter.country}</p>
                        
                    <div className={blogStyles.item} dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                </div>
                <Bands />
        </Layout>
    )
}
export default Blog
