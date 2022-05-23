import React from 'react';

const Purchase = () => {
    return (
      <div class="hero min-h-screen p-10">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Login now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm bg-base-100">
            <h1 className="text-center font-serif font-bold text-4xl pt-5 ">
              Fill This Form
            </h1>
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-serif font-bold">Name</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-serif font-bold">Email</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-serif font-bold">Address</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-serif font-bold">
                    Phone Number
                  </span>
                </label>
                <input
                  type="text"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-serif font-bold">
                    Product Quantity
                  </span>
                </label>
                <input
                  type="text"
                  class="input input-bordered"
                />
              </div>

              <div class="form-control mt-6">
                <button class="btn btn-primary">Confirm Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Purchase;