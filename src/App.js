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
import ProductDetails from './ProductDetails';
// import Search from './Search';

const cartFromLS = JSON.parse(localStorage.getItem('cart') || "[]");
const cartFromLS2 = JSON.parse(localStorage.getItem('cart-count'));

function App() {
  const [cartItems, setCartItems] = useState(cartFromLS);
  const [count, setCount] = useState(cartFromLS2);

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartItems));
  },[cartItems])

  useEffect(()=>{
    localStorage.setItem("cart-count",JSON.stringify(count));
  },[count])

 

  const { products } = data;
  const addProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
      setCount(count + 1);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      setCount(count + 1);
    }
  };
  const removeProduct = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      setCount(count - 1);

    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
      setCount(count - 1);
    }
  };

  const clearProduct = (product) => {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      setCount(count - 1);
      setCount(count - product.qty);
  };

  const clearCart = () =>{
    setCartItems([]);
    setCount(0);

  }

  return (
    <div className="App">
      <Router>
        <Navbar countCartItems={count}/>
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
            <Route path="/product/:id">
              <ProductDetails></ProductDetails>
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
