import React from "react";
import "./shoppingcart.css";

function ShoppingCart(props) {
  console.log(props);
  return (
    <div className="ShoppingCart">
      {props.amount.map((item) => {
        return (
          <div className="cartItem">
            <h3>{item}</h3>
            <h5>{recipe}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default ShoppingCart;
