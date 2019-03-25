import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Skus from '../components/Products/Skus'

const ListedProductsPage = () => (
  <Layout>
    <SEO title="List of Products" />
    <h1>Check em out!</h1>
    <Skus />
    <Link to='/'>Back to Homepage</Link>
  </Layout>
)

export default ListedProductsPage