import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Services from "../components/homePage/Services";
import Features from "../components/homePage/Features";
export default function HomePage() {
  return (
    <>
      <Hero title="awesome gadgets" max="true">
        <Link
          to="/products"
          className="main-link"
          style={{ marginTop: "2rem" }}
        >
          our products
        </Link>
      </Hero>
      <Services />
      <Features />
    </>
  );
}
