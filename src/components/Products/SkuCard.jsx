import React, {Component} from 'react'
import './SkuCard.scss'

const formatPrice = (amount, currency) => {
  let price = (amount/100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol'
  })
  return numberFormat.format(price)
}

const SkuCard = class extends Component {
  async redirectToCheckout(event, sku, quantity = 1) {
    event.preventDefault()
    const {error} = await this.props.stripe.redirectToCheckout({
      items: [{sku, quantity}],
      successURL: `http://localhost:8000/page-2`,
      cancelUrl: `http://localhost:8000/listedProducts`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

  render() {
    const sku = this.props.sku
    return (
      <div className='card'>
        <h4>{sku.attributes.name}</h4>
        <p>Price: {formatPrice(sku.price, sku.currency)}</p>
        <button
        className='button'
        onClick={e => this.redirectToCheckout(e, sku.id)}
        >
        BUY ME
        </button>
      </div>
    )
  }
}

export default SkuCard