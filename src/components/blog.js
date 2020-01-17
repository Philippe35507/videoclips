import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


import blogStyles from "./blog.module.scss"


import Head from "./head"

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title 
                            country
                            
                        }
                        fields {
                            slug
                        }                
                    }
                }
            }
        }
    `)

    return (
        <div>
            <Head title="Blog" />
            
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.country}</p>
                            </Link>
                        </li>
                    )
                  })}
            </ol>
            
        </div>
    )
}

export default BlogPage