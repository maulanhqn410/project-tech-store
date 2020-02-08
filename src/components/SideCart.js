import React from 'react';
import {ProductConsumer} from "../context";
import styled from "styled-components";
import {Link} from 'react-router-dom';
export default function SideCart() {
  return (
    <>
      <ProductConsumer>
        {value => {
          const {cartOpen, carts, closeCart, cartTotal} = value;
          return (
            <SideWrapper show ={cartOpen} onClick={closeCart}>
              <ul>
                {carts.map(item =>{
                  return (
                    <li key={item.id} className="cart-item mb-4">
                      <img src={item.image} alt="cart item" width="35"/>
                      <div className="mt-3">
                        <h6 className="text-uppercase">{item.title}</h6>
                        <h6 className="text-title text-capitalize">
                          amount :{item.count}
                        </h6>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <h4 className="text-main text-capitalize">cart total :{cartTotal}</h4>
              <div className="text-center my-5">
                <Link to="/cart" className="main-link">
                  cart page
                </Link>
              </div>
            </SideWrapper>
          )
        }}
      </ProductConsumer>
    </>
  )
}

const SideWrapper = styled.div`
  position: fixed;
  top: 61.4px;
  right: 0;
  width: 100%;
  height: 100%;
  transform: ${props => props.show? "translatex(0)" : "translatex(100%)"};
  background: var(--mainGrey);
  transition: var(--mainTransition);
  border-left: 4px solid var(--primaryColor);
  z-index: 1;
  overflow: scroll;
  padding: 2rem;
  ul{
    list-style-type:none;
  }
  @media screen and (min-width: 576px){
    width: 20rem;
  }
`
