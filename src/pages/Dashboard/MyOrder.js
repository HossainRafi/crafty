import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Order from "./Order";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <div className="p-5">
      <h1 className="text-center pb-5 font-serif font-bold text-3xl text-blue-500">
        My Order
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
            {orders.map((order) => (
              <Order key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
