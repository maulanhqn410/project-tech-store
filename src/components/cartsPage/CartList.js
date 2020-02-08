import React from "react";
import { ProductConsumer } from "../../context";
import CartItem from "./CartItem";

export default function CartList() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {value => {
              const { increment, decrement, removeItem, carts } = value;
              if (carts.length === 0) {
                return (
                  <h1 className="text-title text-center my-4">
                    your card is currently emty
                  </h1>
                );
              }
              return (
                <>
                  {carts.map(item => (
                    <CartItem
                      key={item.id}
                      cartItem={item}
                      increment={increment}
                      decrement={decrement}
                      removeItem={removeItem}
                    />
                  ))}
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}
