import React from "react";
import "../App.scss";

export default function Cart({ cart, total, setCart, setTotal }) {
  const Reset = () => {
    setCart([]);
    setTotal(0);
  };
  return (
      <div className="Cart">
    <div className="cartDetail">
      <h3>Alışveriş detayları</h3>
      {cart.map((element) => (
        <div className="productName" key={element.id}>
          {element.name} : <span className="amount">{element.amount} adet</span>
        </div>
      ))}
      <div className="sum">
        {" "}
        {total === 0 ? (
          <div>Sepetiniz Boş</div>
        ) : (
          <span>Toplam : {total} $ </span>
        )}
      </div>
      <button className="reset" onClick={() => Reset()}>
        Sepeti Sıfırla
      </button>
    </div>
    </div>
  );
}
