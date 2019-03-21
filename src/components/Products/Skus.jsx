import React, {Component} from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from "./SkuCard"
import "./Skus.scss"

class Skus extends Component {
  state = {
    stripe: window.Stripe("pk_test_FLghdYFLkoTz2zNOcKlZRKWU", {
      betas: ["checkout_beta_4"],
    }),
  }
  
  render() {
    return (
      <StaticQuery
      query={graphql`
        query SkusForProduct {
          skus: allStripeSku {
            edges {
              node {
                id
                currency
                price
                attributes {
                  name
                }
              }
            }
          }
        }
      `}
      render={({ skus }) => (
        <div className='container'>
          {skus.edges.map(({ node: sku }) => (
            <SkuCard key={sku.id} sku={sku} stripe={this.state.stripe} />
          ))}
        </div>
      )}
    />
    )
  }
}

export default Skus