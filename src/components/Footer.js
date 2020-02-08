import React from "react";
import { ProductConsumer } from "../context";
import styled from "styled-components";
export default function Footer() {
  return (
    <>
      <ProductConsumer>
        {value => {
          const { socialData } = value;
        
          return <FooterWrapper>
            <div className="container py-3">
              <div className="row">
                <div className="col-md-6">
                    <p className="text-capitalize">
                      copyright &copy; tech store {new Date().getFullYear()}. all right reserved {" "}
                    </p>
                </div>
                <div className="col-md-6 d-flex justify-content-around">
                  {socialData.map(data => {
                    return <a href={data.url} key={data.id}>{data.icon}</a>
                  })}
                </div>
              </div>
            </div>
          </FooterWrapper>;
        }}
      </ProductConsumer>
    </>
  );
}

const FooterWrapper = styled.footer`
background: var(--darkGrey);
color: var(--mainWhite);
.icon{
  font-size: 1.5rem;
  color: var(--mainWhite);
  transition: var(--mainTransition);
}
.icon:hover{
  color: var(--primaryColor)
}
`;
