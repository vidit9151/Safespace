import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import ProductFPage from "../components/ProductFPage";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <h1 className=" text-3xl md:text-4xl text-center mt-16 mb-3 font-bold">
        HERO PRODUCTS
      </h1>
      <ProductFPage />
    </div>
  );
};

export default Home;
