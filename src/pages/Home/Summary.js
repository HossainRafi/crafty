import React from "react";

const Summary = () => {
  return (
    <div>
      <h1 className="text-blue-900 text-center text-4xl font-bold font-serif uppercase pb-10">
        Millions Business Trust Us
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 pb-10">
        <div className="card">
          <i className="lar la-flag text-7xl text-green-600 text-center"></i>
          <h2 class="card-title mx-auto font-bold text-4xl">30+</h2>
          <p className="text-green-600 font-semibold text-lg text-center">
            Countries
          </p>
        </div>
        <div className="card">
          <i class="las la-tools text-7xl text-green-600 text-center"></i>
          <h2 class="card-title mx-auto font-bold text-4xl">50+</h2>
          <p className="text-green-600 font-semibold text-lg text-center">
            Tools
          </p>
        </div>
        <div className="card">
          <i class="las la-users text-7xl text-green-600 text-center"></i>
          <h2 class="card-title mx-auto font-bold text-4xl">250+</h2>
          <p className="text-green-600 font-semibold text-lg text-center">
            Clients
          </p>
        </div>
        <div className="card">
          <i class="las la-comments text-7xl text-green-600 text-center"></i>
          <h2 class="card-title mx-auto font-bold text-4xl">50+</h2>
          <p className="text-green-600 font-semibold text-lg text-center">
            Feedbacks
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
