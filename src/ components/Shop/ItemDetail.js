import React, { useState, useEffect } from 'react';

import Sidebar from '../Sidebar'
import './ItemDetail.css'
 
export default function ItemDetail({ match }) {

  const [state, setState] = useState({})

  useEffect(() => {
    console.log("match", match.params.id)
    getItems()
  }, [])

  const getItems = async () => {
    let data = await fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    .then(response=>response.json(), reject=>console.log(reject))
    setState(data)
  }
  

  return (
    <div className="item-detail">
      <Sidebar />
        <div className="detail-main">
          {state.title}
          <img src={`${state.image}`}/>
          {state.description}
          {state.price}
        </div>
    </div>
  )
}
