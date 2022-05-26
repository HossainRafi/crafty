import React, { useEffect, useState } from "react";
import auth from "./../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Purchase = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [id]);

  const [error, setError] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    setError("");
    const userName = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const mobile = e.target.mobile.value;
    const quantity = e.target.quantity.value;
    const purchase = { userName, name, email, address, mobile, quantity };

    if (+quantity < +minquantity) {
      return setError(`Please Order Minimum ${minquantity} Pieces`);
    }
    if (+quantity > +maxquantity) {
      return setError(`You Can Order Maximum ${maxquantity} Pieces`);
    }

    fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        purchase,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your order is accepted",
            showConfirmButton: false,
            timer: 1500,
          });

          e.target.reset();
          navigate("/dashboard/myOrder");
        }
      });
  };
  const { name, img, minquantity, maxquantity, desc, price } = products;
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
            <p className="font-bold">Available Product: {maxquantity} Units</p>
            <p className="font-bold">Minimum Order: {minquantity} Units</p>
            <p className="font-bold">Price: ${price} Per Unit</p>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
          <h1 className="text-center font-serif font-bold text-4xl pt-5 ">
            Fill This Form
          </h1>

          <div className="card-body">
            <form onSubmit={handleForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif font-bold">
                    Your Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
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
                  name="email"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif font-bold">
                    Your Address
                  </span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif font-bold">
                    Phone Number
                  </span>
                </label>
                <input
                  type="number"
                  name="mobile"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-serif font-bold">
                    Product Quantity
                  </span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  className="input input-bordered"
                  // onChange={handleForm}
                />
              </div>
              {error && (
                <p className="text-red-500 text-center pt-1">{error}</p>
              )}
              <div className="form-control mt-6">
                <button
                  // disabled={
                  //   error.quantity?.type === "maxquantity" ||
                  //   error.quantity?.type === "minquantity"
                  // }
                  className="btn btn-primary"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
