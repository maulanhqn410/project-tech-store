import React from "react";
import Hero from "../components/Hero";
import CartSection from "../components/cartsPage";
import cartBcg from '../img/storeBcg.jpeg'
export default function CartPage() {
  return (
    <div>
      <Hero img={cartBcg} />
      <CartSection />
    </div>
  );
}
