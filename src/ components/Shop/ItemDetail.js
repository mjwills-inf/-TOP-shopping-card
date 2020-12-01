import React, { useState, useEffect } from 'react';

import Sidebar from '../Sidebar'
import './ItemDetail.css'
 
export default function ItemDetail(props) {

  const [item, setItem] = useState({})

  useEffect(() => {
    getItems()
  }, [])

  const getItems = async () => {
    let data = await fetch(`https://fakestoreapi.com/products/${props.match.params.id}`)
    .then(response=>response.json(), reject=>console.log(reject))
    data.price = data.price.toFixed(2)
    setItem(data)
  }
  
  const addToCart = () => {
    props.addToCart(item)
  }

  return (
    <div className="item-detail">
      <Sidebar cart={props.cart}/>
        <div className="detail-main">
          <h4>{item.title}</h4>
          <img className="detail-image" src={`${item.image}`} alt={`${item.title}`}/>
          <p>{item.description}</p>
          <p>£{item.price}</p>
          <input type="button" name="addToCart" 
            id="addToCart" value="Add To Cart" onClick={addToCart}/>
        </div>
    </div>
  )
}
