import { useState } from "react";
import "./App.scss";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [money] = useState(100000);
  const [total, setTotal] = useState();

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header total={total} money={money} />
      <div className="container">
        <Products
          money={money}
          cart={cart}
          setCart={setCart}
          total={total}
          setTotal={setTotal}
        />
        {cart.length>0 ? <Cart setTotal={setTotal} setCart={setCart} total={total} cart={cart} />: null}
        
      </div>
    </div>
  );
}

export default App;
