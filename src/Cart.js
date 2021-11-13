import React from 'react';
import imgPlus from "./img/add.png";
import imgMinus from "./img/minus.png";
import imgTrash from "./img/trash-bin.png";

function Cart(props) {
  const { cartItems, addProduct, removeProduct, clearProduct, clearCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
      <div className="cart-container">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div className="text-empty-cart">Cart is empty</div>}
      {cartItems.map((item) => (
          <div key={item.id} className="cart">
            <div className="img-name">
                <div className="cart-image"><img src={item.image} alt="" /></div>
                <div className="cart-product-name">{item.name}</div>
            </div>
            <div className="other-product-info">
                <div className="cart-plus-minus">
                    <div className="inc" onClick={() => addProduct(item)}>
                        <img src={imgPlus} alt="plus" />
                    </div>
                    <div className="cart-qty">
                        {item.qty} 
                    </div>
                    <div className="dec" onClick={() => removeProduct(item)}>
                        <img src={imgMinus} alt="minus" />
                    </div>
                </div>
                <div className="cart-product-price">
                {item.qty} x {item.price}€ = {item.qty * item.price}€
                </div>
                <div className="trash-bin" onClick={() => clearProduct(item)}>
                    <img src={imgTrash} alt="trash" />
                </div>

            </div>   
          </div>
          
        ))}
        {cartItems.length !== 0 && (
            <div className="summary">
                <div className="">Products Price: {itemsPrice}€</div>
                <div className="clear-cart" onClick={() => clearCart()}>CLEAR CART</div>
            </div>
        )}
      </div>
    )
}
export default Cart;
