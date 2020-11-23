import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
            <div key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.title}</Link>
            </div>
          
        ))}
      </div>
    </div>
  )
}
