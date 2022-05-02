import React from "react";
import "../App.scss";


export default function Header({ money, total }) {
  return <div className="header">Harcayacak {money - total} $ Paranız Var</div>;
}
