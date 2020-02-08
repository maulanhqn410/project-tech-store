import React from 'react';
import Hero from "../components/Hero";
import productsBcg from "../img/productsBcg.jpeg";
import Products from "../components/productsPage/Products";

export default function ProductsPage() {
  return (
    <>
      <Hero img={productsBcg} />
      <Products/>
    </>
  )
}