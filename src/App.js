import React from 'react';
import './App.css';
import Header from './Header';
import Navbar from "./Navbar";
import Products from "./Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import data from './data';
import Cart from './Cart';
import { useState, useEffect } from 'react';
// import Search from './Search';

const cartFromLS = JSON.parse(localStorage.getItem('cart') || "[]");

function App() {
  const [cartItems, setCartItems] = useState(cartFromLS);

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartItems));
  },[cartItems])

  const { products } = data;
  const addProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const removeProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const clearProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  const clearCart = () =>{
    setCartItems([]);
  }

  return (
    <div className="App">
      <Router>
        <Navbar countCartItems={cartItems.length}/>
          <Switch>
            <Route exact path="/" >
              <Header />
              {/* <Search/> */}
              <Products products={products} addProduct={addProduct}></Products>
            </Route>
            <Route path="/cart">
              <Cart cartItems={cartItems}
                    addProduct={addProduct}
                    removeProduct={removeProduct}
                    clearProduct={clearProduct}
                    clearCart = {clearCart}
                    />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
