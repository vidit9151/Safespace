import React from "react";
import ProductCard from "./ProductCard";
const ProductFPage = () => {
  return (
    <div className="grid grid-cols-1 items-center  mx-5  justify-center  gap-5 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <ProductCard />
      </div>
      <div>
        {" "}
        <ProductCard />
      </div>{" "}
      <div>
        {" "}
        <ProductCard />
      </div>{" "}
      <div>
        {" "}
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductFPage;
