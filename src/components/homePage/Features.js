import React from 'react';
import Title from "../Title";
import {ProductConsumer} from "../../context/context";
import Product from "../Product";
import {Link} from "react-router-dom"
export default function Features() {
  return (
    <section className="py-5">
      <div className="container">
        {/* title  */}
        <Title title="featured products" center="true"></Title>
        {/* products  */}
        <div className="row my-5">
          <ProductConsumer>
            {value => {
              const {featuredProducts} = value;
              return featuredProducts.map(product => <Product key={product.id} product={product}/>)
            }}
          </ProductConsumer>
        </div>
        <div className="row my-5">
          <div className="col text-center">
            <Link to="/products" className="main-link">our products</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
