import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"
import BlogPage from "../components/blog"


const IndexPage = () => {
  return (
    <Layout>
          <Head title="home" />
          
          <h5>Gothic  - Metal - Synth-pop (and more!)</h5>
          <BlogPage />
             
    </Layout>
    )
  }

export default IndexPage


 