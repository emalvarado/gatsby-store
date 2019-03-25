import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Checkout from '../components/checkout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Checkout/>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <br/>
    <Link to='/listedProducts/'>See all of our products</Link>
  </Layout>
)

export default IndexPage
