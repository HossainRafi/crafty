import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "./../Shared/Loading";
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;
  //   const { data: appointment, isLoading } = useQuery(["booking", id], () =>
  //     fetch(url).then((res) => res.json())
  //   );
  //   if (isLoading) {
  //     return <Loading />;
  //   }
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);
  const { userName, name, quantity, price } = orders;
  return (
    <div>
      <div className=" w-3/5 mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="font-bold text-blue-500">Hello,{userName}</p>
            <h2 className="card-title">Please pay for {name}</h2>
            <p>
              You have Order {quantity} Unites & Per Unite Price Is ${price}
            </p>
            <p>Please Pay : ${quantity * price} For Your Order</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl my-12">
          {/* <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm part={part} />
            </Elements>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
