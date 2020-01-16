import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
    return (
            <Layout>
                    <Head title="About" />
                    <h1>---About Me---</h1>
                    <p>Hello, I am Philippe</p>
                    <p>I live in Spain</p>
                    <p>and I am a Web Developer !</p>
                    <p><Link to="/contact">Please contact me here</Link></p>
            </Layout>        
        )
}

export default AboutPage