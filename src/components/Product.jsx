import React, { useEffect, useState } from "react";
import "../App.scss";

export default function Product({
  money,
  product,
  total,
  setTotal,
  cart,
  setCart,
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, item) => {
        return acc + item.amount * item.price;
      }, 0)
    )
    if (cart.length <= 0) {
      setCount(0);
    }
  }, [setTotal,cart]);

  const addCart = (product) => {
    setCount(count + 1);
    const checkCart = cart.find((item) => item.id === product.id);
    if (checkCart) {
      checkCart.amount += 1;
      setCart([...cart.filter((item) => item.id !== product.id), checkCart]);
    } else {
      setCart([
        ...cart,
        {
          id: product.id,
          price: product.price,
          name: product.name,
          amount: 1,
        },
      ]);
    }
  };
  const removeCart = (product) => {
    const checkCart = cart.find((item) => item.id === product.id);
    if (count > 0) {
      setCount(count - 1);
      if (checkCart) {
        checkCart.amount -= 1;
        setCart([...cart.filter((item) => item.id !== product.id), checkCart]);
      }
    }
  };
  return (
    <div className="card">
      <div className="product">
        <img src={product.images} alt="" />
        <h3>{product.name}</h3>
        <p>{product.price} $ </p>
        <div>
          <button
            className="sell"
            disabled={!count}
            onClick={() => removeCart(product)}
          >
            Sat
          </button>
          <p>{count}</p>
          <button
            className="buy"
            disabled={money - total >= product.price ? false : true}
            onClick={() => addCart(product)}
          >
            Satın al
          </button>
        </div>
      </div>
    </div>
  );
}
