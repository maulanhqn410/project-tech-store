import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
export default function SideBar() {
  return (
    <>
      <ProductConsumer>
        {value => {
          const { sidebarOpen, links, handleSidebar } = value;
          return (
            <SideWapper show={sidebarOpen}>
              <ul>
                {links.map(link => {
                  return (
                    <li key={link.id}>
                      <Link to={link.path} className="sidebar-link" onClick={handleSidebar}>
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SideWapper>
          );
        }}
      </ProductConsumer>
    </>
  );
}

const SideWapper = styled.nav`
  position: fixed;
  top: 61.4px;
  left: 0;
  width: 100%;
  height:100%;
  background: var(--mainGrey);
  border-right: 4px solid var(--primaryColor);
  z-index: 1;
  transition: var(--mainTransition);
  transform: ${props => props.show? "translateX(0)" : "translateX(-100%)"};
  ul{
    list-style-type: none;
  }
  .sidebar-link{
    display: block;
    color: var(--mainBlack);
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: capitalize;
    padding: 0.5rem 1.5rem;
    transition: var(--mainTransition);
  }
  .sidebar-link:hover{
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }
  @media screen and (min-width: 576px){
    width: 20rem
  }
`;
