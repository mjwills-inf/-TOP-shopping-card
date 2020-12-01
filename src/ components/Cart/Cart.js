import React from 'react'
import './Cart.css'

export default function Cart(props) {

  console.log(props.cart)

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <div className="cart-item-container">
        {props.cart.map((item) =>
          <div className="cart-item" key={item.id}>
            <img className="cart-item-image" src={`${item.image}`} alt={`${item.title}`} />
            <div className="cart-item-info">
              <h4>{item.title}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
