import React, { useState } from "react";
import Title from "./Title";

function Cart() {
  let [cartCount, setcartCount] = useState(0);

  function increment() {
    setcartCount(cartCount + 1);
  }
  function decrement() {
    setcartCount(cartCount - 1);
  }

  return (
    <div>
      <button id="cart">
        <p>
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios-filled/50/shopping-cart.png"
            alt="shopping-cart"
          />
          {"  "}
          Cart : {cartCount}
        </p>
      </button>
      <Title />
      <button onClick={increment}>Add to Cart</button>
      <button onClick={decrement}>Remove from Cart</button>
    </div>
  );
}

export default Cart;
