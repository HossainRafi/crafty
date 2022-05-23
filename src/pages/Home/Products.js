import React, { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="pt-24 pb-16">
      <div className="text-center">
        <h3 className="text-blue-900 text-4xl font-bold font-serif uppercase">
          Product List
        </h3>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
