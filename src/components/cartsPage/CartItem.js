import React from "react";
import {
  FaTrash,
  FaChevronCircleDown,
  FaChevronCircleUp
} from "react-icons/fa";

export default function CartItem({
  cartItem,
  increment,
  decrement,
  removeItem
}) {
  const { id, title, price, count, total, image } = cartItem;
  return (
    <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
      {/* image  */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} title="product" className="img-fluid" width="60" />
      </div>
      {/* end of image  */}
      {/* title  */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">product :</span>
        {title}
      </div>
      {/* end of title  */}
      {/* price  */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <span className="d-lg-none">price : $</span>
        {price}
      </div>
      {/* end of price  */}
      {/* count control  */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown
              className="text-primary cart-icon"
              onClick={() => decrement(id)}
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp
              className="text-primary cart-icon"
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      {/* end of count control  */}
      {/* remove  */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <FaTrash
          className="text-danger cart-icon"
          onClick={() => removeItem(id)}
        />
      </div>
      {/* end of remove  */}
      {/* remove  */}
      <div className="col-10 mx-auto col-lg-2 ">
        <p className="text-muted">item total: ${total}</p>
      </div>
      {/* end of remove  */}
    </div>
  );
}
