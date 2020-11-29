import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import Nav from './ components/Nav';
import Home from './ components/Home/Home';
import Shop from './ components/Shop/Shop';
import Cart from './ components/Cart/Cart'
import ItemDetail from './ components/Shop/ItemDetail';

function App() {

  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  const addToCart = () => {

  }

  const removeFromCart = () => {

  }

  const amendQuantity = () => {
    
  }

  useEffect(() => {
    fetchShopData()
  }, [])

  const fetchShopData = async () => {
    const data = await fetch('https://fakestoreapi.com/products/')
      .then(response=>response.json(), reason =>console.log(reason))
    setItems(data)
    console.log(data)
  }

  return (
    <Router> 
      <div className="App">
        <Nav />

        <Switch>       
          <Route path="/" exact component={Home} />          
          
          <Route path="/shop" exact>
            <Shop items={items} />
          </Route>        
          
          <Route path="/cart" exact>
            <Cart cart={cart}/>
          </Route>

          <Route path="/shop/:id" exact component={ItemDetail} />
            
          
                          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
