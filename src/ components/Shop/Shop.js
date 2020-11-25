import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar'
import Cart from '../Cart/Cart'
import ItemDetail from '../ItemDetail';

export default function Shop(props) {


  return (
    <div className="shop">
      <Sidebar />

      <div className="shop-main">
        <Switch>
        <Route path="/cart" exact>
          <Cart 
          
          />   
        </Route> 

        <Route path="/shop/:id" component={ItemDetail}/>
        {/* <div className="items">
          {items.map(item => (          
              <div key={item.id}>
                <Link to={`/shop/${item.id}`}>{item.title}</Link>
              </div>
            
          ))}
        </div> */}

      </Switch>

      </div>
    </div>
  )
}
