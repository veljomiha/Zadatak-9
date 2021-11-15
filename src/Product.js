import React from "react";
import { Link } from "react-router-dom";

function Product(props){
    const{product, addProduct} = props;
    return(
        <div className="product" key={product.id}>
            <Link to={`/product${product.id}`}>
            <div className="product-image">
                <img src={product.image} alt="not found" />
            </div>
            </Link>
            <div className="product-details">
                <div className="product-name">
                     {product.name}
                </div>
                <div className="product-price">
                    {product.price + "€"}
                </div>
                <div className="add-to-cart" onClick={() => addProduct(product)}>
                    ADD TO CART
                </div>
            </div>
        </div>
    )
}

export default Product;