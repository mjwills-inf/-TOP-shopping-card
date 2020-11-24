import React, { useState, useEffect } from 'react';

export default function ItemDetail(match) {

  const [item, setItem] = useState()

  useEffect(() => {
    fetchItemData()
    console.log("match", match)
  }, [])

  const fetchItemData = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${match.match.params.id}`)
      .then(response=>response.json(), reason =>console.log(reason))
    setItem(data)
    console.log(data)
    console.log(item)
  }

  return (
    <div>
      Item Details
    </div>
  )
}
