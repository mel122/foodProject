import React, { Component } from "react";
import "./App.css";
import ShoppingCart from "./components/shoppingcart";
import ProductList from "./components/productList";
import Hero from "./components/hero";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  //name= props.inventory[0].name
  //price = props.inventory[0].price
  // Inventory - we might normally prefer to use a database, but this is a good placeholder.
  inventory = [
    { name: "Step 1", price: 1.99 },
    { name: "Step 2", price: 1.5 },
    { name: "Step 3", price: 2.5 },
    { name: "Step 4", price: 0.5 },
    { name: "Step 5", price: 2.5 }
  ];

  // The add and remove functions should update the state's cart and the total.
  // The add function has been built already. The remove function has not.
  addToShoppingCart = (item) => {
    this.setState((state) => {
      state.cart.push(item);
      return state;
    });
    console.log(this.state.cart);
  };
  //Props.state. cart
  removeFromShoppingCart = (item) => {
    this.setState((state) => {
      //indexOf() + Splice

      state.cart.reduce(item);
      return state;
    });
  };

  render() {
    return (
      <div className="App">
        <Hero />
        <ShoppingCart amount={this.state.cart} />
        <div className="main">
          <ProductList
            inventory={this.inventory}
            addToShoppingCart={this.addToShoppingCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
