import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Sidebar from '../Sidebar'
import './Shop.css'


export default function Shop(props) {


  return (
    <div className="shop">
      <Sidebar />

      <div className="shop-main">      


          <div className="items-container">
            {props.items.map(item => (          
                <div key={item.id} className="item-card">
                
                  <Link to={`/shop/${item.id}`}>
                    {item.title}
                  </Link>
                
                
                </div>
            ))}

          </div>


      </div>
    </div>
  )
}
