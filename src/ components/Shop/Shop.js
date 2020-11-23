import React, { useState, useEffect } from 'react'

import Sidebar from './Sidebar'

export default function Shop() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetchShopData()
  }, [])

  const fetchShopData = async () => {
    const data = await fetch('https://fakestoreapi.com/products/')
      .then(response=>response.json(), reason =>console.log(reason))
    console.log(data)
    setItems(data)
  }

  return (
    <div className="shop">
      <Sidebar />
      <div className="items">
        {items.map(item => (
          <h4>{item.title}</h4>
        ))}
      </div>
    </div>
  )
}
