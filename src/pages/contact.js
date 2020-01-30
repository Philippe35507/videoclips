import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            
            <p>Hello, I am Philippe</p>
            <p>I live in Spain</p>
            <p>My Tweeter <a href="https://twitter.com/ctahiche" rel = "noopener noreferrer" target="_blank">here</a></p>
        </Layout>
    )
}

export default ContactPage