import React, { useState, useEffect } from 'react';

import Sidebar from '../Sidebar'
 
export default function ItemDetail({ match }) {

  useEffect(() => {
    console.log("match", match)
  })
  

  return (
    <div>
      <Sidebar />
      ItemDetail
    </div>
  )
}
