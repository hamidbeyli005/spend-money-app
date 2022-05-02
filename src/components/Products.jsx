import React from "react";
import products from "../products.json";
import Product from "./Product";
import "../App.scss";

export default function Products({ total, setTotal, cart, setCart, money }) {
  return (
    <div className="products">
      {products.map((product) => (
        <Product
        
          cart={cart}
          money={money}
          setCart={setCart}
          key={product.id}
          total={total}
          setTotal={setTotal}
          product={product}
        />
      ))}
    </div>
  );
}
