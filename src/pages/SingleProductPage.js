import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { ProductConsumer } from "../context";
import singleProductBcg from "../img/singleProductBcg.jpeg";
export default function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductBcg} title="single product" />
      <ProductConsumer>
        {value => {
          const { singleProduct, addToCart, loading } = value;
          if (loading) {
            console.log("hello");
            return <h1>product loading...</h1>;
          }
          const {
            company,
            description,
            id,
            price,
            title,
            image
          } = singleProduct;
          return (
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 col-sm-8">
                    <img
                      src={image}
                      className="img-fluid"
                      alt="single product"
                    />
                  </div>
                  <div className="col-10 mx-auto col-md-6 col-sm-8">
                    <h5 className="text-title mb-4">model :{title}</h5>
                    <h5 className="text-capitalize mb-4 text-muted">
                      company :{company}
                    </h5>
                    <h5 className="text-main mb-4 text- capitaize">
                      price :{price}
                    </h5>
                    <p className="text-capitalize text-title mt-3">
                      some info about product:
                    </p>
                    <p>{description}</p>
                    <button
                      className="main-link"
                      type="button"
                      style={{ margin: "0.75rem" }}
                      onClick={() => addToCart(id)}
                    >
                      add to cart
                    </button>
                    <Link
                      to="/products"
                      className="main-link"
                      style={{ margin: "0.75rem" }}
                    >
                      back to products
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    </>
  );
}
