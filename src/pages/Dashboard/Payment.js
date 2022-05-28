import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

//============================================================================================
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading";
//============================================================================================

const stripePromise = loadStripe(
  "pk_test_51L3w4cDoq90eZznRqOyB0fxThxZObin0zKIWzcqhP1JGQUGxBEqGPRzfF0e1IdKIBwC1eakhIBFwI1LSdd9FLcEn00g6ADY4XK"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;
  //=========================================================================================
  //   const { data: appointment, isLoading } = useQuery(["booking", id], () =>
  //     fetch(url).then((res) => res.json())
  //   );
  //   if (isLoading) {
  //     return <Loading />;
  //   }
  //==========================================================================================
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);
  const { userName, name, quantity, price } = orders;
  return (
    <div className="py-10">
      <div className=" w-3/5 mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="font-bold text-blue-600 text-2xl">Hello,{userName}</p>
            <h2 className="card-title">
              Please Pay For{" "}
              <span className="italic font-serif font-semibold">{name}</span>
            </h2>
            <p>
              You have Order {quantity} Unites & Per Unite Price Is ${price}
            </p>
            <p>Please Pay : ${quantity * price} For Your Order</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mt-5 mb-12">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm orders={orders} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
