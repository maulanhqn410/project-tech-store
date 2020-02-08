import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Contact from "./pages/ContactPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import SideCart from "./components/SideCart";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <SideBar />
        <SideCart />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Footer/>
      </>
    );
  }
}

export default App;
