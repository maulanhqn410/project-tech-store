import React from 'react'
import Title from "../Title";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import CartColum from "./CartColum";

export default function Cart() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="your cart items" center />
      </div>
      <CartColum />
      <CartList />
      <CartTotal />
    </section>
  )
}
