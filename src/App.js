import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './ components/Nav';
import Home from './ components/Home/Home';
import Shop from './ components/Shop/Shop';
import Cart from './ components/Cart/Cart';
import ItemDetail from './ components/ItemDetail';

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/cart" exact component={Cart}/>
          <Route path="/shop/:id" component={ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
