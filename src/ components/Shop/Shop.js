import React, { useState, useEffect } from 'react'

export default function Shop() {

  useEffect(() => {
    fetchShopData()
  }, [])

  const fetchShopData = async () => {
    const data = await fetch('')
  }

  return (
    <div>
      Shop
    </div>
  )
}
