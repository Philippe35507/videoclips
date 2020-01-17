import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Bands from "../components/bands"



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
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.country}</p>
            <div  dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
            <Bands />
        </Layout>
    )
}
export default Blog