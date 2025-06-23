import React from "react";
import product from "../assets/product.png";
const ProductCard = () => {
  return (
    <div className="py-8 ">
      <div className="card mx-8  bg-base-100 shadow-xl border-2 rounded-xl ">
        <figure>
          <img src={product} alt="car!" />
        </figure>

        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
