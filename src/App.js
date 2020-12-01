import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Nav from './ components/Nav';
import Home from './ components/Home/Home';
import Shop from './ components/Shop/Shop';
import Cart from './ components/Cart/Cart';
import ItemDetail from './ components/Shop/ItemDetail';

function App() {

  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetchShopData()
  }, [])

  const fetchShopData = async () => {
    const data = await fetch('https://fakestoreapi.com/products/')
      .then(response=>response.json(), reason =>console.log(reason))
    setItems(data)
    console.log(data)
  }
  
  // copying items to avoid errors in changing original objects?
  const addToCart = (item) => {
    let itemCopy = {...item}
    let cartCopy = [...cart]
    let targetItem = cartCopy.find(item => item.id === itemCopy.id)
    if (targetItem) {
      targetItem.quantity += 1
    } else {
      itemCopy.quantity = 1
      cartCopy.push(itemCopy)
    }    
    setCart(cartCopy)
  }

  const removeFromCart = (id) => {
    let cartCopy = [...cart]
    cartCopy.filter(item => item.id === id)
    setCart(cartCopy)
  }

  const amendQuantity = () => {
    
  }

  useEffect(() => {
    console.log("useEffect cart: ", cart)
  })

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
          
          {/* render used below instead of component={} so that props can be passed */}
          <Route 
            path="/shop/:id" exact 
            render={(props) => (
              <ItemDetail {...props} addToCart={addToCart} />
            )}
          />       
                          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
