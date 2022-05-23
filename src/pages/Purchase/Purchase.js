import React, { useEffect, useState } from "react";
import auth from "./../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [products, setProducts] = useState({});
  console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);
  const { _id, name, img, minquantity, maxquantity, desc, price } = products;
  return (
    <div className="hero min-h-screen py-10 px-20">
      <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
        <div className="card bg-gray-50">
          <figure className="px-5 pt-5">
            <img src={img} alt="" className="rounded-xl w-[250px] h-[210px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl mx-auto font-bold">{name}</h2>
            <p className="text-justify">{desc}</p>
            <p className="font-bold">Available Product: {maxquantity}</p>
            <p className="font-bold">Minimum Order: {minquantity}</p>
            <p className="font-bold">Per Product Price: ${price}</p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
          <h1 className="text-center font-serif font-bold text-4xl pt-5 ">
            Fill This Form
          </h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-serif font-bold">
                  Your Name
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={user?.displayName}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-serif font-bold">
                  Your Email
                </span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={user?.email}
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-serif font-bold">
                  Your Address
                </span>
              </label>
              <input type="text" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-serif font-bold">
                  Phone Number
                </span>
              </label>
              <input type="number" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-serif font-bold">
                  Product Quantity
                </span>
              </label>
              <input type="number" className="input input-bordered" />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Confirm Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
