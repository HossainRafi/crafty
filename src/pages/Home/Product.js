import React from 'react';

const Product = ({product}) => {
    const { name, img, minquantity, maxquantity, desc, price } = product;
    return (
      <div className="card bg-gray-50">
        <figure className="px-5 pt-5">
          <img
            src={img}
            alt=""
            className="rounded-xl w-[230px] h-[190px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl mx-auto font-bold">
            {name}
          </h2>
          <p className="text-justify">{desc}</p>
          <p className="text-justify font-bold">Available Product: {maxquantity}</p>
          <p className="text-justify font-bold">Minimum Order: {minquantity}</p>
          <p className="text-justify font-bold">Per Product Price: ${price}</p>
        </div>
      </div>
    );
};

export default Product;