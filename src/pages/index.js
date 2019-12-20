import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Noisy Trumpet - GatsbyJS WP Boilerplate</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/sample-page" style={{ display: `block` }}>Go to Sample Page</Link>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
