import React from 'react';
import Product from './Product';

function Products(props) {
    const { products, addProduct } = props;
    return (
            <div className="products">
            {products.map((product) => (
                <Product key={product.id} product={product} addProduct={addProduct}></Product>
            ))}
            </div>
    );
  }

export default Products;