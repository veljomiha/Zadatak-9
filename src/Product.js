import React from "react";

function Product(props){
    const{product, addProduct} = props;
    return(
        <div className="product" key={product.id}>
            <div className="product-image">
                <img src={product.image} alt="not found" />
            </div>
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