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

  const itemTotal = (item) => {
    return Number(item.price) * item.quantity
  }

  const calcTotal = (cart) => {
    if (cart.length === 0) {
      return 0.00.toFixed(2)
    } else {
      let total = 0
      for (let i=0; i<cart.length; i++) {
        total += itemTotal(cart[i])
      }
      return total.toFixed(2)
    }
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
                <div>
                  Item Total: £{''}{itemTotal(item)}  
                </div> 
                <input type="button" name="delete" className="del-button" 
                  value="Delete Item" onClick={handleDelete}/>  
              </div>      
            </div>
          </div>

        )}
      </div>
      <div className="total-pay">
        Total to Pay: £{calcTotal(props.cart)}
      </div>
    </div>
  )
}
