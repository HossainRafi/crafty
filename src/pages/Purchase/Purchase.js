import React from "react";
import auth from "./../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Purchase = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="hero min-h-screen p-10">
      <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
          <h1 className="text-center font-serif font-bold text-4xl pt-5 ">
            Fill This Form
          </h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-serif font-bold">Your Name</span>
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
                <span className="label-text font-serif font-bold">Your Email</span>
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
                <span className="label-text font-serif font-bold">Your Address</span>
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
