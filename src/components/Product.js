import React from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import {FaSearch, FaCartPlus}from "react-icons/fa";
import styled from "styled-components";

export default function Product({product}) {
  
  return (
    <ProductConsumer>
      {value => {
        const {setSingleProduct, addToCart} =value;
        return(
          <ProductWrapper className="col-10 max-auto col-lg-4 col-md-6 col-sm-8 my-3">
            <div className="card">
              <div className="img-container">
                <img src={product.image} className="card-img-top p-5" alt="product" style={{height:"320px"}}/>
              </div>
              <div className="product-icon">
                <Link to={`/products/${product.id}`} onClick={() => setSingleProduct(product.id)}>
                  <FaSearch className="icon"/>
                </Link>
                <FaCartPlus className="icon" onClick={() => addToCart(product.id)}/>
              </div>
              <div className="card-body d-flex justify-content-between">
                <p className="mb-0">{product.title}</p> 
                <p className="mb-0 text-main">{product.price}</p>
              </div>
            </div> 
          </ProductWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const ProductWrapper = styled.div`
  .card{
    box-shadow: 14px 10px 9px -7px rgba(0,0,0,0.63);
    transition: var(--mainTransition);
    height: 100%;
  }
  .card:hover{
    box-shadow: 19px 20px 7px -5px rgba(0,0,0,0.63);
    cursor: pointer;
  }
  .card-img-top{
    transition: var(--mainTransition);
  }
  .card:hover .card-img-top{
    transform: scale(1.15);
    opacity: 0.3;
  }
  .img-container{
    position: relative;
  }
  .product-icon{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: var(--mainTransition);
    opacity: 0;
  }
    .icon{
      font-size: 2.5rem;
      margin:1rem;
      padding: 0.5rem;
      color: var(--primaryColor);
      background: var(--mainBlack);
      border-radius: 0.5rem
    }
    .card:hover .product-icon{
      opacity: 1
    }
    .card-body{
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
`