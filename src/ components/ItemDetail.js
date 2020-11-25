import React, { useState, useEffect } from 'react';

import Sidebar from './Sidebar'

export default function ItemDetail(match) {

  const [item, setItem] = useState({})

  useEffect(() => {
    fetchItemData()
  }, []);

  const fetchItemData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${match.match.params.id}`)
    const dataItem = await data.json()
    console.log("dataItem:", dataItem)
    setItem(dataItem)

    console.log("item:", item)
  }

  return (
    <div>
      {item.title}
    </div>
  )
}
