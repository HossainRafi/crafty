import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, minquantity, maxquantity, desc, price } = product;
  console.log(product);
  return (
    <div className="card bg-gray-100">
      <figure className="px-2 pt-5">
        <img src={img} alt="" className="rounded-xl w-[230px] h-[190px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl mx-auto font-bold">{name}</h2>
        <p className="text-justify">{desc}</p>
        <p className="font-bold">Available Product: {maxquantity} Units</p>
        <p className="font-bold">Minimum Order: {minquantity} Units</p>
        <p className="font-bold">Price: ${price} Per Unit</p>
      </div>
      <div className="mx-auto pb-5">
        <Link
          to={`purchase/${_id}`}
          className="btn btn-md w-32 btn-outline bg-gray-600 text-white border-0"
        >
          Purchase
        </Link>
      </div>
    </div>
  );
};

export default Product;
