import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";

export default function FilterProducts() {
  return (
    <ProductConsumer>
      {value => {
        const {
          search,
          min,
          max,
          company,
          companyArray,
          price,
          shipping,
          handleChange
          
        } = value;
        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
              <FilterWrapper>
                {/* text search  */}
                <div>
                  <label htmlFor="search">search products</label>
                  <input
                    id="search"
                    name="search"
                    className="filter-item"
                    type="text"
                    value={search}
                    onChange={handleChange}
                  />
                </div>
                {/* end of text search  */}
                {/* category search  */}
                <div>
                  <label htmlFor="company">company</label>
                  <select
                    value={company}
                    name="company"
                    onChange={handleChange}
                    id="company"
                    className="filter-item"
                  >
                    {companyArray.map((item, index) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* end of category search  */}
                {/* price range  */}
                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price : <span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    name="price"
                    type="range"
                    className="filter-price"
                    min={min}
                    max={max}
                    value={price}
                    id="price"
                    onChange={handleChange}
                  />
                </div>
                {/* end of price range  */}
                {/* free shipping  */}
                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    value ={shipping }
                    onChange={handleChange}
                  />
                </div>
                {/* end of free shipping  */}
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  label {
    font-weight: bold;
    text-transform: capitalize;
  }
  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
