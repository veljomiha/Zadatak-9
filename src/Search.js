// import React, { useState } from 'react';
// import Products from './Products';
// import data from './data';

// function Search() {
//   const [searchField, setSearchField] = useState("");
//   const [cartItems, setCartItems] = useState([]);

//   const { products } = data;
//   const addProduct = (product) => {
//     const exist = cartItems.find((x) => x.id === product.id);
//     if (exist) {
//       setCartItems(
//         cartItems.map((x) =>
//           x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, qty: 1 }]);
//     }
//   };

//   const searchProducts = products.filter(
//     product => {
//       return (
//         product
//         .name
//         .toLowerCase()
//         .includes(searchField.toLowerCase())
//       );
//     }
//   );

//   const handleChange = e => {
//     setSearchField(e.target.value);
//   };

//   function searchList() {
//     return (
//         <div>
//         <Products products={searchProducts} addProduct={addProduct}/>
//         </div>
//     );
//   }

//   return (
//     <div className="search">
//         <input type = "search" onChange = {handleChange} placeholder="Search mobile"/>
//       {searchList()}
//     </div>
//   );
// }

// export default Search;