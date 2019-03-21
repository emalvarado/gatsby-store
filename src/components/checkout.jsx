import React, {Component} from 'react'

const buttonStyles = {
  fontSize: '13px',
  textAlign: 'center',
  color: '#fff',
  outline: 'none',
  padding: '12px 60px',
  boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
  backgroundColor: 'rgb(255, 178, 56)',
  borderRadius: '6px',
  letterSpacing: '1.5px',
}

const Checkout = class extends Component {
  componentDidMount () {
    this.stripe = window.Stripe('pk_test_FLghdYFLkoTz2zNOcKlZRKWU', {
      betas: ['checkout_beta_4'],
    })
  }

  async redirectToCheckout(event) {
    event.preventDefault()
    const {error} = await this.stripe.redirectToCheckout({
      items: [{sku : 'sku_EjekS2kQnCzJeY', quantity: 1}],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })
    if(error) {
      console.warn('Error:', error)
    }
  }

  render() {
    return (
      <button
      style={buttonStyles}
      onClick={event => this.redirectToCheckout(event)}
      >
      BUY A STICKER
      </button>
    )
  }
}

export default Checkout