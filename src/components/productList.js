import React from "react";
import "./productList.css";
import Product from "./product";

function ProductList(props) {
  return (
    <div className="ProductList">
      <Product
        name={props.inventory[0].name}
        price={props.inventory[0].price}
        add={props.addToShoppingCart}
      />
      <Product
        name={props.inventory[1].name}
        price={props.inventory[1].price}
        add={props.addToShoppingCart}
      />
      <Product
        name={props.inventory[2].name}
        price={props.inventory[2].price}
        add={props.addToShoppingCart}
      />
      <Product
        name={props.inventory[3].name}
        price={props.inventory[3].price}
        add={props.addToShoppingCart}
      />
      <Product
        name={props.inventory[4].name}
        price={props.inventory[4].price}
        add={props.addToShoppingCart}
      />
    </div>
  );
}

export default ProductList;
