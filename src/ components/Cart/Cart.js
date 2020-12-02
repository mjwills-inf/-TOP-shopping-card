import React from 'react'
import './Cart.css'

export default function Cart(props) {

  const handleChange = (e) => {
    let id = e.target.parentNode.parentNode.parentNode.id
    props.amendQuantity(Number(id), Number(e.target.value))
  }

  const handleDelete = (e) => {
    let id = e.target.parentNode.parentNode.parentNode.id
    props.removeFromCart(Number(id))
  }

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <div className="cart-item-container">
        {props.cart.map((item) =>
          
          <div className="cart-item" key={item.id} id={item.id}>
            <img className="cart-item-image" src={`${item.image}`} alt={`${item.title}`} />
            <div className="cart-item-info-quant">
              <h5>{item.title}</h5>
              <label htmlFor="quantity">
                Quantity:{' '} 
                <select value={item.quantity} onChange={handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="5">6</option>
                  <option value="5">7</option>
                  <option value="5">8</option>
                  <option value="5">9</option>
                  <option value="5">10</option>

                </select>
                {' '}at £{item.price}
              </label>
              <div className="del">
                <input type="button" name="delete" 
                  value="Delete Item" onClick={handleDelete}/>  
              </div>          
            </div>
          </div>

        )}
      </div>
    </div>
  )
}
