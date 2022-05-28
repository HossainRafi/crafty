import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Order from "./Order";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://desolate-waters-73882.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div className="p-5">
      <h1 className="text-center pb-5 font-serif font-bold text-3xl text-blue-500">
        My Order
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-center">No:</th>
              <th className="text-center">User Name</th>
              <th className="text-center">Product Name</th>
              <th className="text-center">Quantity</th>
              <th className="text-center">Buy</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Order key={order._id} index={index} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
